const mysql = require("mysql2");

const access = {
  user: 'root',
  password: 'Test123',
  host: 'localhost',
  port: 3307,
  database: 'userdb',
};

const conn = mysql.createConnection(access);
module.exports = conn;