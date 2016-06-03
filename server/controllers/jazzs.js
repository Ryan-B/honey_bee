var Jazz = mongoose.model('Jazz');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Jazzs - Index")
			Jazz.find({}, function(err, jazzs){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(jazzs);
					response.json(jazzs);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Jazzs - Create', request.body)
			var jazz = new Jazz;
			jazz.user_name = request.body.user_name;
			jazz.comment = request.body.comment;
			jazz.save(function(err){
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
			console.log("Server / Ctrl / Jazzs - destroy")
			Jazz.remove({_id:request.params.id}, function(err){
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