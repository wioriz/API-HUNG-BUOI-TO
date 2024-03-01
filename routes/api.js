const router = require("express").Router();
const { getLink1 } = require("../controllers/getLink1");
const { getLink2 } = require("../controllers/getLink2");
const { getLink3 } = require("../controllers/getLink3");
const { getlink4 } = require("../controllers/getlink4");
const { home } = require("../controllers/home");

router.get("/getLink1", getLink1);
router.get("/getLink2", getLink2);
router.get("/getLink3", getLink3);
router.get("/getlink4", getlink4);
router.get("/", home);

module.exports = router; 