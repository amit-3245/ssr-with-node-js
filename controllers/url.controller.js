const urls = require("../models/url.model");

// generate random short code
const generateCode = () => {
    return Math.random().toString(36).substring(2, 8);
};

// show dashboard
const getDashboard = (req, res) => {
    res.render("pages/dashboard", { urls });
};

// create short URL
const createShortUrl = (req, res) => {
    const { originalUrl } = req.body;

    const shortCode = generateCode();

    urls.push({
        originalUrl,
        shortCode
    });

    res.redirect("/dashboard");
};

// redirect
const redirectUrl = (req, res) => {
    const { code } = req.params;

    const url = urls.find(u => u.shortCode === code);

    if (url) {
        res.redirect(url.originalUrl);
    } else {
        res.send("URL not found");
    }
};

module.exports = {
    getDashboard,
    createShortUrl,
    redirectUrl
};