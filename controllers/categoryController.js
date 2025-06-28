const Category = require("../models/Category");
const Service = require("../models/Service");

exports.createCategory = async (req, res) => {
  try {
    const category = new Category({ name: req.body.name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const services = await Service.find({ categoryId: req.params.id });
  if (services.length > 0) {
    return res
      .status(400)
      .json({ message: "Category has service, can't delete" });
  }
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
};
