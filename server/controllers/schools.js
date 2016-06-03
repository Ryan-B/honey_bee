var School = mongoose.model('School');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Schools - Index")
			School.find({}, function(err, schools){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(schools);
					response.json(schools);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Schools - Create', request.body)
			var school = new School;
			school.user_name = request.body.user_name;
			school.title = request.body.title;
			school.message = request.body.message;
			school.save(function(err){
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
			console.log("Server / Ctrl / Schools - destroy")
			School.remove({_id:request.params.id}, function(err){
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