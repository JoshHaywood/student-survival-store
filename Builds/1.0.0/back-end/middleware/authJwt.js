const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];

	if (!token) {
		return res.status(403).send({
			message: "No token provided!",
		});
	}

	jwt.verify(token, jwtSecret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!",
			});
		}
		req.email = decoded.email;
		next();
	});
};

const authJwt = {
	verifyToken: verifyToken,
};

module.exports = authJwt;
