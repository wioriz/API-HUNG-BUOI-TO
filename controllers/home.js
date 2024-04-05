const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  res.json({"Authors":"API ĐANG HOẠT ĐỘNG BÌNH THƯỜNG"});
};
