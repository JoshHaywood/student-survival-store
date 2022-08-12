const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/userController");
const { getUserByEmail } = require("../database/user");
const {
	checkPasswordAgainstHash,
} = require("../util/checkPasswordAgainstHash");

/* Process POST request from sign up form */
router.post(
	"/register",
	[
		check("firstName")
			.notEmpty()
			.withMessage("The first name field is required")
			.isLength({ min: 3, max: 18 })
			.withMessage("The first name should be between 3 and 18 characters")
			.isAlpha("en-GB")
			.withMessage("The first name should contain only letters"),
		check("lastName")
			.notEmpty()
			.withMessage("The surname field is required")
			.isLength({ min: 3, max: 18 })
			.withMessage("The surname should be between 3 and 18 characters")
			.isAlpha("en-GB")
			.withMessage("The surname should contain only letters"),
		check("email")
			.notEmpty()
			.withMessage("The email field is required")
			.custom((value) => {
				if (getUserByEmail(value) !== undefined) {
					throw new Error("Email address is already used.");
				}
				return true;
			})
			.isEmail()
			.withMessage("The email format is invalid"),
		check("password")
			.notEmpty()
			.withMessage("The password field is required")
			.isStrongPassword({ minSymbols: 0 })
			.withMessage(
				"Choose a strong password with at least 8 characters which include at least 1 uppercase letter & at least 1 number"
			)
			.isLength({ max: 128 })
			.withMessage("Your password should be maximum 128 characters long"),
		check("passwordConfirm")
			.notEmpty()
			.withMessage("The confirm password field is required")
			.custom((value, { req }) => {
				if (value !== req.body.password) {
					throw new Error("Password confirmation does not match password");
				}
				return true;
			}),
	],
	userController.register
);

/* Process POST request from login form */
router.post(
	"/login",
	[
		check("email")
			.notEmpty()
			.withMessage("The email field is required")
			.isEmail()
			.withMessage("The email format is invalid")
			.custom((value) => {
				if (getUserByEmail(value) === undefined) {
					throw new Error("A user with that email doesn't exist.");
				}
				return true;
			}),
		check("password")
			.notEmpty()
			.withMessage("The password field is required")
			.custom((value, { req }) => {
				if (!checkPasswordAgainstHash(value, req.body.email)) {
					throw new Error("The password is incorrect.");
				}
				return true;
			}),
		// Todo: Check if the password matches
	],
	userController.login
);

module.exports = router;
