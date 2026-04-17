const express = require("express");
const path = require("path");

const app = express();

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const urlRoutes = require("./routes/url.routes");

app.use(express.urlencoded({ extended: true })); // form data

app.use("/", urlRoutes);
// Server start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});