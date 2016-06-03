var mongoose = require('mongoose');

var Business_PostSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	title: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Business_Post = mongoose.model('Business_Post', Business_PostSchema);
Business_PostSchema.path('user_name').required(true, "User Name is required");
Business_PostSchema.path('title').required(true, "Headline is required");
Business_PostSchema.path('message').required(true, "Content is required");