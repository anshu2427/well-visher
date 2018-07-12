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


/* Admin Panel */

router.get('/admin', function(req, res, next) {
  res.render('admin/admin_home', { title: 'Express' });
});

router.get('/edit-cover', function(req, res, next) {
	Cover.find()
  .then(function(doc){
  res.render('admin/edit_cover', {covers: doc, title: 'Express' });
});
});


router.get('/edit-dance', function(req, res, next) {
   Dance.find()
  .then(function(doc){
  res.render('admin/edit_dance', {dances: doc, title: 'edit dance video' });
});
});

router.get('/edit-picture', function(req, res, next) {
	Picture.find()
  .then(function(doc){
  res.render('admin/edit_picture', {pictures: doc, title: 'Express' });
});
});

router.get('/edit-popular-video', function(req, res, next) {
	Popular.find()
  .then(function(doc){
  res.render('admin/edit_popular_video', {populars: doc, title: 'Express' });
});
});

router.get('/edit-social', function(req, res, next) {
	Social.find()
  .then(function(doc){
  res.render('admin/edit_social', {socials: doc, title: 'Express' });
});
});

router.get('/edit-contacts', function(req, res, next) {
	Contact.find()
  .then(function(doc){
  res.render('admin/edit_contactlist', {contacts: doc, title: 'Express' });
});
});

router.get('/add-dance', function(req, res, next) {
  res.render('admin/add_dance', { title: 'Express' });
});

router.get('/add-picture', function(req, res, next) {
  res.render('admin/add_picture', { title: 'Express' });
});

router.get('/add-social', function(req, res, next) {
  res.render('admin/add_social', { title: 'Express' });
});

router.get('/add-popular-video', function(req, res, next) {
  res.render('admin/add_popular_video', { title: 'Express' });
});

router.get('/add-cover', function(req, res, next) {
	res.render('admin/add_cover', { title: 'Add Cover' });
  });



// POST METHODS

 router.post('/add-cover', upload.single('coverphotoupload') , function(req, res, next){
 	console.log("hello");
 	console.log(req.file);


 	const covers = {
 		coverphototitle: req.body.coverphototitle,
 		coverphotourl: req.body.coverphotourl,
 		coverphotoupload: req.file.path
 	};

 	req.checkBody('coverphototitle', 'Enter photo title').notEmpty();
 	req.checkBody('coverphotourl', 'Enter photo title').notEmpty();

 	var errors = req.validationErrors();
 	var messages = req.flash('error');

 	if (errors) {
    console.log("errors");
 		var messages = [];
 		errors.forEach(function(error) {
 			messages.push(error.msg);
 		});

 		res.render('admin/add_cover', {  messages: messages , hasErrors: messages.length > 0});
 		return;
 	}

 	const cover1 = new Cover(covers);
 	cover1.save(); 	
 	res.redirect('/admin/add-cover');  

 });

  router.post('/add-popular-video', upload.single('pvideoupload') , function(req, res, next){
 	console.log("hello");
 	console.log(req.file);


 	const populars = {
 		pvideotitle: req.body.pvideotitle,
 		pvideourl: req.body.pvideourl,
 	    pvideodescription: req.body.pvideodescription,
 		pvideocreatedby: req.body.pvideocreatedby,
 		pvideoupload: req.file.path
 	};

 	req.checkBody('pvideotitle', 'Enter video title').notEmpty();
 	req.checkBody('pvideourl', 'Enter video url').notEmpty();

 	var errors = req.validationErrors();
 	var messages = req.flash('error');

 	if (errors) {
    console.log("errors");
 		var messages = [];
 		errors.forEach(function(error) {
 			messages.push(error.msg);
 		});

 		res.render('admin/add_popular_video', {  messages: messages , hasErrors: messages.length > 0});
 		return;
 	}

 	const popular1 = new Popular(populars);
 	popular1.save(); 	
 	res.redirect('/admin/add-popular-video');  

 });

