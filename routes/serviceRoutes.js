const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

const {
  createService,
  getAllService,
  updateService,
  deleteService,
} = require("../controllers/ServiceController");

router.post("/category/:categoryId/service", protect, createService);
router.get("/category/:categoryId/services", protect, getAllService);
router.put("/category/:categoryId/service/:serviceId", protect, updateService);
router.delete("/category/:categoryId/service/:serviceId", protect, deleteService);
