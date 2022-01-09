import Database from "better-sqlite3";
import fs from "fs";
require("dotenv").config();
const homedir = require("os").homedir();

export module initDB {
  export let db: Database;

  /**
   *
   * @param dbName The name of the file containing the database
   * @returns A connection to the database
   */
  export function getDB(dbName: string) {
    // If the database folder does not exist it gets created
    if (!fs.existsSync(`${homedir}/.planner/`)) {
      fs.mkdirSync(`${homedir}/.planner/`);
    }

    // If a connection to the database does not already exist it creates one
    // It also creates the database if it does not exist and runs it's migrations
    if (!db) {
      db = new Database(`${homedir}/.planner/${dbName}`);

      runMigrations(db);
    }

    // returns a connection to the database
    return db;
  }
}

/**
 *
 * @param db The connection to the database
 */
function runMigrations(db: Database) {
  // Creates the plans table
  db.exec(`
  CREATE TABLE IF NOT EXISTS plans (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    
    name           TEXT,
    description    TEXT,
    date           TEXT
  )
`);
}
