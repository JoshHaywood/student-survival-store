const sqlite3 = require("sqlite3").verbose();
const betterSqlite3 = require("better-sqlite3")("./SQLdatabase.db");
exports.sqlite3DB = new sqlite3.Database("./SQLdatabase.db");
exports.betterSqlite3DB = betterSqlite3;
