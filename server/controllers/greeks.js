var Greek = mongoose.model('Greek');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Greeks - Index")
			Greek.find({}, function(err, greeks){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(greeks);
					response.json(greeks);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Greeks - Create', request.body)
			var greek = new Greek;
			greek.user_name = request.body.user_name;
			greek.comment = request.body.comment;
			greek.save(function(err){
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
			console.log("Server / Ctrl / Greeks - destroy")
			Greek.remove({_id:request.params.id}, function(err){
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