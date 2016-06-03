var mongoose = require('mongoose');

var BalletSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Ballet = mongoose.model('Ballet', BalletSchema);
BalletSchema.path('user_name').required(true, "User Name is required");
BalletSchema.path('comment').required(true, "Headline is required");

