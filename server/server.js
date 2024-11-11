// const db = require("./dbconnection");

// async function fetchData() {
//   try {
//     const result = await db.fetchData();
//     console.log("Result: ", result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

const express = require("express");
const db = require("./dbconnection");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.get("/products", async (req, res) => {
  try {
    const result = await db.fetchData();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
