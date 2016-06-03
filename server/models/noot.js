var mongoose = require('mongoose');

var NootSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Noot = mongoose.model('Noot', NootSchema);
NootSchema.path('user_name').required(true, "User Name is required");
NootSchema.path('comment').required(true, "Headline is required");

