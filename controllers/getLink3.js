const { errorHandler } = require("../utils");

exports.getLink3 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../moto.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"api":"random video gái","url":`${link}`});
};
