//SECURITY STUFF

let isLoggedIn = false;

//REQUIRED FOR HASHING
let crypto = require('crypto');

const { debugPort } = require('process');

const iterations = 1000;

const hashSize = 64;

const hashAlgorithm = 'sha256';

const salt = crypto.randomBytes(255).toString('hex');

console.log(salt);

const pepper = 'f3d2a3591f4e536548dbedb332fc26ef020064ba1e3422a21862d37464ed03c9baaaa8d0d8be2525fa907d12258863b172fdd114ce0760037499f0b9544083be128a6ec6a83b30f7de2592ef8dc51ff16c12c6a78883d4bb41ee8e2954387ba50675c1c0f1dc8a334edfcddf75f5fb2865869be33395c4896b373322e22ee1ed5e8bf3521b7103322c17ab2f59bf14e92ec3eea58bda375f83f4b3534eaa7ff2e41e039a82d6cdb1fbf24e21c7987e8132c657a63b9e18def4fa41b4516b364ea1071712bcc24c38fc7e25199f562fcf1ea0f540b581227b6ab7e2b16d4c3098327f411fc8d68642e1402117a3a397b91fdb7bb3e66400a8ab5746c45f8c6e'

// THIS FUNCTION HASHES THE PASSWORD AND ADDS THE PEPPER (SERVERSIDE SALT) AND THEN ADDS THAT HASH TO THE SALT (STORED IN THE DATABASE) 
function passwordHash(thePassword, theSalt) {
  return crypto.pbkdf2Sync(thePassword, pepper + theSalt, iterations, hashSize, hashAlgorithm).toString('hex');
}


  /* POST login data to validate login page */
router.post('/login', (req, res, next) => {
    let data = req.body;
    let SQLdatabase = req.app.locals.SQLdatabase;
    let db = SQLdatabase;
    //FIND THE USER BY EMAIL
    const FIND_USER = "SELECT * FROM users WHERE email = ?"   
      db.get(FIND_USER, [data.email], (err, rows) => {  
        // IF EMAIL NOT FOUND
        if (err) {        
          found = false;
          res.status(500).send(err);               
        }    
        // WEVE FOUND THE EMAIL, NO WE RUN THE HASHING FUNCTION ON WHAT WAS PUT INTO THE PASSWORD FIELD ON THE FORM.
        // IF THAT GENERATED PASSWORD HASH MATCHES WHAT IS IN THE DATABASE, USING THE SALT STORED IN THE DATABASE AS THE SALT
        // WE LOG THE USER IN.
        if (rows !== undefined && rows.password === passwordHash(data.password, rows.passwordSalt)){    
          logInStatus = true;
          isLoggedIn = true;                  
          res.render('loggedIn', { title: 'You are logged in!' });  
        }
        // IF DETAILS ARE INCORRECT
        else {
          found = false;        
          res.json("INVALID EMAIL OR PASSWORD");
        }       
      })   
})

// THE HASHING OF THE CREATED PASSWORD HAS BEEN IMPLEMENTED IN USER.JS
//adds new user to user database
router.post('/register', function (req, res, next) {
    // GET THESE ELEMENTS FROM THE REQ FORM
    let { email, username, password1, password2 } = req.body;    
    //CHECKS IF 'PASSWORD' AND 'CONFRIM PASSWORD' ARE THE SAME
    if (req.body.password1 === req.body.password2){    
      // gensalt
      // HERE WE GENERATE A COMPLETELY RANDOM SALT
      let generateSalt = crypto.randomBytes(256).toString('hex');
      // WE GENERATE THE PASSWORD TO BE STORED, BY RUNNING THE HASHING FUNCTION ON THE PASSWORD THAT THE USER ENTERED
      // AND ADDING IT TO THE GENERATED SALT
      let storePassword = passwordHash(password2, generateSalt);
      //INITIALIZE THE DATABASE FOR USE  
      let SQLdatabase = req.app.locals.SQLdatabase;
      let db = SQLdatabase;
      // WE STORE THE HASHED PASSWORD ALONG WITH THE PASSWORD SALT IN THE DATABASE, AS WELL AS OTHER REQUIRED DATA
      db.run('INSERT INTO `users` (name, email, password, passwordSalt, posts, joined) VALUES(?, ?, ?, ?, ?, ?)',[username, email, storePassword, generateSalt, 0, new Date()], function(err, result) {
        // ANY ERRORS
        if (err) {
          res.status(500).send(err.message);
          return;
        }  
        //SUCCESS
         res.render('user-db-done', {  "changes": this.changes, loggedIn: changeNavLoginButton(isLoggedIn) })     
      })
    }
});





