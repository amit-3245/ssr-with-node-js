const getHomePage = (req, res) => {
    res.render("pages/index", {
        title: "Home Page",
        name: "Amit Sharma"
    });
};

const getAboutPage = (req, res) => {
    res.render("pages/about");
};

module.exports = { getHomePage, getAboutPage };