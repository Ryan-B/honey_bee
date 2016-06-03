app.controller('MainController', function(){
	console.log("MainController");
})

app.controller('MapsController', function(){
	console.log("MapsController loaded");

})


app.controller('HomeController', function($interval, $scope) {

	console.log("HomeController Loaded")

		var dimages= [];
		var numImages=4;

		for (i=0; i<numImages; i++) {
		  // dimages[i]=new Image();
		  dimages.push("img/slideshow/"+(i+1)+".jpg");
		}

		var k = 0;
		this.image = dimages[k];

		var intervalId = $interval(function () {
			console.log('Switching image!');
			k++;
			if (k > numImages) {
				k = 0;
			}
			this.image = dimages[k];
		}.bind(this), 4000);

	$scope.$on('$destroy', function() {
		$interval.cancel(intervalId);
	});
	
})

app.controller('ProductsController', function(ProductsFactory){
	console.log("ProductsController Loaded");
	var _this = this;
	
	var getProducts = function(){
		console.log("ProductsController getProducts");
		
		ProductsFactory.getProducts(function(products){
			console.log(this);
			console.log(products);
			_this.products = products;
		});
	}
	this.addProduct = function(newProduct){
		console.log("Clicked", newProduct);
		if(newProduct){
			ProductsFactory.addProduct(newProduct, function(){
				getProducts();
				_this.newProduct = {};
			})
		}
	}
	getProducts();

	this.removeProduct = function(product){
		console.log("removeProduct", product);
		ProductsFactory.removeProduct(product, function(){
			getProducts();
		})
	}
	this.updateProduct = function(product){
		console.log("updateProduct", product);
		ProductsFactory.updateProduct(product, function(){
			getProducts();
		})
	}
})

app.controller('UsersController', function(UsersFactory){
	console.log("UsersController Loaded");
	var _this = this;
	
	var getUsers = function(){
		console.log("UsersController getUsers");
		
		UsersFactory.getUsers(function(users){
			console.log(this);
			console.log(users);
			_this.users = users;
		});
	}
	this.addUser = function(newUser){
		console.log("Clicked", newUser);
		if(newUser){
			UsersFactory.addUser(newUser, function(){
				getUsers();
				_this.newUser = {};
			})
		}
	}
	getUsers();

	this.removeUser = function(user){
		console.log("removeUser", user);
		UsersFactory.removeUser(user, function(){
			getUsers();
		})
	}
	this.updateUser = function(user){
		console.log("updateUser", user);
		UsersFactory.updateUser(user, function(){
			getUsers();
		})
	}
})

app.controller('ContactsController', function(ContactsFactory){
	console.log("ContactsController Loaded");
	var _this = this;
	
	var getContacts = function(){
		console.log("ContactsController getContacts");
		
		ContactsFactory.getContacts(function(contacts){
			console.log(this);
			console.log(contacts);
			_this.contacts = contacts;
		});
	}
	this.addContact = function(newContact){
		console.log("Clicked", newContact);
		if(newContact){
			ContactsFactory.addContact(newContact, function(){
				getContacts();
				_this.newContact = {};
			})
		}
	}
	getContacts();

	this.removeContact = function(contact){
		console.log("removeContact", contact);
		ContactsFactory.removeContact(contact, function(){
			getContacts();
		})
	}
	this.updateContact = function(contact){
		console.log("updateContact", contact);
		ContactsFactory.updateContact(contact, function(){
			getContacts();
		})
	}
})

app.controller('Business_PostsController', function(Business_PostsFactory){
	console.log("Business_PostsController Loaded");
	var _this = this;
	
	var getBusiness_Posts = function(){
		console.log("Business_PostsController getBusiness_Posts");
		
		Business_PostsFactory.getBusiness_Posts(function(business_posts){
			console.log(this);
			console.log(business_posts);
			_this.business_posts = business_posts;
		});
	}
	this.addBusiness_Post = function(newBusiness_Post){
		console.log("Clicked", newBusiness_Post);
		if(newBusiness_Post){
			Business_PostsFactory.addBusiness_Post(newBusiness_Post, function(){
				getBusiness_Posts();
				_this.newBusiness_Post = {};
			})
		}
	}
	getBusiness_Posts();

	this.removeBusiness_Post = function(business_post){
		console.log("removeBusiness_Post", business_post);
		Business_PostsFactory.removeBusiness_Post(business_post, function(){
			getBusiness_Posts();
		})
	}
	this.updateBusiness_Post = function(business_post){
		console.log("updateBusiness_Post", business_post);
		Business_PostsFactory.updateBusiness_Post(business_post, function(){
			getBusiness_Posts();
		})
	}
})

