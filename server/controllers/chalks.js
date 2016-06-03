var Chalk = mongoose.model('Chalk');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Chalks - Index")
			Chalk.find({}, function(err, chalks){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(chalks);
					response.json(chalks);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Chalks - Create', request.body)
			var chalk = new Chalk;
			chalk.user_name = request.body.user_name;
			chalk.comment = request.body.comment;
			chalk.save(function(err){
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
			console.log("Server / Ctrl / Chalks - destroy")
			Chalk.remove({_id:request.params.id}, function(err){
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