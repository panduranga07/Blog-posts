const { registerUser } = require("../controllers/registerController");
const { loginUser } = require("../controllers/loginController");
const express = require("express");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
