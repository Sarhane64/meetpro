const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/UserControllers");
const EstimateCtrl = require("../controllers/EstimateControllers.js");
const verifyToken = require("../middleware/jwt");

router.get("/user", userCtrl.getUser);
router.get("/user/:id", userCtrl.getUserById);
router.post("/user", userCtrl.postUser);
router.delete("/deleteuser/:id", userCtrl.deleteUser);
router.put("/putuser/:id", userCtrl.putUser);

// Estimate
router.get("/estimate", EstimateCtrl.getEstimateTitle);
router.post("/estimate", EstimateCtrl.postEstimateTitle);

module.exports = router;
