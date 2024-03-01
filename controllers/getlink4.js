const { errorHandler } = require("../utils");

exports.getlink4 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../getlink4.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"DungUwU && Lê Anh Trí","url":`${link}`});
};