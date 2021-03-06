var mongoose = require('mongoose');

var JazzSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Jazz = mongoose.model('Jazz', JazzSchema);
JazzSchema.path('user_name').required(true, "User Name is required");
JazzSchema.path('comment').required(true, "Headline is required");
