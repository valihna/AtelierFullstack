const express = require("express");

const router = express.Router();

// const client = require("../database/client");

// /* ************************************************************************* */
// // Define Your API Routes Here
// /* ************************************************************************* */

// // Import itemControllers module for handling item-related operations
const activitiesControllers = require("./controllers/ActivitiesControllers");
const countriesControllers = require("./controllers/CountriesControllers");
const authControllers = require("./controllers/authControllers");
const favoritesControllers = require("./controllers/FavoritesControllers");
// const authController = require("./controllers/path-to-auth-controller");
// // Route to get a list of items
router.get("/activities", activitiesControllers.browse);
router.get("/countries", countriesControllers.browse);
router.get("/allcountries", countriesControllers.readCountries);
router.get("/countries", favoritesControllers.getFavorite);

// // Route to get a specific item by ID
router.get("/activities/:id", activitiesControllers.read);
router.get("/countries/:id", countriesControllers.read);
// // Route to update a new item
router.put("/activities/:id", activitiesControllers.update);
router.put("/countries/:id", countriesControllers.update);
router.put("/countries/:id", favoritesControllers.update);
// router.post:
router.post("/activities", activitiesControllers.add);
router.post("/countries", countriesControllers.add);
// router.post("/registration", authControllers.create);
router.post("/auth/create", authControllers.create);
router.post("/auth/create", authControllers.log);

// router.delete:
router.delete("/activities/:id", activitiesControllers.destroy);
router.delete("/countries/:id", countriesControllers.destroy);
router.delete("/activities/:id", activitiesControllers.destroy);
// router.delete("/countries:id"), favoritesControllers.destroy;

module.exports = router;
