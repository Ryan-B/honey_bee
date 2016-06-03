var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Place = mongoose.model('Place', PlaceSchema);
PlaceSchema.path('user_name').required(true, "User Name is required");
PlaceSchema.path('comment').required(true, "Headline is required");

