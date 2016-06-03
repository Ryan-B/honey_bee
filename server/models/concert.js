var mongoose = require('mongoose');

var ConcertSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Concert = mongoose.model('Concert', ConcertSchema);
ConcertSchema.path('user_name').required(true, "User Name is required");
ConcertSchema.path('comment').required(true, "Headline is required");

