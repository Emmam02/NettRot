require("dotenv").config();
const express = require("express");
const db = require("./dbconnection");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const sql = require("msnodesqlv8");
const { body, validationResult } = require("express-validator");

const port = 4000;

const connectionString = process.env.DB_CONNECTION_STRING;

app.use(express.json());
app.use(cors());
app.get("/products", async (req, res) => {
  try {
    const result = await db.fetchProducts();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const result = await db.fetchUsers();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/purchases", async (req, res) => {
  try {
    const result = await db.fetchPurchases();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post(
  "/register",
  [
    body("email").isEmail().withMessage("Ugyldig mail"),
    body("username")
      .isLength({ min: 3 })
      .withMessage("Brukernavn skal være minst 3 tegn"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Passord må være minst 6 tegn"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("Valideringsfeil:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, username, password } = req.body;

    try {
      const checkEmailQuery = "SELECT * FROM Users WHERE Email = ?";
      sql.query(
        connectionString,
        checkEmailQuery,
        [email],
        async (err, rows) => {
          if (err) {
            console.error("Feil ved sjekk av e-post:", err);
            return res.status(500).json({ error: "Server error" });
          }
          console.log("E-postresultat:", rows);
          if (rows.length > 0) {
            return res.status(400).json({ error: "Email er allerede i bruk" });
          }

          const checkUsernameQuery = "SELECT * FROM Users WHERE Username = ?";
          sql.query(
            connectionString,
            checkUsernameQuery,
            [username],
            async (err, rows) => {
              if (err) {
                console.error("Feil ved sjekk av brukernavn:", err);
                return res.status(500).json({ error: "Server error" });
              }
              if (rows.length > 0) {
                return res
                  .status(400)
                  .json({ error: "Brukernavn er allerede i bruk" });
              }
              console.log("Brukernavn er unikt. Hasher passord...");

              const hashedPassword = await bcrypt.hash(password, 10);

              const query =
                "INSERT INTO Users (Username, Email, PasswordHash) VALUES (?, ?, ?)";
              sql.query(
                connectionString,
                query,
                [username, email, hashedPassword],
                (err, result) => {
                  if (err) {
                    console.error("Feil ved innsatt bruker:", err);
                    return res.status(500).json({ error: "Server error" });
                  }
                  console.log("Bruker opprettet:", result);
                  res.status(201).json({ message: "Bruker opprettet" });
                }
              );
            }
          );
        }
      );
    } catch (error) {
      console.error("Generell serverfeil:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
