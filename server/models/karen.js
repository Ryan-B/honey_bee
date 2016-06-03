var mongoose = require('mongoose');

var KarenSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Karen = mongoose.model('Karen', KarenSchema);
KarenSchema.path('user_name').required(true, "User Name is required");
KarenSchema.path('comment').required(true, "Headline is required");

