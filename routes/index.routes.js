const express = require("express");
const router = express.Router();

const { getHomePage, getAboutPage } = require("../controllers/index.controller");

router.get("/", getHomePage);
router.get("/about", getAboutPage);

module.exports = router;