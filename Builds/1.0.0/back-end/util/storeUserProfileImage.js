const multer = require("multer");
const { getUserByEmail } = require("../database/user");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/images/uploads/userProfileImages");
	},
	filename: function (req, file, cb) {
		if (file.fieldname !== undefined) {
			const user = getUserByEmail(req.email);
			const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
			cb(
				null,
				user.firstName + "-" + user.lastName + "-" + uniqueSuffix + ".png"
			);
			req.body.image =
				user.firstName + "-" + user.lastName + "-" + uniqueSuffix + ".png";
		} else {
			return;
		}
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
