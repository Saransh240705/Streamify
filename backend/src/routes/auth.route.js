import express from "express";
import { signup, login, logout, onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.post("/onboarding", protectRoute, onboard)

// Get the current user
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ user: req.user });
})

export default router;
