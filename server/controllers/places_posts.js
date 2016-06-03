var Places_Post = mongoose.model('Places_Post');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Places_Posts - Index")
			Places_Post.find({}, function(err, places_posts){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(places_posts);
					response.json(places_posts);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Places_Posts - Create', request.body)
			var places_post = new Places_Post;
			places_post.user_name = request.body.user_name;
			places_post.title = request.body.title;
			places_post.message = request.body.message;
			places_post.save(function(err){
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
			console.log("Server / Ctrl / Places_Posts - destroy")
			Places_Post.remove({_id:request.params.id}, function(err){
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