router.post('/add-dance', upload.single('dvideoupload') , function(req, res, next){
 	console.log("hello");
 	console.log(req.file);


 	const dances = {
 		dvideotitle: req.body.dvideotitle,
 		dvideourl: req.body.dvideourl,
 	    dvideodescription: req.body.dvideodescription,
 		dvideocreatedby: req.body.dvideocreatedby,
 		dvideoupload: req.file.path
 	};

 	req.checkBody('dvideotitle', 'Enter video title').notEmpty();
 	req.checkBody('dvideourl', 'Enter video url').notEmpty();

 	var errors = req.validationErrors();
 	var messages = req.flash('error');

 	if (errors) {
    console.log("errors");
 		var messages = [];
 		errors.forEach(function(error) {
 			messages.push(error.msg);
 		});

 		res.render('admin/add_dance', {  messages: messages , hasErrors: messages.length > 0});
 		return;
 	}

 	const dance1 = new Dance(dances);
 	dance1.save(); 	
 	res.redirect('/admin/add-dance');  

 });

router.post('/add-picture', upload.single('pictureupload') , function(req, res, next){
 	console.log("hello");
 	console.log(req.file);


 	const pictures = {
 		picturetitle: req.body.picturetitle,
 	    picturedesc: req.body.picturedesc,
 		pictureupload: req.file.path
 	};

 	req.checkBody('picturetitle', 'Enter video title').notEmpty();
 	req.checkBody('picturedesc', 'Enter picture description').notEmpty();

 	var errors = req.validationErrors();
 	var messages = req.flash('error');

 	if (errors) {
    console.log("errors");
 		var messages = [];
 		errors.forEach(function(error) {
 			messages.push(error.msg);
 		});

 		res.render('admin/add_picture', {  messages: messages , hasErrors: messages.length > 0});
 		return;
 	}

 	const picture1 = new Picture(pictures);
 	picture1.save(); 	
 	res.redirect('/admin/add-picture');  

 });

router.post('/add-social', upload.single('socialupload') , function(req, res, next){
 	console.log("hello");
 	console.log(req.file);


 	const socials = {
 		socialtitle: req.body.socialtitle,
 	    socialdesc: req.body.socialdesc,
 		socialupload: req.file.path
 	};

 	req.checkBody('socialtitle', 'Enter social title').notEmpty();
 	req.checkBody('socialdesc', 'Enter social description').notEmpty();

 	var errors = req.validationErrors();
 	var messages = req.flash('error');

 	if (errors) {
    console.log("errors");
 		var messages = [];
 		errors.forEach(function(error) {
 			messages.push(error.msg);
 		});

 		res.render('admin/add_social', {  messages: messages , hasErrors: messages.length > 0});
 		return;
 	}

 	const social1 = new Social(socials);
 	social1.save(); 	
 	res.redirect('/admin/add-social');  

 });

// Edit Or Delete Methods 

router.delete('/edit-dance/:id', function(req, res){
var query = {_id:req.params.id}

	Dance.remove(query, function(err){
		if(err){
			console.log(err);
		}
		res.send('Success');
	});

});

router.delete('/edit-social/:id', function(req, res){
var query = {_id:req.params.id}

	Social.remove(query, function(err){
		if(err){
			console.log(err);
		}
		res.send('Success');
	});

});

router.delete('/edit-popular-video/:id', function(req, res){
var query = {_id:req.params.id}

	Popular.remove(query, function(err){
		if(err){
			console.log(err);
		}
		res.send('Success');
	});

});

router.delete('/edit-picture/:id', function(req, res){
var query = {_id:req.params.id}

	Picture.remove(query, function(err){
		if(err){
			console.log(err);
		}
		res.send('Success');
	});

});

router.delete('/edit-cover/:id', function(req, res){
var query = {_id:req.params.id}

	Cover.remove(query, function(err){
		if(err){
			console.log(err);
		}
		res.send('Success');
	});

});

 module.exports = router;
