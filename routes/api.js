const router = require("express").Router();
const { taixiu } = require("../controllers/taixiu");
const { vdgai } = require("../controllers/vdgai");
const { home } = require("../controllers/home");

router.get("/vdgai", vdgai);
router.get("/", home);

module.exports = router; 
