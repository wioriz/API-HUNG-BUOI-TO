const router = require("express").Router();
const { taixiu } = require("../controllers/taixiu");
const { vdgai } = require("../controllers/vdgai");
const { anhgai } = require("../controllers/anhgai");
const { home } = require("../controllers/home");

router.get("/vdgai", vdgai);
router.get("/anhgai", anhgai);
router.get("/", home);

module.exports = router; 
