const express = require("express");
const router = express();
const userControllers = require("../controllers/user");
const { body } = require("express-validator");
const User = require("../models/user");
const isAuth = require("../middleware/is-auth");

router.post(
  "/register",
  [
    // body("firstName")
    //   .trim()
    //   .notEmpty()
    //   .withMessage("firstName Is a Required Field"),
    // body("lastName")
    //   .trim()
    //   .notEmpty()
    //   .withMessage("lastName Is a Required Field"),
    body("password")
      .notEmpty()
      .withMessage("Password Is a Required Field")
      .isLength({ min: 6, max: 12 })
      .withMessage("Password Must Be At Least 6 Character to 12 Character "),
  ],

  userControllers.register
);

router.post(
  "/login",
  [
    body("password")
      .notEmpty()
      .withMessage("Password Is a Required Field")
      .isLength({ min: 6, max: 12 })
      .withMessage("Password Must Be At Least 6 Character to 12 Character "),
  ],
  userControllers.login
);

router.get("/verify", isAuth, (req, res) => {
  try {
    return res.status(200).json({ message: "Valid Token" });
  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
});

module.exports = router;
