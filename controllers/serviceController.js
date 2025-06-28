const Service = require("../models/Service");

exports.createService = async (req, res) => {
  try {
    const service = new Service({
      categoryId: req.params.categoryId,
      name: req.body.name,
      type: req.body.type,
      priceOptions: req.body.priceOptions,
    });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getServices = async (req, res) => {
  const services = await Service.find({ categoryId: req.params.categoryId });
  res.json(services);
};

exports.updateService = async (req, res) => {
  try {
    const update = await Service.findOneAndUpdate(
      {
        _id: req.params.serviceId,
        category: req.params.categoryId,
      },
      {
        name: req.body.name,
        type: req.body.type,
        priceOptions: req.body.priceOptions,
      },
      { new: true }
    );
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteService = async (req, res) => {
  await Service.findOneAndDelete({
    _id: req.params.serviceId,
    categoryId: req.params.categoryId,
  });
  res.json({ message: "Service delete" });
};
