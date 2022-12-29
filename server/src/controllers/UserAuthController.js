const UserModel = require("../Models/UserModel");
const bcryptjs = require('bcryptjs');

module.exports.signup = (req, res)=> {
    const { email, username, password, confirmPassword } = req.body;
    if (!email || !username || !password || !confirmPassword) {
        res.send( { err: "All Fields Required !", csrfToken: req.csrfToken() });
    } else if (password != confirmPassword) {
        res.send( { err: "Password Don't Match !", csrfToken: req.csrfToken() });
    } else {
        UserModel.findOne({ $or: [{ email: email }, { username: username }] }, function (err, data) {
            if (err) throw err;
            if (data) {
                res.send( { err: "User Exists, Try Logging In !", csrfToken: req.csrfToken() });
            } else {
                // generate a salt
                bcryptjs.genSalt(12, (err, salt) => {
                    if (err) throw err;
                    // hash the password
                    bcryptjs.hash(password, salt, (err, hash) => {
                        if (err) throw err;
                        // save user in db
                        UserModel({
                            username: username,
                            email: email,
                            password: hash,
                            googleId: null,
                            provider: 'email',
                        }).save((err, data) => {
                            if (err) throw err;
                            
                            res.send({message : "successfully signup !", user: data});
                        });
                    })
                });
            }
        });
    }
}
module.exports.login = (req, res)=> {
    
}