app.controller('Places_PostsController', function(Places_PostsFactory){
	console.log("Places_PostsController Loaded");
	var _this = this;
	
	var getPlaces_Posts = function(){
		console.log("Places_PostsController getPlaces_Posts");
		
		Places_PostsFactory.getPlaces_Posts(function(places_posts){
			console.log(this);
			console.log(places_posts);
			_this.places_posts = places_posts;
		});
	}
	this.addPlaces_Post = function(newPlaces_Post){
		console.log("Clicked", newPlaces_Post);
		if(newPlaces_Post){
			Places_PostsFactory.addPlaces_Post(newPlaces_Post, function(){
				getPlaces_Posts();
				_this.newPlaces_Post = {};
			})
		}
	}
	getPlaces_Posts();

	this.removePlaces_Post = function(places_post){
		console.log("removePlaces_Post", places_post);
		Places_PostsFactory.removePlaces_Post(places_post, function(){
			getPlaces_Posts();
		})
	}
	this.updatePlaces_Post = function(places_post){
		console.log("updatePlaces_Post", places_post);
		Places_PostsFactory.updatePlaces_Post(places_post, function(){
			getPlaces_Posts();
		})
	}
})

app.controller('SchoolsController', function(SchoolsFactory){
	console.log("SchoolsController Loaded");
	var _this = this;
	
	var getSchools = function(){
		console.log("SchoolsController getSchools");
		
		SchoolsFactory.getSchools(function(schools){
			console.log(this);
			console.log(schools);
			_this.schools = schools;
		});
	}
	this.addSchool = function(newSchool){
		console.log("Clicked", newSchool);
		if(newSchool){
			SchoolsFactory.addSchool(newSchool, function(){
				getSchools();
				_this.newSchool = {};
			})
		}
	}
	getSchools();

	this.removeSchool = function(school){
		console.log("removeSchool", school);
		SchoolsFactory.removeSchool(school, function(){
			getSchools();
		})
	}
	this.updateSchool = function(school){
		console.log("updateSchool", school);
		SchoolsFactory.updateSchool(school, function(){
			getSchools();
		})
	}
})

app.controller('EventtsController', function(EventtsFactory){
	console.log("EventtsController Loaded");
	var _this = this;
	
	var getEventts = function(){
		console.log("EventtsController getEventts");
		
		EventtsFactory.getEventts(function(eventts){
			console.log(this);
			console.log(eventts);
			_this.eventts = eventts;
		});
	}
	this.addEventt = function(newEventt){
		console.log("Clicked", newEventt);
		if(newEventt){
			EventtsFactory.addEventt(newEventt, function(){
				getEventts();
				_this.newEventt = {};
			})
		}
	}
	getEventts();

	this.removeEventt = function(eventt){
		console.log("removeEventt", eventt);
		EventtsFactory.removeEventt(eventt, function(){
			getEventts();
		})
	}
	this.updateEventt = function(eventt){
		console.log("updateEventt", eventt);
		EventtsFactory.updateEventt(eventt, function(){
			getEventts();
		})
	}
})
app.controller('GreeksController', function(GreeksFactory){
	console.log("GreeksController Loaded");
	var _this = this;
	
	var getGreeks = function(){
		console.log("GreeksController getGreeks");
		
		GreeksFactory.getGreeks(function(greeks){
			console.log(this);
			console.log(greeks);
			_this.greeks = greeks;
		});
	}
	this.addGreek = function(newGreek){
		console.log("Clicked", newGreek);
		if(newGreek){
			GreeksFactory.addGreek(newGreek, function(){
				getGreeks();
				_this.newGreek = {};
			})
		}
	}
	getGreeks();

	this.removeGreek = function(greek){
		console.log("removeGreek", greek);
		GreeksFactory.removeGreek(greek, function(){
			getGreeks();
		})
	}
	this.updateGreek = function(greek){
		console.log("updateGreek", greek);
		GreeksFactory.updateGreek(greek, function(){
			getGreeks();
		})
	}
})

