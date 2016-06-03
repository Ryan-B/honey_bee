var Eventt = mongoose.model('Eventt');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Eventts - Index")
			Eventt.find({}, function(err, eventts){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(eventts);
					response.json(eventts);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Eventts - Create', request.body)
			var eventt = new Eventt;
			eventt.user_name = request.body.user_name;
			eventt.title = request.body.title;
			eventt.message = request.body.message;
			eventt.save(function(err){
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
			console.log("Server / Ctrl / Eventts - destroy")
			Eventt.remove({_id:request.params.id}, function(err){
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