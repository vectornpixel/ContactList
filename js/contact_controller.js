/** Original angular module **/
//var myApp = angular.module('myApp',[]);
// create a new angular module that takes on the controllers for this data set


var contactControllers = angular.module('contactControllers', []);

/* VIEW ALL USERS CONTROLLER */
// declare controller that is apart of the main controller and add the model data from the JSON file

contactControllers.controller('userController', ['$scope', '$http', function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.userinfo = data;
	});
}
	
]);


/* VIEW INDIVIDUAL INFO CONTROLLER WHEN CLICKED */
/* declare a controller that will take in the route params and link to the ID if used for multiple views linking
 * linking them together in a relational way
 */

contactControllers.controller('userinfoController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
	$http.get('js/users/' + $routeParams.userId + '.json').success(function(data){
		$scope.userdata = data;
	});
	
}]);



/*
 * ( Note ) - Every new data set, create seperate controller blocks that controls the models for that set
 * example - memberControllers ( memberinfoController, memberdataController )
 */