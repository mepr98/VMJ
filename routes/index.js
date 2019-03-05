const express = require("express");
const router = express.Router();
const City = require('../models/User');
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const CityController = require('../controllers/cityController');

router.get("/", (req, res) => {
  res.render("main", { title: "Layout" });
});

router.get("/user",CityController.verciudades);

router.get("signin", (req, res) => {
  res.render("auth/signin", { title: "Iniciar Sesion" });
});
router.post("signin", authController.signin);
router.get("signup", (req, res) => {
  res.render("auth/signup", { title: "Registrarse" });
});
router.post("signup", userController.signup, authController.signin);

module.exports = router;
