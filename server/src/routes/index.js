const express = require('express');
const userAuthController = require('../controllers/UserAuthController');
const router = express.Router();
const passport = require('passport');


router.post('/signup', userAuthController.signup);

router.post('/login', userAuthController.login);


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email',] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/profile');
});




module.exports = router;