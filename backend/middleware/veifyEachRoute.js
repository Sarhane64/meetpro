//
// Solution 1 : Appliquer verifyToken à toutes les routes
// javascript
// Copier le code
// const express = require("express");
// const router = express.Router();

// const userCtrl = require("../controllers/UserControllers");
// const EstimateCtrl = require("../controllers/EstimateControllers.js");
// const verifyToken = require("../middleware/jwt");

// // Apply the verifyToken middleware to all routes
// router.use(verifyToken);

// router.get("/user", userCtrl.getUser);
// router.get("/user/:id", userCtrl.getUserById);
// router.post("/user", userCtrl.postUser);
// router.delete("/deleteuser/:id", userCtrl.deleteUser);
// router.put("/putuser/:id", userCtrl.putUser);

// // Estimate
// router.get("/estimate", EstimateCtrl.getEstimateTitle);
// router.post("/estimate", EstimateCtrl.postEstimateTitle);

// module.exports = router;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Solution 2 : Appliquer verifyToken à certaines routes
// javascript
// Copier le code

// const express = require("express");
// const router = express.Router();

// const userCtrl = require("../controllers/UserControllers");
// const EstimateCtrl = require("../controllers/EstimateControllers.js");
// const verifyToken = require("../middleware/jwt");

// // Define routes that require token verification
// const routesWithTokenVerification = [
//   { method: 'get', path: '/user', handler: userCtrl.getUser },
//   { method: 'delete', path: '/deleteuser/:id', handler: userCtrl.deleteUser },
//   { method: 'put', path: '/putuser/:id', handler: userCtrl.putUser },
//   { method: 'post', path: '/estimate', handler: EstimateCtrl.postEstimateTitle },
//   // Add more routes as needed
// ];

// // Apply verifyToken middleware to specified routes
// routesWithTokenVerification.forEach(route => {
//   router[route.method](route.path, verifyToken, route.handler);
// });

// // Define routes that do not require token verification
// router.get("/user/:id", userCtrl.getUserById);
// router.post("/user", userCtrl.postUser);
// router.get("/estimate", EstimateCtrl.getEstimateTitle);

// module.exports = router;
