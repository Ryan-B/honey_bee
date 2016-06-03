var Noot = mongoose.model('Noot');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Noots - Index")
			Noot.find({}, function(err, noots){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(noots);
					response.json(noots);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Noots - Create', request.body)
			var noot = new Noot;
			noot.user_name = request.body.user_name;
			noot.comment = request.body.comment;
			noot.save(function(err){
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
			console.log("Server / Ctrl / Noots - destroy")
			Noot.remove({_id:request.params.id}, function(err){
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