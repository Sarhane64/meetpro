const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/Auth.js");

router.post("/register", authCtrl.postRegister);
router.post("/login", authCtrl.login);
// router.post("/forgot", authCtrl.forgotPassword);
// router.post("/test", authCtrl.test);

module.exports = router; 