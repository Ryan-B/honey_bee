var mongoose = require('mongoose');

var LightSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Light = mongoose.model('Light', LightSchema);
LightSchema.path('user_name').required(true, "User Name is required");
LightSchema.path('comment').required(true, "Headline is required");

