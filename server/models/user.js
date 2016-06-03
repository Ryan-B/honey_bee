var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	first_name: { type: String, trim: true },
	last_name: { type: String, trim: true },
	email: { type: String, trim: true },
	created_at: { type: Date, trim: Date.now },
	updated_at: { type: Date, trim: Date.now },
});

mongoose.model('User', UserSchema);
UserSchema.path('first_name').required(true, "First Name is required");
UserSchema.path('last_name').required(true, "Last Name is required");
UserSchema.path('email').required(true, "email is required");