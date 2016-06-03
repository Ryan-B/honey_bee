var Place = mongoose.model('Place');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Places - Index")
			Place.find({}, function(err, places){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(places);
					response.json(places);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Places - Create', request.body)
			var place = new Place;
			place.user_name = request.body.user_name;
			place.comment = request.body.comment;
			place.save(function(err){
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
			console.log("Server / Ctrl / Places - destroy")
			Place.remove({_id:request.params.id}, function(err){
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