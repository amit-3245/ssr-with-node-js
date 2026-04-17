const express = require("express");
const router = express.Router();

const {
    getDashboard,
    createShortUrl,
    redirectUrl
} = require("../controllers/url.controller");

router.get("/dashboard", getDashboard);
router.post("/shorten", createShortUrl);
router.get("/:code", redirectUrl);

module.exports = router;