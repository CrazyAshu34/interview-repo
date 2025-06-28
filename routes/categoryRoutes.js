const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

const {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.post("/category", protect, createCategory);
router.get("/categories", protect, getAllCategory);
router.put("/category/:id", protect, updateCategory);
router.delete("/category/:id", protect, deleteCategory);
