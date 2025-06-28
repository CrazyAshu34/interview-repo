const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");

const ADMIN_EMAIL = "admin@codesfortomorrow.com";
const ADMIN_PASSWORD = "Admin123!@#";

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expireIn: "1h" });
  res.json({ token });
});

module.exports = router;
