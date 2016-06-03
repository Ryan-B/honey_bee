var mongoose = require('mongoose');

var GreekSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Greek = mongoose.model('Greek', GreekSchema);
GreekSchema.path('user_name').required(true, "User Name is required");
GreekSchema.path('comment').required(true, "Headline is required");

