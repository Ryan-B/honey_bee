var Contact = mongoose.model('Contact');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Contacts - Index")
			Contact.find({}, function(err, contacts){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(contacts);
					response.json(contacts);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Contacts - Create', request.body)
			var contact = new Contact;
			contact.name = request.body.name;
			contact.email = request.body.email;
			contact.subject = request.body.subject;
			contact.message = request.body.message;
			contact.save(function(err){
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
			console.log("Server / Ctrl / Contacts - destroy")
			Contact.remove({_id:request.params.id}, function(err){
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