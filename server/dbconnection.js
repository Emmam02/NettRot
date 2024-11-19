const sql = require("msnodesqlv8");
const connectionString =
  "server=EMMASPC\\MSSQLSERVER01;Database=NettrotDB;Trusted_Connection=Yes;Driver={ODBC DRIVER 17 for SQL Server}";

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
