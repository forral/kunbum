const Movements = require("../models/movementModel");
const mongoose = require("mongoose");

// get all movements
const getMovements = async (req, res) => {
  try {
    const movements = await Movements.find({}).sort({ createdAt: -1 });
    res.status(200).json(movements);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a specific movement
const getMovement = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such movement" });
  }

  try {
    const movement = await Movements.findById(id);

    if (!movement) {
      return res.status(404).json({ error: "No such movement" });
    }

    res.status(200).json(movement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create a new movement
const createMovement = async (req, res) => {
  const { date, description, value, category, account } = req.body;

  try {
    const movement = await Movements.create({
      date,
      description,
      value,
      category,
      account,
    });

    res.status(200).json(movement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a movement
const deleteMovement = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such movement" });
  }

  const movement = await Movements.findOneAndDelete({ _id: id });

  if (!movement) {
    return res.status(404).json({ error: "No such movement" });
  }

  res.status(200).json(movement);
};

// update a movement
const updateMovement = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such movement" });
  }

  const movement = await Movements.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!movement) {
    return res.status(404).json({ error: "No such movement" });
  }

  res.status(200).json(movement);
};

module.exports = {
  createMovement,
  getMovements,
  getMovement,
  deleteMovement,
  updateMovement,
};