app.controller('KarensController', function(KarensFactory){
	console.log("KarensController Loaded");
	var _this = this;
	
	var getKarens = function(){
		console.log("KarensController getKarens");
		
		KarensFactory.getKarens(function(karens){
			console.log(this);
			console.log(karens);
			_this.karens = karens;
		});
	}
	this.addKaren = function(newKaren){
		console.log("Clicked", newKaren);
		if(newKaren){
			KarensFactory.addKaren(newKaren, function(){
				getKarens();
				_this.newKaren = {};
			})
		}
	}
	getKarens();

	this.removeKaren = function(karen){
		console.log("removeKaren", karen);
		KarensFactory.removeKaren(karen, function(){
			getKarens();
		})
	}
	this.updateKaren = function(karen){
		console.log("updateKaren", karen);
		KarensFactory.updateKaren(karen, function(){
			getKarens();
		})
	}
})

app.controller('PlacesController', function(PlacesFactory){
	console.log("PlacesController Loaded");
	var _this = this;
	
	var getPlaces = function(){
		console.log("PlacesController getPlaces");
		
		PlacesFactory.getPlaces(function(places){
			console.log(this);
			console.log(places);
			_this.places = places;
		});
	}
	this.addPlace = function(newPlace){
		console.log("Clicked", newPlace);
		if(newPlace){
			PlacesFactory.addPlace(newPlace, function(){
				getPlaces();
				_this.newPlace = {};
			})
		}
	}
	getPlaces();

	this.removePlace = function(place){
		console.log("removePlace", place);
		PlacesFactory.removePlace(place, function(){
			getPlaces();
		})
	}
	this.updatePlace = function(place){
		console.log("updatePlace", place);
		PlacesFactory.updatePlace(place, function(){
			getPlaces();
		})
	}
})

app.controller('BalletsController', function(BalletsFactory){
	console.log("BalletsController Loaded");
	var _this = this;
	
	var getBallets = function(){
		console.log("BalletsController getBallets");
		
		BalletsFactory.getBallets(function(ballet){
			console.log(this);
			console.log(ballet);
			_this.ballet = ballet;
		});
	}
	this.addBallet = function(newBallet){
		console.log("Clicked", newBallet);
		if(newBallet){
			BalletsFactory.addBallet(newBallet, function(){
				getBallets();
				_this.newBallet = {};
			})
		}
	}
	getBallets();

	this.removeBallet = function(ballet){
		console.log("removeBallet", ballet);
		BalletsFactory.removeBallet(ballet, function(){
			getBallets();
		})
	}
	this.updateBallet = function(ballet){
		console.log("updateBallet", ballet);
		BalletsFactory.updateBallet(ballet, function(){
			getBallets();
		})
	}
})

app.controller('JazzsController', function(JazzsFactory){
	console.log("JazzsController Loaded");
	var _this = this;
	
	var getJazzs = function(){
		console.log("JazzsController getJazzs");
		
		JazzsFactory.getJazzs(function(jazz){
			console.log(this);
			console.log(jazz);
			_this.jazz = jazz;
		});
	}
	this.addJazz = function(newJazz){
		console.log("Clicked", newJazz);
		if(newJazz){
			JazzsFactory.addJazz(newJazz, function(){
				getJazzs();
				_this.newJazz = {};
			})
		}
	}
	getJazzs();

	this.removeJazz = function(jazz){
		console.log("removeJazz", jazz);
		JazzsFactory.removeJazz(jazz, function(){
			getJazzs();
		})
	}
	this.updateJazz = function(jazz){
		console.log("updateJazz", jazz);
		JazzsFactory.updateJazz(jazz, function(){
			getJazzs();
		})
	}
})

app.controller('WhatsController', function(WhatsFactory){
	console.log("WhatsController Loaded");
	var _this = this;
	
	var getWhats = function(){
		console.log("WhatsController getWhats");
		
		WhatsFactory.getWhats(function(what){
			console.log(this);
			console.log(what);
			_this.what = what;
		});
	}
	this.addWhat = function(newWhat){
		console.log("Clicked", newWhat);
		if(newWhat){
			WhatsFactory.addWhat(newWhat, function(){
				getWhats();
				_this.newWhat = {};
			})
		}
	}
	getWhats();

	this.removeWhat = function(what){
		console.log("removeWhat", what);
		WhatsFactory.removeWhat(what, function(){
			getWhats();
		})
	}
	this.updateWhat = function(what){
		console.log("updateWhat", what);
		WhatsFactory.updateWhat(what, function(){
			getWhats();
		})
	}
})

