import { planController } from "../controllers/planController";
import express from "express";

const planRoute = express.Router();

planRoute.get("/", (req, res) => planController.getPlans(req, res));

export default planRoute;
