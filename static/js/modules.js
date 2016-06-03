var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/frontpage.partial.html'
	})

	.when('/discover', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/discover.partial.html'
	})
	.when('/celebrate', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/celebrate.partial.html'
	})
	.when('/register', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/register.partial.html'
	})
	.when('/support', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/support.partial.html'
	})
	.when('/about', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/about.partial.html'
	})
	.when('/person_ofthe_month', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/person_ofthe_month.partial.html'
	})
	.when('/places', {
		controller: 'Places_PostsController',
		controllerAs: 'places_postsCtrl',
		templateUrl: '/partials/places.partial.html'
	})
	.when('/business', {
		controller: 'Business_PostsController',
		controllerAs: 'business_postsCtrl',
		templateUrl: '/partials/discover_business.partial.html'
	})
	.when('/maps2', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/maps2.partial.html'
	})
	.when('/menu', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/menu.partial.html'
	})
	.when('/guide', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/guide.partial.html'
	})
	.when('/contact', {
		controller: 'ContactsController',
		controllerAs: 'contactsCtrl',
		templateUrl: '/partials/contact_us.partial.html'
	})
	.when('/facts', {
		controller: 'ContactsController',
		controllerAs: 'contactsCtrl',
		templateUrl: '/partials/facts.partial.html'
	})
	.when('/celebrate_business', {
		controller: 'Business_PostsController',
		controllerAs: 'business_postsCtrl',
		templateUrl: '/partials/celebrate_business.partial.html'
	})
	.when('/celebrate_places', {
		controller: 'Places_PostsController',
		controllerAs: 'places_postsCtrl',
		templateUrl: '/partials/celebrate_places.partial.html'
	})
	.when('/celebrate_schools', {
		controller: 'SchoolsController',
		controllerAs: 'schoolsCtrl',
		templateUrl: '/partials/celebrate_schools.partial.html'
	})
	.when('/schools', {
		controller: 'SchoolsController',
		controllerAs: 'schoolsCtrl',
		templateUrl: '/partials/schools.partial.html'
	})
	.when('/celebrate_eventts', {
		controller: 'EventtsController',
		controllerAs: 'eventtsCtrl',
		templateUrl: '/partials/celebrate_eventts.partial.html'
	})
	.when('/eventts', {
		controller: 'EventtsController',
		controllerAs: 'eventtsCtrl',
		templateUrl: '/partials/eventts.partial.html'
	})
	.when('/what_mean', {
		controller: 'WhatsController',
		controllerAs: 'whatsCtrl',
		templateUrl: '/partials/what_mean.partial.html'
	})
	

});