app.controller('ConcertsController', function(ConcertsFactory){
	console.log("ConcertsController Loaded");
	var _this = this;
	
	var getConcerts = function(){
		console.log("ConcertsController getConcerts");
		
		ConcertsFactory.getConcerts(function(concerts){
			console.log(this);
			console.log(concerts);
			_this.concerts = concerts;
		});
	}
	this.addConcert = function(newConcert){
		console.log("Clicked", newConcert);
		if(newConcert){
			ConcertsFactory.addConcert(newConcert, function(){
				getConcerts();
				_this.newConcert = {};
			})
		}
	}
	getConcerts();

	this.removeConcert = function(concert){
		console.log("removeConcert", concert);
		ConcertsFactory.removeConcert(concert, function(){
			getConcerts();
		})
	}
	this.updateConcert = function(concert){
		console.log("updateConcert", concert);
		ConcertsFactory.updateConcert(concert, function(){
			getConcerts();
		})
	}
})

app.controller('NootsController', function(NootsFactory){
	console.log("NootsController Loaded");
	var _this = this;
	
	var getNoots = function(){
		console.log("NootsController getNoots");
		
		NootsFactory.getNoots(function(noots){
			console.log(this);
			console.log(noots);
			_this.noots = noots;
		});
	}
	this.addNoot = function(newNoot){
		console.log("Clicked", newNoot);
		if(newNoot){
			NootsFactory.addNoot(newNoot, function(){
				getNoots();
				_this.newNoot = {};
			})
		}
	}
	getNoots();

	this.removeNoot = function(noot){
		console.log("removeNoot", noot);
		NootsFactory.removeNoot(noot, function(){
			getNoots();
		})
	}
	this.updateNoot = function(noot){
		console.log("updateNoot", noot);
		NootsFactory.updateNoot(noot, function(){
			getNoots();
		})
	}
})

app.controller('ChalksController', function(ChalksFactory){
	console.log("ChalksController Loaded");
	var _this = this;
	
	var getChalks = function(){
		console.log("ChalksController getChalks");
		
		ChalksFactory.getChalks(function(chalks){
			console.log(this);
			console.log(chalks);
			_this.chalks = chalks;
		});
	}
	this.addChalk = function(newChalk){
		console.log("Clicked", newChalk);
		if(newChalk){
			ChalksFactory.addChalk(newChalk, function(){
				getChalks();
				_this.newChalk = {};
			})
		}
	}
	getChalks();

	this.removeChalk = function(chalk){
		console.log("removeChalk", chalk);
		ChalksFactory.removeChalk(chalk, function(){
			getChalks();
		})
	}
	this.updateChalk = function(chalk){
		console.log("updateChalk", chalk);
		ChalksFactory.updateChalk(chalk, function(){
			getChalks();
		})
	}
})

app.controller('SchollysController', function(SchollysFactory){
	console.log("SchollysController Loaded");
	var _this = this;
	
	var getSchollys = function(){
		console.log("SchollysController getSchollys");
		
		SchollysFactory.getSchollys(function(schollys){
			console.log(this);
			console.log(schollys);
			_this.schollys = schollys;
		});
	}
	this.addScholly = function(newScholly){
		console.log("Clicked", newScholly);
		if(newScholly){
			SchollysFactory.addScholly(newScholly, function(){
				getSchollys();
				_this.newScholly = {};
			})
		}
	}
	getSchollys();

	this.removeScholly = function(scholly){
		console.log("removeScholly", scholly);
		SchollysFactory.removeScholly(scholly, function(){
			getSchollys();
		})
	}
	this.updateScholly = function(scholly){
		console.log("updateScholly", scholly);
		SchollysFactory.updateScholly(scholly, function(){
			getSchollys();
		})
	}
})

app.controller('LightsController', function(LightsFactory){
	console.log("LightsController Loaded");
	var _this = this;
	
	var getLights = function(){
		console.log("LightsController getLights");
		
		LightsFactory.getLights(function(lights){
			console.log(this);
			console.log(lights);
			_this.light = lights;
		});
	}
	this.addLight = function(newLight){
		console.log("Clicked", newLight);
		if(newLight){
			LightsFactory.addLight(newLight, function(){
				getLights();
				_this.newLight = {};
			})
		}
	}
	getLights();

	this.removeLight = function(light){
		console.log("removeLight", light);
		LightsFactory.removeLight(light, function(){
			getLights();
		})
	}
	this.updateLight = function(light){
		console.log("updateLight", light);
		LightsFactory.updateLight(light, function(){
			getLights();
		})
	}
})

