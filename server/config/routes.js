// var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var products = require('../controllers/products.js');
var contacts = require('../controllers/contacts.js');
var business_posts = require('../controllers/business_posts.js');
var places_posts = require('../controllers/places_posts.js');
var schools = require('../controllers/schools.js');
var eventts = require('../controllers/eventts.js');
var greeks = require('../controllers/greeks.js');
var karens = require('../controllers/karens.js');
var places = require('../controllers/places.js');
var jazzs = require('../controllers/jazzs.js');
var ballets = require('../controllers/ballets.js');
var whats = require('../controllers/whats.js');
var concerts = require('../controllers/concerts.js');
var noots = require('../controllers/noots.js');
var chalks = require('../controllers/chalks.js');
var schollys = require('../controllers/schollys.js');
var lights = require('../controllers/lights.js');
module.exports = function(app) {

	app

//User
	// Index
	.get('/users', function(request, response) {users.index(request, response) })
	// New
	.get('/users/new', function(request, response) {users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) {users.show(request, response) })
	// Edit
	.get('/users/:id/edit', function(request, response) {users.edit(request, response) })
	// Create
	.post('/users', function(request, response) {users.create(request, response) })
	// Destroy
	.delete('/users/:id', function(request, response) {users.destroy(request, response) })
	// Update
	.patch('/users/:id', function(request, response) {users.update(request, response) })
//Product
	// Index
	.get('/products', function(request, response) {products.index(request, response) })
	// New
	.get('/products/new', function(request, response) {products.create(request, response) })
	// Show
	.get('/products/:id', function(request, response) {products.show(request, response) })
	// Edit
	.get('/products/:id/edit', function(request, response) {products.edit(request, response) })
	// Create
	.post('/products', function(request, response) {console.log(request.body);products.create(request, response) })
	// Destroy
	.delete('/products/:id', function(request, response) {products.destroy(request, response) })
	// Update
	.patch('/products/:id', function(request, response) {products.update(request, response) })
//School
	// Index
	.get('/schools', function(request, response) {schools.index(request, response) })
	// New
	.get('/schools/new', function(request, response) {schools.create(request, response) })
	// Show
	.get('/schools/:id', function(request, response) {schools.show(request, response) })
	// Edit
	.get('/schools/:id/edit', function(request, response) {schools.edit(request, response) })
	// Create
	.post('/schools', function(request, response) {schools.create(request, response) })
	// Destroy
	.delete('/schools/:id', function(request, response) {schools.destroy(request, response) })
	// Update
	.patch('/schools/:id', function(request, response) {schools.update(request, response) })
//Eventt
	// Index
	.get('/eventts', function(request, response) {eventts.index(request, response) })
	// New
	.get('/eventts/new', function(request, response) {eventts.create(request, response) })
	// Show
	.get('/eventts/:id', function(request, response) {eventts.show(request, response) })
	// Edit
	.get('/eventts/:id/edit', function(request, response) {eventts.edit(request, response) })
	// Create
	.post('/eventts', function(request, response) {eventts.create(request, response) })
	// Destroy
	.delete('/eventts/:id', function(request, response) {eventts.destroy(request, response) })
	// Update
	.patch('/eventts/:id', function(request, response) {eventts.update(request, response) })
//Greeks
	// Index
	.get('/greeks', function(request, response) {greeks.index(request, response) })
	// New
	.get('/greeks/new', function(request, response) {greeks.create(request, response) })
	// Show
	.get('/greeks/:id', function(request, response) {greeks.show(request, response) })
	// Edit
	.get('/greeks/:id/edit', function(request, response) {greeks.edit(request, response) })
	// Create
	.post('/greeks', function(request, response) {greeks.create(request, response) })
	// Destroy
	.delete('/greeks/:id', function(request, response) {greeks.destroy(request, response) })
	// Update
	.patch('/greeks/:id', function(request, response) {greeks.update(request, response) })
//Karens
	// Index
	.get('/karens', function(request, response) {karens.index(request, response) })
	// New
	.get('/karens/new', function(request, response) {karens.create(request, response) })
	// Show
	.get('/karens/:id', function(request, response) {karens.show(request, response) })
	// Edit
	.get('/karens/:id/edit', function(request, response) {karens.edit(request, response) })
	// Create
	.post('/karens', function(request, response) {karens.create(request, response) })
	// Destroy
	.delete('/karens/:id', function(request, response) {karens.destroy(request, response) })
	// Update
	.patch('/karens/:id', function(request, response) {karens.update(request, response) })
//Places
	// Index
	.get('/places', function(request, response) {places.index(request, response) })
	// New
	.get('/places/new', function(request, response) {places.create(request, response) })
	// Show
	.get('/places/:id', function(request, response) {places.show(request, response) })
	// Edit
	.get('/places/:id/edit', function(request, response) {places.edit(request, response) })
	// Create
	.post('/places', function(request, response) {places.create(request, response) })
	// Destroy
	.delete('/places/:id', function(request, response) {places.destroy(request, response) })
	// Update
	.patch('/places/:id', function(request, response) {places.update(request, response) })
//Ballets
	// Index
	.get('/ballets', function(request, response) {ballets.index(request, response) })
	// New
	.get('/ballets/new', function(request, response) {ballets.create(request, response) })
	// Show
	.get('/ballets/:id', function(request, response) {ballets.show(request, response) })
	// Edit
	.get('/ballets/:id/edit', function(request, response) {ballets.edit(request, response) })
	// Create
	.post('/ballets', function(request, response) {ballets.create(request, response) })
	// Destroy
	.delete('/ballets/:id', function(request, response) {ballets.destroy(request, response) })
	// Update
	.patch('/ballets/:id', function(request, response) {ballets.update(request, response) })
//Whats
	// Index
	.get('/whats', function(request, response) {whats.index(request, response) })
	// New
	.get('/whats/new', function(request, response) {whats.create(request, response) })
	// Show
	.get('/whats/:id', function(request, response) {whats.show(request, response) })
	// Edit
	.get('/whats/:id/edit', function(request, response) {whats.edit(request, response) })
	// Create
	.post('/whats', function(request, response) {whats.create(request, response) })
	// Destroy
	.delete('/whats/:id', function(request, response) {whats.destroy(request, response) })
	// Update
	.patch('/whats/:id', function(request, response) {whats.update(request, response) })
//Concerts
	// Index
	.get('/concerts', function(request, response) {concerts.index(request, response) })
	// New
	.get('/concerts/new', function(request, response) {concerts.create(request, response) })
	// Show
	.get('/concerts/:id', function(request, response) {concerts.show(request, response) })
	// Edit
	.get('/concerts/:id/edit', function(request, response) {concerts.edit(request, response) })
	// Create
	.post('/concerts', function(request, response) {concerts.create(request, response) })
	// Destroy
	.delete('/concerts/:id', function(request, response) {concerts.destroy(request, response) })
	// Update
	.patch('/concerts/:id', function(request, response) {concerts.update(request, response) })
//Noots
	// Index
	.get('/noots', function(request, response) {noots.index(request, response) })
	// New
	.get('/noots/new', function(request, response) {noots.create(request, response) })
	// Show
	.get('/noots/:id', function(request, response) {noots.show(request, response) })
	// Edit
	.get('/noots/:id/edit', function(request, response) {noots.edit(request, response) })
	// Create
	.post('/noots', function(request, response) {noots.create(request, response) })
	// Destroy
	.delete('/noots/:id', function(request, response) {noots.destroy(request, response) })
	// Update
	.patch('/noots/:id', function(request, response) {noots.update(request, response) })
//Chalks
	// Index
	.get('/chalks', function(request, response) {chalks.index(request, response) })
	// New
	.get('/chalks/new', function(request, response) {chalks.create(request, response) })
	// Show
	.get('/chalks/:id', function(request, response) {chalks.show(request, response) })
	// Edit
	.get('/chalks/:id/edit', function(request, response) {chalks.edit(request, response) })
	// Create
	.post('/chalks', function(request, response) {chalks.create(request, response) })
	// Destroy
	.delete('/chalks/:id', function(request, response) {chalks.destroy(request, response) })
	// Update
	.patch('/chalks/:id', function(request, response) {chalks.update(request, response) })
//Schollys
	// Index
	.get('/schollys', function(request, response) {schollys.index(request, response) })
	// New
	.get('/schollys/new', function(request, response) {schollys.create(request, response) })
	// Show
	.get('/schollys/:id', function(request, response) {schollys.show(request, response) })
	// Edit
	.get('/schollys/:id/edit', function(request, response) {schollys.edit(request, response) })
	// Create
	.post('/schollys', function(request, response) {schollys.create(request, response) })
	// Destroy
	.delete('/schollys/:id', function(request, response) {schollys.destroy(request, response) })
	// Update
	.patch('/schollys/:id', function(request, response) {schollys.update(request, response) })
//Lights
	// Index
	.get('/lights', function(request, response) {lights.index(request, response) })
	// New
	.get('/lights/new', function(request, response) {lights.create(request, response) })
	// Show
	.get('/lights/:id', function(request, response) {lights.show(request, response) })
	// Edit
	.get('/lights/:id/edit', function(request, response) {lights.edit(request, response) })
	// Create
	.post('/lights', function(request, response) {lights.create(request, response) })
	// Destroy
	.delete('/lights/:id', function(request, response) {lights.destroy(request, response) })
	// Update
	.patch('/lights/:id', function(request, response) {lights.update(request, response) })
//Jazzs
	// Index
	.get('/jazzs', function(request, response) {jazzs.index(request, response) })
	// New
	.get('/jazzs/new', function(request, response) {jazzs.create(request, response) })
	// Show
	.get('/jazzs/:id', function(request, response) {jazzs.show(request, response) })
	// Edit
	.get('/jazzs/:id/edit', function(request, response) {jazzs.edit(request, response) })
	// Create
	.post('/jazzs', function(request, response) {jazzs.create(request, response) })
	// Destroy
	.delete('/jazzs/:id', function(request, response) {jazzs.destroy(request, response) })
	// Update
	.patch('/jazzs/:id', function(request, response) {jazzs.update(request, response) })
//Business_Post
	// Index
	.get('/business_posts', function(request, response) {business_posts.index(request, response) })
	// New
	.get('/business_posts/new', function(request, response) {business_posts.create(request, response) })
	// Show
	.get('/business_posts/:id', function(request, response) {business_posts.show(request, response) })
	// Edit
	.get('/business_posts/:id/edit', function(request, response) {business_posts.edit(request, response) })
	// Create
	.post('/business_posts', function(request, response) {business_posts.create(request, response) })
	// Destroy
	.delete('/business_posts/:id', function(request, response) {business_posts.destroy(request, response) })
	// Update
	.patch('/business_posts/:id', function(request, response) {business_posts.update(request, response) })
//Places_posts
	// Index
	.get('/places_posts', function(request, response) {places_posts.index(request, response) })
	// New
	.get('/places_posts/new', function(request, response) {places_posts.create(request, response) })
	// Show
	.get('/places_posts/:id', function(request, response) {places_posts.show(request, response) })
	// Edit
	.get('/places_posts/:id/edit', function(request, response) {places_posts.edit(request, response) })
	// Create
	.post('/places_posts', function(request, response) {places_posts.create(request, response) })
	// Destroy
	.delete('/places_posts/:id', function(request, response) {places_posts.destroy(request, response) })
	// Update
	.patch('/places_posts/:id', function(request, response) {places_posts.update(request, response) })
//Contact
	// Index
	.get('/contacts', function(request, response) {contacts.index(request, response) })
	// New
	.get('/contacts/new', function(request, response) {contacts.create(request, response) })
	// Show
	.get('/contacts/:id', function(request, response) {contacts.show(request, response) })
	// Edit
	.get('/contacts/:id/edit', function(request, response) {contacts.edit(request, response) })
	// Create
	.post('/contacts', function(request, response) {contacts.create(request, response) })
	// Destroy
	.delete('/contacts/:id', function(request, response) {contacts.destroy(request, response) })
	// Update
	.patch('/contacts/:id', function(request, response) {contacts.update(request, response) })
//Order
	// Index
	.get('/orders', function(request, response) {orders.index(request, response) })
	// New
	// .get('/orders/new', function(request, response) {orders.create(request, response) })
	// // Show
	// .get('/orders/:id', function(request, response) {orders.show(request, response) })
	// // Edit
	// .get('/orders/:id/edit', function(request, response) {orders.edit(request, response) })
	// Create
	.post('/orders', function(request, response) {orders.create(request, response) })
	// Destroy
	.delete('/orders/:id', function(request, response) {orders.destroy(request, response) })
	// Update
	.patch('/orders/:id', function(request, response) {orders.update(request, response) })
}
