const { errorHandler } = require("../utils");

exports.gaitiktok = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../gaitiktok.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Random Video Gái TikTok","url":`${link}`});
};
