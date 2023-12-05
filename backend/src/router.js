const express = require("express");

const router = express.Router();

// const client = require("../database/client");

// /* ************************************************************************* */
// // Define Your API Routes Here
// /* ************************************************************************* */

// // Import itemControllers module for handling item-related operations
const activityControllers = require("./controllers/activityControllers");
const paysControllers = require("./controllers/paysControllers");

// // Route to get a list of items
router.get("/activities", activityControllers.getActivity);
router.get("/destinations", paysControllers.getPays);

// // Route to get a specific item by ID
router.get("/destinations/:id", activityControllers.getActivityByID);
router.get("/destinations/:id", paysControllers.getPaysByID);

// // Route to add a new item
// // router.post("/DESTINATIONS", itemControllers.add);
// router.post("/destinations", activityControllers.add);
// router.post("/destinations", paysControllers.add);

module.exports = router;

// /* ************************************************************************* */
// router.get("./destinations", (req, res) => {
//   let query = "SELECT * FROM activity";
//   const value = [];
//   if (req.query.pays) {
//     query += "WHERE pays_id = ?";
//     value.push(req.query.pays);
//   }
//   client
//     .query(query, value)
//     .then((result) => {
//       res.status(200).json(result[0]);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });
