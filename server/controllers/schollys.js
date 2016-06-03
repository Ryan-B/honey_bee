var Scholly = mongoose.model('Scholly');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Schollys - Index")
			Scholly.find({}, function(err, schollys){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(schollys);
					response.json(schollys);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Schoolys - Create', request.body)
			var scholly = new Scholly;
			scholly.user_name = request.body.user_name;
			scholly.comment = request.body.comment;
			scholly.save(function(err){
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
			console.log("Server / Ctrl / Schollys - destroy")
			Scholly.remove({_id:request.params.id}, function(err){
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