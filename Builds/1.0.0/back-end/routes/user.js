const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware");
const userController = require("../controllers/userController");
const { check } = require("express-validator");
const upload = require("../util/storeUserProfileImage");

router.get(
	"/getOwnProfile",
	[authJwt.verifyToken],
	userController.getOwnProfile
);

router.post(
	"/updateProfile",
	[
		check("dob")
			.isDate()
			.optional({ checkFalsy: true })
			.withMessage("Date of birth format is invalid"),
		check("address")
			.isAlpha("en-GB", {
				ignore: [
					".",
					",",
					"'",
					'"',
					" ",
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
				],
			})
			.optional({ checkFalsy: true })
			.withMessage("Address contains forbidden characters"),
		check("postCode")
			.isPostalCode("any")
			.optional({ checkFalsy: true })
			.withMessage("Post code is invalid"),
		check("about")
			.isAlpha("en-GB", { ignore: [".", ",", "'", "!", "?", '"', " ", "\n"] })
			.withMessage("About me section contains forbidden characters")
			.isLength({ max: 250 })
			.optional({ checkFalsy: true })
			.withMessage("About me section should be 250 or less characters"),
		check("profilePic"),
		authJwt.verifyToken,
	],
	upload.single("profilePic"),
	userController.updateProfile
);

module.exports = router;
