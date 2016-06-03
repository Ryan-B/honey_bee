app.factory('ProductsFactory', function($http){
	return {
		getProducts: function(callback){
			console.log("ProductsFactory getProducts");
			$http.get('/products').success(function(response){
				callback(response);
			})
		},
		addProduct: function(newProduct, callback){
			console.log("ProductsFactory addProduct");
			$http.post('/products', newProduct).success(function(response){
				callback();
			})
		},
		removeProduct: function(product, callback){
			console.log("ProductsFactory RemoveProduct", product);
			$http.delete('/products/'+product._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('UsersFactory', function($http){
	return {
		getUsers: function(callback){
			console.log("UsersFactory getUsers");
			$http.get('/users').success(function(response){
				callback(response);
			})
		},
		addUser: function(newUser, callback){
			console.log("UsersFactory addUser");
			$http.post('/users', newUser).success(function(response){
				callback();
			})
		},
		removeUser: function(user, callback){
			console.log("UsersFactory RemoveUser", user);
			$http.delete('/users/'+user._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('ContactsFactory', function($http){
	return {
		getContacts: function(callback){
			console.log("ContactsFactory getContacts");
			$http.get('/contacts').success(function(response){
				callback(response);
			})
		},
		addContact: function(newContact, callback){
			console.log("ContactsFactory addContact");
			$http.post('/contacts', newContact).success(function(response){
				callback();
			})
		},
		removeContact: function(contact, callback){
			console.log("ContactsFactory RemoveContact", contact);
			$http.delete('/contacts/'+contact._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('Business_PostsFactory', function($http){
	return {
		getBusiness_Posts: function(callback){
			console.log("Business_PostsFactory getBusiness_Posts");
			$http.get('/business_posts').success(function(response){
				callback(response);
			})
		},
		addBusiness_Post: function(newBusiness_Post, callback){
			console.log("Business_PostsFactory addBusiness_Post");
			$http.post('/business_posts', newBusiness_Post).success(function(response){
				callback();
			})
		},
		removeBusiness_Post: function(business_post, callback){
			console.log("Business_PostsFactory RemoveBusiness_Post", business_post);
			$http.delete('/business_posts/'+business_post._id).success(function(response){
				callback();
			})
		}
	}
})
app.factory('Places_PostsFactory', function($http){
	return {
		getPlaces_Posts: function(callback){
			console.log("Places_PostsFactory getPlaces_Posts");
			$http.get('/places_posts').success(function(response){
				callback(response);
			})
		},
		addPlaces_Post: function(newPlaces_Post, callback){
			console.log("Places_PostsFactory addPlaces_Post");
			$http.post('/places_posts', newPlaces_Post).success(function(response){
				callback();
			})
		},
		removePlaces_Post: function(place_post, callback){
			console.log("Places_PostsFactory RemovePlaces_Post", place_post);
			$http.delete('/places_posts/'+place_post._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('SchoolsFactory', function($http){
	return {
		getSchools: function(callback){
			console.log("SchoolsFactory getSchools");
			$http.get('/schools').success(function(response){
				callback(response);
			})
		},
		addSchool: function(newSchool, callback){
			console.log("SchoolsFactory addSchool");
			$http.post('/schools', newSchool).success(function(response){
				callback();
			})
		},
		removeSchool: function(school, callback){
			console.log("SchoolsFactory RemoveSchool", school);
			$http.delete('/schools/'+school._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('EventtsFactory', function($http){
	return {
		getEventts: function(callback){
			console.log("EventtsFactory getEventts");
			$http.get('/eventts').success(function(response){
				callback(response);
			})
		},
		addEventt: function(newEventt, callback){
			console.log("EventtsFactory addEventt");
			$http.post('/eventts', newEventt).success(function(response){
				callback();
			})
		},
		removeEventt: function(eventt, callback){
			console.log("EventtsFactory RemoveEventt", eventt);
			$http.delete('/eventts/'+eventt._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('GreeksFactory', function($http){
	return {
		getGreeks: function(callback){
			console.log("GreeksFactory getGreeks");
			$http.get('/greeks').success(function(response){
				callback(response);
			})
		},
		addGreek: function(newGreek, callback){
			console.log("GreeksFactory addGreek");
			$http.post('/greeks', newGreek).success(function(response){
				callback();
			})
		},
		removeGreek: function(greek, callback){
			console.log("GreeksFactory RemoveGreek", greek);
			$http.delete('/greeks/'+greek._id).success(function(response){
				callback();
			})
		}
	}
})
app.factory('KarensFactory', function($http){
	return {
		getKarens: function(callback){
			console.log("KarensFactory getKarens");
			$http.get('/karens').success(function(response){
				callback(response);
			})
		},
		addKaren: function(newKaren, callback){
			console.log("KarensFactory addKaren");
			$http.post('/karens', newKaren).success(function(response){
				callback();
			})
		},
		removeKaren: function(karen, callback){
			console.log("KarensFactory RemoveKaren", karen);
			$http.delete('/karens/'+karen._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('PlacesFactory', function($http){
	return {
		getPlaces: function(callback){
			console.log("PlacesFactory getPlaces");
			$http.get('/places').success(function(response){
				callback(response);
			})
		},
		addPlace: function(newPlace, callback){
			console.log("PlacesFactory addPlace");
			$http.post('/places', newPlace).success(function(response){
				callback();
			})
		},
		removePlace: function(place, callback){
			console.log("PlacesFactory RemovePlace", place);
			$http.delete('/places/'+place._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('BalletsFactory', function($http){
	return {
		getBallets: function(callback){
			console.log("BalletsFactory getBallets");
			$http.get('/ballets').success(function(response){
				callback(response);
			})
		},
		addBallet: function(newBallet, callback){
			console.log("BalletsFactory addBallet");
			$http.post('/ballets', newBallet).success(function(response){
				callback();
			})
		},
		removeBallet: function(ballet, callback){
			console.log("BalletsFactory RemoveBallet", ballet);
			$http.delete('/ballets/'+ballet._id).success(function(response){
				callback();
			})
		}
	}
})
app.factory('JazzsFactory', function($http){
	return {
		getJazzs: function(callback){
			console.log("JazzsFactory getJazzs");
			$http.get('/jazzs').success(function(response){
				callback(response);
			})
		},
		addJazz: function(newJazz, callback){
			console.log("JazzsFactory addJazz");
			$http.post('/jazzs', newJazz).success(function(response){
				callback();
			})
		},
		removeJazz: function(jazz, callback){
			console.log("JazzsFactory RemoveJazz", jazz);
			$http.delete('/jazzs/'+jazz._id).success(function(response){
				callback();
			})
		}
	}
})
app.factory('WhatsFactory', function($http){
	return {
		getWhats: function(callback){
			console.log("WhatsFactory getWhats");
			$http.get('/whats').success(function(response){
				callback(response);
			})
		},
		addWhat: function(newWhat, callback){
			console.log("WhatsFactory addWhat");
			$http.post('/whats', newWhat).success(function(response){
				callback();
			})
		},
		removeWhat: function(what, callback){
			console.log("WhatsFactory RemoveWhat", what);
			$http.delete('/whats/'+what._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('ConcertsFactory', function($http){
	return {
		getConcerts: function(callback){
			console.log("ConcertsFactory getConcerts");
			$http.get('/concerts').success(function(response){
				callback(response);
			})
		},
		addConcert: function(newConcert, callback){
			console.log("ConcertsFactory addConcert");
			$http.post('/concerts', newConcert).success(function(response){
				callback();
			})
		},
		removeConcert: function(concert, callback){
			console.log("ConcertsFactory RemoveConcert", concert);
			$http.delete('/concerts/'+concert._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('NootsFactory', function($http){
	return {
		getNoots: function(callback){
			console.log("NootsFactory getConcerts");
			$http.get('/noots').success(function(response){
				callback(response);
			})
		},
		addNoot: function(newNoot, callback){
			console.log("NootsFactory addNoot");
			$http.post('/noots', newNoot).success(function(response){
				callback();
			})
		},
		removeNoot: function(noot, callback){
			console.log("NootsFactory RemoveNoot", noot);
			$http.delete('/noots/'+noot._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('ChalksFactory', function($http){
	return {
		getChalks: function(callback){
			console.log("ChalksFactory getConcerts");
			$http.get('/chalks').success(function(response){
				callback(response);
			})
		},
		addChalk: function(newChalk, callback){
			console.log("ChalksFactory addChalk");
			$http.post('/chalks', newChalk).success(function(response){
				callback();
			})
		},
		removeChalk: function(chalk, callback){
			console.log("ChalksFactory RemoveChalk", chalk);
			$http.delete('/chalks/'+chalk._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('ChalksFactory', function($http){
	return {
		getChalks: function(callback){
			console.log("ChalksFactory getChalks");
			$http.get('/chalks').success(function(response){
				callback(response);
			})
		},
		addChalk: function(newChalk, callback){
			console.log("ChalksFactory addChalk");
			$http.post('/chalks', newChalk).success(function(response){
				callback();
			})
		},
		removeChalk: function(chalk, callback){
			console.log("ChalksFactory RemoveChalk", chalk);
			$http.delete('/chalks/'+chalk._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('SchollysFactory', function($http){
	return {
		getSchollys: function(callback){
			console.log("SchollysFactory getSchollys");
			$http.get('/schollys').success(function(response){
				callback(response);
			})
		},
		addScholly: function(newScholly, callback){
			console.log("SchollysFactory addScholly");
			$http.post('/schollys', newScholly).success(function(response){
				callback();
			})
		},
		removeScholly: function(scholly, callback){
			console.log("SchollysFactory RemoveScholly", scholly);
			$http.delete('/schollys/'+scholly._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('LightsFactory', function($http){
	return {
		getLights: function(callback){
			console.log("LightsFactory getLights");
			$http.get('/lights').success(function(response){
				callback(response);
			})
		},
		addLight: function(newLight, callback){
			console.log("LightsFactory addLight");
			$http.post('/lights', newLight).success(function(response){
				callback();
			})
		},
		removeLight: function(light, callback){
			console.log("LightsFactory RemoveLight", light);
			$http.delete('/lights/'+light._id).success(function(response){
				callback();
			})
		}
	}
})


