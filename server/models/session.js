var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
	first_name: { type: String, trim: true },
	created_at: { type: Date, trim: Date.now },
	updated_at: { type: Date, trim: Date.now },
});

mongoose.model('Session', SessionSchema);
SessionSchema.path('first_name').required(true, "First Name is required");