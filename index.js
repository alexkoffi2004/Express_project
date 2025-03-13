const express = require("express");
const path = require("path");
const PORT = 3000;
// Middleware pour vérifier l'accès pendant les heures de travail
const {workHoursMiddleware} = require("./middleware/hoursMiddleware")
// routes
const router = require("./router/workRouter");

const app = express();

// moteur de templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware pour les fichier du dossier public (css, images)
app.use(express.static(path.join(__dirname, "public")));
// Middleware pour les heures de travail appliqué sur toute les routes
app.use(workHoursMiddleware);

// utilisation des Routes 
app.use("/", router);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
