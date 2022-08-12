const userDB = require("../database/user");
const { passwordHash } = require("./passwordHash");

exports.checkPasswordAgainstHash = (password, email) => {
	const user = userDB.getUserByEmail(email);
	if (user !== undefined) {
		if (
			user.password === passwordHash(password, user.passwordSalt).hashedPassword
		) {
			return true;
		}
	}
	return false;
};
