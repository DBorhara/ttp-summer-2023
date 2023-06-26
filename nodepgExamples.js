// Include the node-postgres library
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "backendscaffold",
  user: "depakborhara",
  password: "",
});

// READ FROM POSTGRESQL FROM NODE
pool.query("SELECT * FROM players", (error, result) => {
  if (error) {
    console.error("Error executing query", error);
  } else {
    console.log("Query result:", result.rows);
  }
});

// WRITE TO POSTGRESQL FROM NODE
// pool.query(
//   `INSERT INTO players
//   ("firstName", "lastName", "jerseyNumber", "createdAt", "updatedAt")
//   VALUES
//   ('Jessica', 'G', '8', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
//   (err, result) => {
//     if (err) {
//       console.error("Error executing query", err);
//     } else {
//       console.log("Query result:", result.rows);
//     }
//   }
// );
