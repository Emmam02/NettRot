const express = require("express");
const sql = require("mssql");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3000;

const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    enctryption: true,
    trustServerCertificate: true,
  },
};

app.get("/api/data", async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    console.log("Pool: " + pool);
    let result = await pool.request().query("SELECT * FROM dbo.Products");
    console.log("Result: " + result);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("Feil ved henting av data");
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
