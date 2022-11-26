const express = require("express");
const router = express.Router();
const {
  createMovement,
  getMovements,
  getMovement,
  deleteMovement,
  updateMovement,
} = require("../controllers/movementController");

// GET all movements
router.get("/", getMovements);

// GET a specific movement
router.get("/:id", getMovement);

// POST a new movement
router.post("/", createMovement);

// DELETE a movement
router.delete("/:id", deleteMovement);

// UPDATE a movement
router.patch("/:id", updateMovement);

module.exports = router;
