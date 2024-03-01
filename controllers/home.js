const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  res.json({"Authors":"có đầu buồi"});
};
