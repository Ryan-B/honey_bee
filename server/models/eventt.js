var mongoose = require('mongoose');

var EventtSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	title: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Eventt = mongoose.model('Eventt', EventtSchema);
EventtSchema.path('user_name').required(true, "User Name is required");
EventtSchema.path('title').required(true, "Headline is required");
EventtSchema.path('message').required(true, "Content is required");

