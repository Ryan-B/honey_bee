var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	title: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var School = mongoose.model('School', SchoolSchema);
SchoolSchema.path('user_name').required(true, "User Name is required");
SchoolSchema.path('title').required(true, "Headline is required");
SchoolSchema.path('message').required(true, "Content is required");

