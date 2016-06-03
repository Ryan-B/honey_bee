var Concert = mongoose.model('Concert');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Concerts - Index")
			Concert.find({}, function(err, concerts){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(concerts);
					response.json(concerts);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Concerts - Create', request.body)
			var concert = new Concert;
			concert.user_name = request.body.user_name;
			concert.comment = request.body.comment;
			concert.save(function(err){
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
			console.log("Server / Ctrl / Concerts - destroy")
			Concert.remove({_id:request.params.id}, function(err){
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