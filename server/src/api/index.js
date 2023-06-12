import { Router } from "express";
import { AsyncRouter } from "express-async-router";

import { getAllCompanies, getCompanyByID, authenticateUser, decrementCredit } from "./controller.js";

const router = AsyncRouter(Router());

router.get("/company/:id", getCompanyByID);
router.get("/company", getAllCompanies);
router.get("/user/auth/:username", authenticateUser);
router.put("/user/decrement-credit/:userID", decrementCredit);

export default router;