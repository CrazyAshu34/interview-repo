const Category = require("../models/Category");
const Category = require("../models/Service");

exports.createCategory = async (req, res) => {
  try {
    const category = new Category({ name: req.body.name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCategoryes = async (req, res) =>{
    const categories = await Category.find();
    res.json(categories);
}

