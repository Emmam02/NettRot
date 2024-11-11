const sql = require("msnodesqlv8");
const connectionString =
  "server=EMMASPC\\MSSQLSERVER01;Database=NettrotDB;Trusted_Connection=Yes;Driver={ODBC DRIVER 17 for SQL Server}";
const query = "SELECT * FROM dbo.Products";

function fetchData() {
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

module.exports = {
  fetchData: fetchData,
};
