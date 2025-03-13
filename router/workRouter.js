// Routes

const express = require("express");
const router = express.Router();

// home page
router.get("/", (req, res) => {
    res.render("Acceuil", { title: "Accueil" });
});

// about page
router.get("/services", (req, res) => {
    res.render("services", { title: "Nos Services" });
});

// contact page
router.get("/contact", (req, res) => {
    res.render("contact", { title: "Nous Contacter" });
});

module.exports = router;