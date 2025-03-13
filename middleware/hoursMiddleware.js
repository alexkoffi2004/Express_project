// Middleware pour vérifier l'accès pendant les heures de travail
const workHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi
    const hour = now.getHours();

    const isWorkingDay = day >= 1 && day <= 5;
    const isWorkingHour = hour >= 9 && hour < 17;

    if (isWorkingDay && isWorkingHour) {
        next();
    } else {
        res.render("error", { message: "Ce site est accessible uniquement pendant les heures de travail (Lundi - Vendredi, 9h - 17h)." });
    }
};

module.exports = {workHoursMiddleware};