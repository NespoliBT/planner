import cors from "cors";
import express from "express";
import planRoute from "./routes/plan";
import { initDB } from "./services/initDB";

// Main server function
export function runServer() {
  // Starts a connection to the database
  initDB.getDB("Database.db");

  // Starts the express process
  const app = express();

  // Express configs
  app.use(express.json());
  app.use(cors());

  // Routes
  app.use("/plans", planRoute);

  // The port used by the server
  app.listen(1337);

  console.log("Listening on port 1337...");
}
