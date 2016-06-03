var mongoose = require('mongoose');

var WhatSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var What = mongoose.model('What', WhatSchema);
WhatSchema.path('user_name').required(true, "User Name is required");
WhatSchema.path('comment').required(true, "A Statement is required");

