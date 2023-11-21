import { Router } from "express";
import { fetchfeedbackCollection, formSubmition } from "../controllers/userControllers.js";
const router = Router();
router.post("/submitFrom",formSubmition)
router.get("/fetchfeedback",fetchfeedbackCollection)
export default router;