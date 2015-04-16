var models = require('../models');

exports.view = function(req, res) {
	//search the database object for a model.
	models.User.find({}, function(err, dbData){
		data = {'name':dbData}
		res.render('photos', data);
	});
}

exports.deleteImage = function(req, res) {
	models.User.find({ _id: req.body.id }).remove().exec();
	res.redirect('/');
}