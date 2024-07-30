import express from "express";
import { createTrainingSession } from "../../controllers/trainingSession.controller.js";

const router = express.Router();

// router.get('/', getAllTrainingSessions);
//router.get("/:id", getTrainingSession);
router.post('/', createTrainingSession);
// router.patch("/:id", updateTrainingSession);
// router.delete("/:id", deleteTrainingSession);

export default router;