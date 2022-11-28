const Categories = require("../models/categotyModel");

// get all movements
const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find({}).sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCategories,
};
