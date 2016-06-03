var What = mongoose.model('What');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Whats - Index")
			What.find({}, function(err, whats){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(whats);
					response.json(whats);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / What - Create', request.body)
			var what = new What;
			what.user_name = request.body.user_name;
			what.comment = request.body.comment;
			what.save(function(err){
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
			console.log("Server / Ctrl / Whats - destroy")
			What.remove({_id:request.params.id}, function(err){
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