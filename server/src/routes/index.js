const express = require('express');
const userAuthController = require('../controllers/UserAuthController');
const router = express.Router();
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserModel = require('../Models/UserModel');
require('dotenv').config()
 
passport.use(new GoogleStrategy({
    clientID: process.env.clientId,
    clientSecret: process.env.clientSecreT,
    callbackURL: "http://localhost:5000/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile.emails[0].value);

    // find if a user exist with this email or not
    UserModel.findOne({ email: profile.emails[0].value }).then((data) => {
        if (data) {
            return done(null, data);
        } else {
            UserModel({
                username: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                password: null,
                provider: 'google',
                isVerified: true,
            }).save(function (err, data) {
                return done(null, data);
            });
        }
    });
}
));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    UserModel.findById(id, function (err, user) {
        done(err, user);
    });
});


router.post('/signup', userAuthController.signup);

router.post('/login', userAuthController.login);


router.get('/google/login', passport.authenticate('google', { scope: ['profile', 'email',] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/profile');
});




module.exports = router;