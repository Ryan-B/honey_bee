var Light = mongoose.model('Light');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Lights - Index")
			Light.find({}, function(err, lights){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(lights);
					response.json(lights);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Lights - Create', request.body)
			var light = new Light;
			light.user_name = request.body.user_name;
			light.comment = request.body.comment;
			light.save(function(err){
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
			console.log("Server / Ctrl / Lights - destroy")
			Light.remove({_id:request.params.id}, function(err){
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