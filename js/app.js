/* Define app module and add the angular route module and put the controllers into their own module */
// When calling the controllers on the app module, you do not have to use controller directive on html file

var myApp = angular.module('myApp',[    
       'ngRoute',
       'contactControllers'
       ]);

/*
 *  Define the route provider using the app config.
 *  use a function with the route provider variable as an attr and call it
 *  define( when ) the views and map them to the template url 
 *	the views uses the controller with the model data when going to that view

 */
myApp.config(['$routeProvider',
    function($routeProvider){
	$routeProvider.
	when('/contacts',{
		templateUrl: 'contacts-view.html',
		controller: 'userController'
	}).
	when('/contacts/:userId', {
		templateUrl: 'contacts-details.html',
		controller: 'userinfoController'
	}).
	otherwise({
		redirectTo: '/contacts'
	});
	
}]);