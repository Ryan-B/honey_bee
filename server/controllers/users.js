var User = mongoose.model('User');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Users - Index")
			User.find({}, function(err, users){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(users);
					response.json(users);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Users - Create', request.body)
			var user = new User;
			user.first_name = request.body.first_name;
			user.last_name = request.body.last_name;
			user.email = request.body.email;
			user.save(function(err){
				if(err){
					console.log(err);
					response.json({status:"false"});
				}
				else{
					response.json({status:"true"});
				}
			})
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Users - destroy")
			User.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}

	}
})();