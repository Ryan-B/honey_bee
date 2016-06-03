var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	email: { type: String, trim: true },
	subject: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Contact = mongoose.model('Contact', ContactSchema);
ContactSchema.path('name').required(true, "Name is required");
ContactSchema.path('email').required(true, "Email is required");
ContactSchema.path('subject').required(true, "Subject is required");
ContactSchema.path('message').required(true, "Message is required");

