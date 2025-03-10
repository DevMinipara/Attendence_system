import express from "express";
import { registerUser, login } from "../controllers/authController";
 // Use correct relative path


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);

export default router;
