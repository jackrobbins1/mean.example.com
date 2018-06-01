var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

router.get('/', function(req, res, next){
  res.render('users/index', {title: 'User Management'});
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('users/register', {
    title: 'Create an Account'
    });
});

router.get('/login', function(req, res, next){
  res.render('users/login');
});

router.post('/login', passport.authenticate('local'),
function(req, res, next){
  res.redirect('/ionic');
});

router.get(
  '/logout', function(req,res,next){
  req.logout();
  res.redirect('/users/login');
});

module.exports = router;
