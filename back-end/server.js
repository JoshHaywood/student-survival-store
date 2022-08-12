const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
var sqlite3 = require("sqlite3").verbose();

// Route files
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// Parse "application/json" requests
app.use(express.json());

// Cross-origin resource sharing (Allows requests from the front-end)
const corsOptions = {
	origin: "http://localhost:3000", // This should be the front-end URL
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Expose the "public" directory
app.use(express.static("public"));

let SQLdatabase = new sqlite3.Database("./SQLdatabase.db");
app.locals.SQLdatabase = SQLdatabase;
//SQL COMMANDS
const GET_ALL_USERS = "SELECT * FROM `userinfo`"; // SQL command
const GET_ALL_SUBSCRIPTIONS = "SELECT * FROM `allSubscriptions`"; // SQL Command
const SQL_UPDATE_USER_DATA =
	"UPDATE userinfo SET  emailAddress = ?, firstName = ?, lastName = ?, password = ?, dateOfBirth = ?, address = ?, postCode = ?, profilePicture = ?, profileInfo = ?, isSubscribed = ?, subscription = ? WHERE id = ?"; //SQL command
const GET_FIRST_NAME_BY_EMAIL =
	"SELECT firstName FROM userinfo WHERE emailAddress = ?";
const GET_FULL_NAME_BY_EMAIL =
	"SELECT firstName, lastName FROM userinfo WHERE emailAddress = ?";
const GET_ALL_PRODUCT_FEEDBACK = "SELECT * FROM `productFeedback`";

// SET UP SUBSCRIPTION INFO TABLE
app.get("/SQLDatabaseSubscriptionSetup", (req, res, next) => {
	let SQLdatabase = req.app.locals.SQLdatabase;
	//these queries must run one by one - dont try and delete and create tables at the same time.
	SQLdatabase.serialize(() => {
		//delete the table if it exists..
		SQLdatabase.run("DROP TABLE IF EXISTS `allSubscriptions`");
		//create required fields
		SQLdatabase.run(
			"CREATE TABLE `allSubscriptions`  (subscriptionType VARCHAR(255) PRIMARY KEY, interval INT, price DECIMAL)"
		);

		//create test rows (dummy data)
		let rows = [
			["The Catalyzer", 1, 16.0],
			["Shooting Stars", 1, 21.15],
			["Neptune", 1, 12.0],
			["The 400 Blows", 2, 18.4],
		];

		// for each row in the test data, apply to these fields
		rows.forEach((row) => {
			SQLdatabase.run(
				"INSERT INTO `allSubscriptions` (subscriptionType, interval, price) VALUES(?,?,?)",
				row
			);
		});
	});
	// confirmation console log
	console.log(
		"TABLE 'allSubscriptions' HAS BEEN DELETED AND RECREATED IN 'SQLdatabase.db'"
	);
	res.json(
		"TABLE 'allSubscriptions' HAS BEEN DELETED AND RECREATED IN 'SQLdatabase.db'"
	);
});

// RAN BY `allSubscriptions` ENDPOINT TO DISPLAY EXISITING SUBSCRIPTION TYPES
const getAllSubscriptions = (request, response) => {
	let SQLdatabase = app.locals.SQLdatabase;
	//run GET_ALL_USERS on the database, returning either an error or the rows (data)
	SQLdatabase.all(GET_ALL_SUBSCRIPTIONS, [], (err, rows) => {
		if (err) {
			//respond with 500 code and error if failure
			response.status(500).send(err.message);
			return;
		}
		//respond with rows if success

		//TEST CONSOLE LOG TO CHECK IF WE CAN GET 2 POINT DECIMAL INSTEAD OF JUST 16 AS PRICE
		// if (rows[0].subscriptionType === "The Catalyzer") {
		// 	console.log(rows[0].price.toFixed(2))
		// }
		response.json(rows);
	});
};

// SET UP PRODUCT FEEDBACK TABLE
app.get("/SQLDatabaseProductFeedbackSetup", (req, res, next) => {
	let SQLdatabase = req.app.locals.SQLdatabase;
	//these queries must run one by one - dont try and delete and create tables at the same time.
	SQLdatabase.serialize(() => {
		//delete the table if it exists..
		SQLdatabase.run("DROP TABLE IF EXISTS `productFeedback`");
		//create required fields
		SQLdatabase.run(
			"CREATE TABLE `productFeedback`  (productID INT, brandName VARCHAR(255), productName VARCHAR(255), feedback BLOB, image VARCHAR(255))"
		);

		//create test rows (dummy data)
		let rows = [
			[
				00123,
				"NAME OF BRAND",
				"NAME OF PRODUCT",
				"This is my feedback on this product (STORED AS BLOB STORAGE)",
				"IMAGE, THIS MIGHT NEED TO BE A LINK URL TO AN IMAGE OR A LOCATION FOR THE IMAGE IN THE LOCAL PROJECT FILES",
			],
			[
				00123,
				"NAME OF BRAND",
				"NAME OF PRODUCT",
				"This is my feedback on this product (STORED AS BLOB STORAGE)",
				"IMAGE, THIS MIGHT NEED TO BE A LINK URL TO AN IMAGE OR A LOCATION FOR THE IMAGE IN THE LOCAL PROJECT FILES",
			],
			[
				00124,
				"NAME OF BRAND",
				"NAME OF PRODUCT",
				"This is my feedback on this product (STORED AS BLOB STORAGE)",
				"IMAGE, THIS MIGHT NEED TO BE A LINK URL TO AN IMAGE OR A LOCATION FOR THE IMAGE IN THE LOCAL PROJECT FILES",
			],
			[
				00125,
				"NAME OF BRAND",
				"NAME OF PRODUCT",
				"This is my feedback on this product (STORED AS BLOB STORAGE)",
				"IMAGE, THIS MIGHT NEED TO BE A LINK URL TO AN IMAGE OR A LOCATION FOR THE IMAGE IN THE LOCAL PROJECT FILES",
			],
		];

		// for each row in the test data, apply to these fields
		rows.forEach((row) => {
			SQLdatabase.run(
				"INSERT INTO `productFeedback` (productID, brandName, productName, feedback, image) VALUES(?,?,?,?,?)",
				row
			);
		});
	});
	// confirmation console log
	console.log(
		"TABLE 'productFeedback' HAS BEEN DELETED AND RECREATED IN 'SQLdatabase.db'"
	);
	res.json(
		"TABLE 'productFeedback' HAS BEEN DELETED AND RECREATED IN 'SQLdatabase.db'"
	);
});

// RAN BY `allProductFeedback` ENDPOINT TO DISPLAY EXISITING FEEDBACK
const getAllproductFeedback = (request, response) => {
	let SQLdatabase = app.locals.SQLdatabase;
	//run GET_ALL_USERS on the database, returning either an error or the rows (data)
	SQLdatabase.all(GET_ALL_PRODUCT_FEEDBACK, [], (err, rows) => {
		if (err) {
			//respond with 500 code and error if failure
			response.status(500).send(err.message);
			return;
		}
		//respond with rows if success
		response.json(rows);
	});
};

// INITIALIZE `userinfo` TABLE IN SQL DATABASE DELETES AND RECREATES WITH TEST DATA
// This only needs to be once to create the table in the database, table is created with one
// dummy user. This would only need to be run again if something really bad happens and we need
// the table to start again from scratch.
// Will comment this out later as it should only be used for database refreshes (emergencies or testing)
app.get("/SQLDatabaseUserInfoSetup", (req, res, next) => {
	let SQLdatabase = req.app.locals.SQLdatabase;
	//these queries must run one by one - dont try and delete and create tables at the same time.
	SQLdatabase.serialize(() => {
		//delete the table if it exists..
		SQLdatabase.run("DROP TABLE IF EXISTS `userinfo`");
		//create required fields
		SQLdatabase.run(
			"CREATE TABLE `userinfo`  (id INTEGER PRIMARY KEY AUTOINCREMENT, emailAddress varchar(255), firstName varchar(255), lastName varchar(255), password varchar(255), passwordSalt varchar(256), dateOfBirth varchar(255), address varchar(255), postCode varchar(255), profilePicture varchar(255), profileInfo TEXT(65535), isSubscribed BIT, subscription varchar(255), profileCompleted BIT)"
		);
		//create test rows (dummy data)
		let rows = [
			[
				"dannydaley@email.com",
				"Danny",
				"Daley",
				"password",
				"f3d2a3591f4e536548dbedb332fc26ef020064ba1e3422a21862d37464ed03c9baaaa8d0d8be2525fa907d12258863b172fdd114ce0760037499f0b9544083be128a6ec6a83b30f7de2592ef8dc51ff16c12c6a78883d4bb41ee8e2954387ba50675c1c0f1dc8a334edfcddf75f5fb2865869be33395c4896b373322e22ee1ed5e8bf3521b7103322c17ab2f59bf14e92ec3eea58bda375f83f4b3534eaa7ff2e41e039a82d6cdb1fbf24e21c7987e8132c657a63b9e18def4fa41b4516b364ea1071712bcc24c38fc7e25199f562fcf1ea0f540b581227b6ab7e2b16d4c3098327f411fc8d68642e1402117a3a397b91fdb7bb3e66400a8ab5746c45f8c6e",
				"1990, 9, 17",
				"93, Fake Street, Falmouth, Cornwall",
				"TR11 GFY",
				"imageLocation",
				"This is the content of my about me section",
				1,
				"NameOfSubscription",
				1,
			],
		];
		// for each row in the test data, apply to these fields
		rows.forEach((row) => {
			SQLdatabase.run(
				"INSERT INTO `userinfo` (emailAddress, firstName, lastName, password, passwordSalt, dateOfBirth, address, postCode, profilePicture, profileInfo, isSubscribed, subscription, profileCompleted) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
				row
			);
		});
	});
	// confirmation console log
	console.log(
		"TABLE 'userinfo' HAS BEEN DELETED AND RECREATED IN 'SQLdatabase.db'"
	);
	res.json(
		"TABLE 'userinfo' HAS BEEN DELETED AND RECREATED IN 'SQLdatabase.db'"
	);
});

// ENSURE req AND res ARE PASSED AS ARGUMENTS, RESPONSE IN HANDLED WITHIN THE FUNCTION
// SO IS NOT REQUIRED AT THE END OF THE ROUTE THAT THIS SITS IN
const getAllUsers = (request, response) => {
	let SQLdatabase = app.locals.SQLdatabase;
	//run GET_ALL_USERS on the database, returning either an error or the rows (data)
	SQLdatabase.all(GET_ALL_USERS, [], (err, rows) => {
		if (err) {
			//respond with 500 code and error if failure
			response.status(500).send(err.message);
			return;
		}
		//respond with rows if success
		response.json(rows);
	});
};

const getFirstNameByEmail = (request, response) => {
	let SQLdatabase = app.locals.SQLdatabase;
	//run GET_ALL_USERS on the database, returning either an error or the rows (data)
	// SQLdatabase.all(GET_ALL_USERS, [], (err, rows) => {
	SQLdatabase.get(
		GET_FIRST_NAME_BY_EMAIL,
		"dannydaley@email.com",
		(err, rows) => {
			if (err) {
				//respond with 500 code and error if failure
				response.status(500).send(err.message);
				return;
			}
			//respond with rows if success

			response.json(rows);
		}
	);
};

const getFullNameByEmail = (request, response) => {
	let SQLdatabase = app.locals.SQLdatabase;

	SQLdatabase.get(
		GET_FULL_NAME_BY_EMAIL,
		[request.body.emailAddress],
		(err, rows) => {
			if (err) {
				//respond with 500 code and error if failure
				response.status(500).send(err.message);
				return;
			}
			//respond with rows if success
			response.json(rows);
		}
	);
};

// RETURNS ALL USERS CURRENTLY IN THE DATABASE
app.get("/allUsers", (req, res, next) => {
	getAllUsers(req, res);
});

app.get("/allSubscriptions", (req, res, next) => {
	getAllSubscriptions(req, res);
});

app.get("/allProductFeedback", (req, res, next) => {
	getAllproductFeedback(req, res);
});
// RETURNS ALL USERS CURRENTLY IN THE DATABASE
app.get("/getUserFirstNameByEmail", (req, res, next) => {
	getFirstNameByEmail(req, res);
	// res.json(req.body.emailAddress)
});

// RETURNS USERS fName BY EMAIL
app.post("/getFirstNameByEmail", (req, res, next) => {
	getFirstNameByEmail(req, res);
	// res.json(req.body.emailAddress)
});
// RETURNS USERS firstName, lastName BY EMAIL
app.post("/getFullNameByEmail", (req, res, next) => {
	getFullNameByEmail(req, res);
	// res.json(req.body.emailAddress)
});
// EMAIL, FNAME AND OTHER ARGUMENTS NEED TO COME FROM 'req.body'
const registerUser = (email, fName, lName, pass, dob, address, pCode) => {
	let profilePicture = "defaultImage";
	let profileInfo = "default profile bio";
	let isSubscribed = 0;
	let subscription = "none";
	// data is a collection in array form of all of the above variables to pass into the SQL query nicely
	let data = [
		email,
		fName,
		lName,
		pass,
		dob,
		address,
		pCode,
		profilePicture,
		profileInfo,
		isSubscribed,
		subscription,
	];
	// run the SQL query with the collected data
	SQLdatabase.run(
		SQLdatabase.run(
			"INSERT INTO `userinfo` (emailAddress, firstName, lastName, password, dateOfBirth, address, postCode, profilePicture, profileInfo, isSubscribed, subscription) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
			data
		)
	);
	SQLdatabase.all(GET_ALL_USERS, [], (err, rows) => {
		if (err) {
			//respond with 500 code and error if failure
			// res.status(500).send(err.message);
			console.log("REGISTER USER ERROR MESSAGE");
			return false;
		}
		//respond with rows if success
		console.log(rows);
		return true;
	});
};

// This puts a new user in the database, variables in the 'const { }' come from the request (form submission)
// the other let variable are defaults that the user can fill out later. I have put them here because the database
// needs some data to add to the table.
app.post("/register", (req, res) => {
	// THIS IF STATEMENT TESTS THE NEW FUNCTION FORM OF THE DB QUERY.
	if (
		registerUser(
			req.body.emailAddress,
			req.body.firstName,
			req.body.lastName,
			req.body.password,
			req.body.dateOfBirth,
			req.body.address,
			req.body.postCode
		)
	) {
		res.json("SUCCESSFUL ROUTE");
	} else {
		res.json("UNSUCCESSFUL ROUTE");
	}
	// THIS SECTION IS COMMENTED OUT AS IT HAS BEEN PUT INTO ITS OWN FUNCTION 'registerUser'
	// CODE HAS BEEN LEFT HERE UNTIL REASONABLE TESTING HAS BEEN DONE.

	//   let SQLdatabase = req.app.locals.SQLdatabase;
	//   const { emailAddress, firstName, lastName, password, dateOfBirth, address, postCode } = req.body
	//   let profilePicture = 'defaultImage';
	//   let profileInfo = 'default profile bio';
	//   let isSubscribed = 0;
	//   let subscription = 'none'
	//   // data is a collection in array form of all of the above variables to pass into the SQL query nicely
	//   let data = [ emailAddress, firstName, lastName, password, dateOfBirth, address, postCode, profilePicture, profileInfo, isSubscribed, subscription ]
	//   // run the SQL query with the collected data
	//   SQLdatabase.run(SQLdatabase.run('INSERT INTO `userinfo` (emailAddress, firstName, lastName, password, dateOfBirth, address, postCode, profilePicture, profileInfo, isSubscribed, subscription) VALUES(?,?,?,?,?,?,?,?,?,?,?)', data))
	//   SQLdatabase.all(GET_ALL_USERS, [], (err, rows) => {
	//     if (err) {
	//         //respond with 500 code and error if failure
	//       res.status(500).send(err.message);
	//       console.log("ERRRRORRRRRRRRRRRRRRRRRRRRRRRRRRR")
	//       return;
	//     }
	//     //respond with rows if success
	//     res.json(rows);
	//   })
});

app.listen(3001, () => {
	console.log("BACK-END IS RUNNING ON PORT 3001");
});
