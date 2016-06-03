var mongoose = require('mongoose');

var ChalkSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Chalk = mongoose.model('Chalk', ChalkSchema);
ChalkSchema.path('user_name').required(true, "User Name is required");
ChalkSchema.path('comment').required(true, "Headline is required");

