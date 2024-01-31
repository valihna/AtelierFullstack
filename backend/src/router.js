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

// // Route to get a list of items
router.get("/activities", activitiesControllers.browse);
router.get("/countries", countriesControllers.browse);
// // Route to get a specific item by ID
router.get("/activities/:id", activitiesControllers.read);
router.get("/countries/:id", countriesControllers.read);
// // Route to update a new item
router.put("/activities/:id", activitiesControllers.update);
router.put("/countries/:id", countriesControllers.update);
// router.post:
router.post("/activities", activitiesControllers.add);
router.post("/countries", countriesControllers.add);
router.post("/login", authControllers.log);
// router.delete:
router.delete("/activities/:id", activitiesControllers.destroy);
router.delete("/countries/:id", countriesControllers.destroy);

module.exports = router;
