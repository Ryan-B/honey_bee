var Ballet = mongoose.model('Ballet');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Ballets - Index")
			Ballet.find({}, function(err, ballets){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(ballets);
					response.json(ballets);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Ballet - Create', request.body)
			var ballet = new Ballet;
			ballet.user_name = request.body.user_name;
			ballet.comment = request.body.comment;
			ballet.save(function(err){
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
			console.log("Server / Ctrl / Ballets - destroy")
			Ballet.remove({_id:request.params.id}, function(err){
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