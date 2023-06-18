const express = require("express");
const router = express.Router();
const setpaymentController = require("../controller/paymentController");

router.post("/api/data", setpaymentController.getproblem);
module.exports = router;
