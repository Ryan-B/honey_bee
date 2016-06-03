var mongoose = require('mongoose');

var Places_PostSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	title: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Places_Post = mongoose.model('Places_Post', Places_PostSchema);
Places_PostSchema.path('user_name').required(true, "User Name is required");
Places_PostSchema.path('title').required(true, "Headline is required");
Places_PostSchema.path('message').required(true, "Content is required");