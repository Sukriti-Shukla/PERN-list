const Pool = require("pg").Pool;
// Pg is Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.

const pool = new Pool({
  user: "postgres",
  password: "sukriti@1",
  host: "localhost",
  port: 5432,
  database: "pernapp",
});
module.exports = pool;
