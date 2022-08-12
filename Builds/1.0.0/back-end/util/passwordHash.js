const crypto = require("crypto");
// Hash function settings
const iterations = 1000;
const hashSize = 64;
const hashAlgorithm = "sha256";
const pepper = process.env.PASSWORD_PEPPER;

/* THIS FUNCTION HASHES THE PASSWORD AND ADDS THE PEPPER (SERVERSIDE SALT) 
AND THEN ADDS THAT HASH TO THE SALT (STORED IN THE DATABASE) */
exports.passwordHash = (
	thePassword,
	salt = crypto.randomBytes(256).toString("hex")
) => {
	//generate random string to add to database (salt)
	const passwordSalt = salt;
	const passwordHash = crypto
		.pbkdf2Sync(
			thePassword,
			pepper + passwordSalt,
			iterations,
			hashSize,
			hashAlgorithm
		)
		.toString("hex");
	return {
		hashedPassword: passwordHash,
		passwordSalt: passwordSalt,
	};
};
