const { errorHandler } = require("../utils");
const fs = require('fs-extra');

exports.vdgai = async (req, res, next) => {
  try {
    const data = fs.readFileSync(__dirname + '/../moto.txt', 'utf-8').split('\n').filter(line => line.trim() !== '');
    const link = data[Math.floor(Math.random() * data.length)].trim();
    const totalLines = data.length;

    res.json({"api":"Random video gái","url":`${link}`, "total": totalLines});
  } catch (error) {
    next(error);
  }
};
