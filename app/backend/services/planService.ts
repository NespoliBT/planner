import { initDB } from "./initDB";

export module planService {
  // This const rapresents the connection to the database
  const db = initDB.getDB("Database.db");

  export function getAll() {
    // Selects all the plans
    return db.prepare("SELECT * FROM plans").all();
  }
}