/*

GET     /home              ->  index
GET     /home/new          ->  new
POST    /home              ->  create
GET     /home/:home       ->  show
GET     /home/:home/edit  ->  edit
PUT     /home/:home       ->  update
DELETE  /home/:home       ->  destroy

*/

exports.index = function(req, res){
	res.render('home/default_content', {
		titre: 'Home page'
	});
};

exports.new = function(req, res){
	res.render('home/new_page', {
		titre: 'New page'
	});
};

exports.create = function(req, res){
	console.log('creation home');
	res.render('home/welcome_page', {
		titre: 'Welcome' + req.body.prenom,
		prenom: req.body.prenom,
		nom: req.body.nom
	});
};

exports.show = function(req, res){
	res.send('show home ' + req.params.home);
};

exports.edit = function(req, res){
	res.send('edit home ' + req.params.home);
};

exports.update = function(req, res){
	res.send('update home ' + req.params.home);
};

exports.destroy = function(req, res){
	res.send('destroy home ' + req.params.home);
};