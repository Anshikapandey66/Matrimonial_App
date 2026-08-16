const express = require("express");

const authRoutes = require("./auth");
const loginRoutes = require("./login");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/auth", loginRoutes);

module.exports = router;
