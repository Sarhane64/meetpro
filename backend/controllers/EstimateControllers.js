const estimate = require("../model/estimate.js");

exports.getEstimateTitle = async (req, res, next) => {
  try {
    const estimateTitle = await estimate.find({});
    res.status(200).json(estimateTitle);
  } catch (error) {
    console.log(error);
    next({ message: error.message });
  }
};
exports.postEstimateTitle = async (req, res, next) => {
  try {
    const estimateTitle = await estimate.create(req.body);
    res.status(200).json(estimateTitle);
  } catch (error) {
    console.log(error);
    next({ message: error.message });
  }
};
