var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var multer = require('multer');

var User = require('../models/user');
var Cover = require('../models/cover');
var Popular = require('../models/popular');
var Dance = require('../models/dance');
var Picture = require('../models/picture');
var Social = require('../models/social');
var Contact = require('../models/contact');


//var User = mongoose.User;


var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function(req, file, cb) {
		const now = new Date().toISOString(); const date = now.replace(/:/g, '-'); cb(null, date + file.originalname);
	}
});

var fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
  	cb(null, true);
  } else {
  	cb(null, false);
  }
}; 




var upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
});  


/* GET home page. */

router.get('/', function(req, res, next){
  Social.find()
  .then(function(doc1){
    Popular.find()
  .then(function(doc2){
    Picture.find()
  .then(function(doc3){
    Cover.find()
  .then(function(doc4){
     Dance.find()
 .then(function(doc5){
    res.render('users/index', {socials: doc1, populars: doc2, pictures: doc3, covers: doc4, dances: doc5 , title: 'Well Visher'});
  });
  });
  });
  });
  });
});





router.get('/dance', function(req, res, next) {
   Dance.find()
  .then(function(doc){
  res.render('users/dance_create_happiness', {dances: doc, title: 'dance create happiness' });
});
});

router.get('/picture', function(req, res, next) {
  Picture.find()
  .then(function(doc){
  res.render('users/picture_gallery', { pictures: doc, title: 'picture uehiu' });
  });
});

router.get('/social', function(req, res, next) {
  Social.find()
  .then(function(doc){
  res.render('users/social_activities', { socials: doc, title: 'social' });
});
});

router.get('/media', function(req, res, next) {
  res.render('users/media', { title: 'media' });
});

router.get('/contact-form', function(req, res, next) {
  res.render('users/contact_form', { title: 'media' });
});

router.get('/blog', function(req, res, next) {
  res.render('users/blog', { title: 'blog' });
});


/* admin post methods ADD COVER */


 router.post('/contact', function(req, res, next){
 	console.log("hello");
 	console.log(req.file);


 	const contacts = {
 		contactname: req.body.contactname,
 		contactmobile: req.body.contactmobile,
 		contactemail: req.body.contactemail,
    contactlocation: req.body.contactlocation,
    contactpurpose: req.body.contactpurpose,
    contactmessage: req.body.contactmessage
 	};

 	req.checkBody('contactname', 'Enter your full name').notEmpty();
 	req.checkBody('contactmobile', 'Enter mobile no.').notEmpty();

 	var errors = req.validationErrors();
 	var messages = req.flash('error');

 	if (errors) {
    console.log("errors");
 		var messages = [];
 		errors.forEach(function(error) {
 			messages.push(error.msg);
 		});

 		res.render('users/contact_form', {  messages: messages , hasErrors: messages.length > 0});
 		return;
 	}

 	const contact1 = new Contact(contacts);
 	contact1.save(); 	
 	res.redirect('/');  

 });

 

module.exports = router;
