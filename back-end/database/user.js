const { sqlite3DB, betterSqlite3DB } = require("./db");

const storeUserQuery =
	"INSERT INTO `userinfo` (emailAddress, firstName, lastName, password, passwordSalt, dateOfBirth, address, postCode, profilePicture, profileInfo, isSubscribed, subscription, profileCompleted) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
const getUserByEmailQuery = "SELECT * FROM `userinfo` WHERE emailAddress = ?";
const updateById =
	"UPDATE `userinfo` SET emailAddress = ?, firstName = ?, lastName = ?, password = ?, passwordSalt = ?, dateOfBirth = ?, address = ?, postCode = ?, profilePicture = ?, profileInfo = ?, isSubscribed = ?, subscription = ?, profileCompleted = ? WHERE id = ?";

exports.getUserByEmail = (email) => {
	const result = betterSqlite3DB.prepare(getUserByEmailQuery).get(email);
	return result;
};

exports.storeUser = (firstName, lastName, email, password, passwordSalt) => {
	// Default profile values
	const dob = null;
	const address = null;
	const postCode = null;
	const profilePicture = "default.png";
	const profileInfo = null;
	const isSubscribed = 0;
	const subscription = "none";
	const profileCompleted = 0;
	// Craft data to be stored
	const data = [
		email,
		firstName,
		lastName,
		password,
		passwordSalt,
		dob,
		address,
		postCode,
		profilePicture,
		profileInfo,
		isSubscribed,
		subscription,
		profileCompleted,
	];
	// Store data
	sqlite3DB.run(storeUserQuery, data);
	console.log("STORED NEW USER SUCCESSFULLY");
};

exports.updateUser = (user) => {
	betterSqlite3DB
		.prepare(updateById)
		.run(
			user.email,
			user.firstName,
			user.lastName,
			user.password,
			user.passwordSalt,
			user.dob,
			user.address,
			user.postCode,
			user.profilePicture,
			user.profileInfo,
			user.isSubscribed,
			user.subscription,
			user.profileCompleted,
			user.id
		);
};
