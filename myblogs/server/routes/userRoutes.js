const express = require('express');

const router = express.Router();

const {signupHandler, loginHandler, getUserProfile, getMe} = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware');

// signup /v0/user/signup

router.post("/signup", signupHandler);

// login → /api/user/login
router.post("/login", loginHandler);

// get profile → /api/user/profile?id=...
router.get("/profile", getUserProfile);

// get current user → /api/user/me
router.get("/me", protect, getMe);

module.exports = router;

