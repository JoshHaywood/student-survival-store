

// update all of these fields, in userdatabase where email == logged in users email address
//"INSERT INTO `userinfo` (emailAddress, firstName, lastName, password, passwordSalt, dateOfBirth, address, postCode, profilePicture, profileInfo, isSubscribed, subscription) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
//"id , emailAddress , firstName , lastName , password , passwordSalt , address , postCode , profilePicture , profileInfo"
const UPDATE_USER_DATA = "UPDATE `userinfo` SET firstName = ?, lastName = ?, password = ?, passwordSalt() , address = ?, postCode = ?, profilePicture =?, profileInfo = ? WHERE emailAddress = req.body.emailAddress(session data)"

router.post('/updateUserData', (req, res, next) => {
    var form = req.body;
    let SQLdatabase = req.app.locals.SQLdatabase;
    // do the validation
    var errors = [];
    console.log(req.body)
    if (!form.firstName || !form.lastName || !form.password || !form.address || !form.postCpde || !form.profilePicture || !form.profileInfo){
      errors.push("Cannot have blank fields");
    }
    if (errors.length){
      res.status(400).send(errors);
      return;
    }
    // "UPDATE `blog` SET title = ?, image = ?, link = ?, author = ?, date = ?, content = ? WHERE id = ?" //SQL command
    var params = [ form.firstName, form.lastName,form.password, passwordHash(req.body.password.password),  form.address, form.postCode, form.profilePicture, form.profileInfo ];
    SQLdatabase.run(UPDATE_USER_DATA, params, function(err, result){
      if (err) {
        res.status(500).send(err.message)
        return;
      }    
      res.render("blog-db-done", { title: "blog updated",loggedIn: changeNavLoginButton(isLoggedIn) });
    })
  })