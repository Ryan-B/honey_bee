var mongoose = require('mongoose');

var SchollySchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Scholly = mongoose.model('Scholly', SchollySchema);
SchollySchema.path('user_name').required(true, "User Name is required");
SchollySchema.path('comment').required(true, "Headline is required");

