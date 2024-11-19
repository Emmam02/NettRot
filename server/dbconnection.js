require("dotenv").config();
const connectionString = process.env.DB_CONNECTION_STRING;
console.log(connectionString);

const sql = require("msnodesqlv8");

function fetchData(query) {
  return new Promise((resolve, reject) => {
    sql.query(connectionString, query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function fetchProducts() {
  query = "SELECT * FROM Products";
  return fetchData(query);
}

function fetchUsers() {
  query = "SELECT * FROM Users";
  return fetchData(query);
}

function fetchPurchases() {
  query = "SELECT * FROM Purchases";
  return fetchData(query);
}

module.exports = {
  fetchProducts,
  fetchUsers,
  fetchPurchases,
};
