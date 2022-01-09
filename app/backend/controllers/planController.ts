import { planService } from "../services/planService";

// All plan related calls end up here
export module planController {
  /**
   *
   * This function is responsable for the request of all the
   * plans stored in the database
   *
   */
  export function getPlans(req, res) {
    // Gets all the plans from the database
    const plans = planService.getAll();

    res.json({"plans": plans});
  }
}
