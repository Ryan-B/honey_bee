var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	title: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', ProductSchema);
ProductSchema.path('user_name').required(true, "User Name is required");
ProductSchema.path('title').required(true, "Headline is required");
ProductSchema.path('message').required(true, "Content is required");

