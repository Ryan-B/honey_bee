var Karen = mongoose.model('Karen');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Karens - Index")
			Karen.find({}, function(err, karens){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(karens);
					response.json(karens);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Karens - Create', request.body)
			var karen = new Karen;
			karen.user_name = request.body.user_name;
			karen.comment = request.body.comment;
			karen.save(function(err){
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
			console.log("Server / Ctrl / Karens - destroy")
			Karen.remove({_id:request.params.id}, function(err){
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