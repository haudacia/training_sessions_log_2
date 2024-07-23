import express from "express";
import { getAllUsers, createUser } from "../../controllers/user.js";

const router = express.Router();

router.get("/", getAllUsers);
//router.get("/:id", getUser);
router.post("/", createUser);
// router.patch("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default router;
