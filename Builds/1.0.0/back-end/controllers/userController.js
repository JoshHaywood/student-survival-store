const { validationResult } = require("express-validator");
const userDB = require("../database/user");
const { passwordHash } = require("../util/passwordHash");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const { getUserByEmail } = require("../database/user");

exports.register = async (req, res) => {
	// Get all the errors from express validator
	const errors = validationResult(req);
	// Check if there are any errors
	if (!errors.isEmpty()) {
		return res.status(422).jsonp(errors.array());
	} else {
		// Hash the user's password (returns the hashed password & the password salt)
		const hashResult = passwordHash(req.body.password);
		// Create a new user object
		const user = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: hashResult.hashedPassword,
			passwordSalt: hashResult.passwordSalt,
		};
		userDB.storeUser(
			user.firstName,
			user.lastName,
			user.email,
			user.password,
			user.passwordSalt
		);
		// Todo: Create user session
		const jwtToken = jwt.sign({ email: user.email }, jwtSecret, {
			expiresIn: 86400,
		});
		res.send({ status: "success", token: jwtToken });
	}
};

exports.login = async (req, res) => {
	// Get all the errors from express validator
	const errors = validationResult(req);
	// Check if there are any errors
	if (!errors.isEmpty()) {
		return res.status(422).jsonp(errors.array());
	} else {
		const user = {
			email: req.body.email,
		};
		// Todo: Create user session
		const jwtToken = jwt.sign({ email: user.email }, jwtSecret, {
			expiresIn: 86400,
		});
		res.send({ status: "success", token: jwtToken });
	}
};

exports.getOwnProfile = async (req, res) => {
	const user = getUserByEmail(req.email);
	const publicUserData = {
		firstName: user.firstName,
		lastName: user.lastName,
		profilePic: user.profilePicture,
		profileCompleted: user.profileCompleted,
	};
	res.send({ ...publicUserData });
};

exports.updateProfile = async (req, res) => {
	// Get all the errors from express validator
	const errors = validationResult(req);
	// Check if there are any errors
	if (!errors.isEmpty()) {
		return res.status(422).jsonp(errors.array());
	} else {
		const user = getUserByEmail(req.email);
		const updatedUser = {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.emailAddress,
			password: user.password,
			passwordSalt: user.passwordSalt,
			dob: user.dateOfBirth,
			address: user.address,
			postCode: user.postCode,
			profilePicture: user.profilePicture,
			profileInfo: user.profileInfo,
			isSubscribed: user.isSubscribed,
			subscription: user.subscription,
			profileCompleted: user.profileCompleted,
			id: user.id,
		};
		if (req.body.firstName) {
			updatedUser.firstName = req.body.firstName;
		}
		if (req.body.lastName) {
			updatedUser.lastName = req.body.lastName;
		}
		if (req.body.email) {
			updatedUser.email = req.body.email;
		}
		if (req.body.password) {
			// Hash the user's password (returns the hashed password & the password salt)
			const hashResult = passwordHash(req.body.password);
			updatedUser.password = hashResult.hashedPassword;
			updatedUser.passwordSalt = hashResult.passwordSalt;
		}
		if (req.body.dob) {
			updatedUser.dob = req.body.dob;
		}
		if (req.body.address) {
			updatedUser.address = req.body.address;
		}
		if (req.body.postCode) {
			updatedUser.postCode = req.body.postCode;
		}
		if (req.body.image) {
			updatedUser.profilePicture = req.body.image;
		}
		if (req.body.about) {
			updatedUser.profileInfo = req.body.about;
		}
		if (!updatedUser.profileCompleted) {
			updatedUser.profileCompleted = 1;
		}
		userDB.updateUser(updatedUser);
		res.send({ status: "success" });
	}
};
