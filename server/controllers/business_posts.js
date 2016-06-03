var Business_Post = mongoose.model('Business_Post');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Business_Posts - Index")
			Business_Post.find({}, function(err, business_posts){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(business_posts);
					response.json(business_posts);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Business_Posts - Create', request.body)
			var business_post = new Business_Post;
			business_post.user_name = request.body.user_name;
			business_post.title = request.body.title;
			business_post.message = request.body.message;
			business_post.save(function(err){
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
			console.log("Server / Ctrl / Business_Posts - destroy")
			Business_Post.remove({_id:request.params.id}, function(err){
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