'use strict';
// angular
  // .module('phonebookApp', [
    // 'ngRoute',
    // 'toaster'
  // ])
  // .config(function ($routeProvider) {
    // $routeProvider
      // .when('/', {
        // templateUrl: 'views/contacts.html',
        // controller: 'contactCtrl',
        // controllerAs: 'contacts'
      // })
      // .when('/contacts', {
        // templateUrl: 'views/contacts.html',
        // controller: 'contactCtrl',
        // controllerAs: 'contacts'
      // })
      // .when('/contact', {
        // templateUrl: 'views/newcontact.html',
        // controller: 'contactCtrl',
        // controllerAs: 'contact'
      // })
      // .otherwise({
        // redirectTo: '/'
      // });
  // });
  angular
  .module('phonebookApp', [
    'ui.router',
    'toaster'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when("", "/home");
    $stateProvider
		.state('home', {
		  url: '/home',
		  templateUrl: 'views/home.html'
		})
		.state('about', {
		  url: '/about',
		  templateUrl: 'views/about.html'
		})
		.state('contacts', {
		  url: '/contacts',
		  templateUrl: 'views/contacts.html',
		  controller: 'contactCtrl',
		})
	    .state('contact', {
		  url:'/contact/:id',
		  templateUrl: 'views/newcontact.html',
		  controller: 'contactCtrl'
	    });

  });