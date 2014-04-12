var userApp = angular.module('userApp', []);

/*
 * USER INFORMATION CONTROLLER / MODEL
 */
userApp
		.controller(
				'userController',
				function($scope) {
					$scope.userinfo = [
							{
								'username' : 'eyce',
								'firstname' : 'Asim',
								'lastname' : 'Craft',
								'email' : 'info@useremail.com',
								'bio' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
								'skills':[ "Web Design","Graphic Design"]
							},
							{
								'username' : 'track1',
								'firstname' : 'Tom',
								'lastname' : 'Billard',
								'email' : 'user1@useremail.com',
								'bio' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
								'skills':[ "Web Design","Logo Design"]
							},
							{
								'username' : 'biker3',
								'firstname' : 'Bill',
								'lastname' : 'Home',
								'email' : 'theuser@useremail.com',
								'bio' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
								'skills':[ "Wordpress","Graphic Design"]
							} ];

				});


/*
 * ADD TO USER CONTROLLER
 * IF USER CLICKS TO BE ADDED TO CLIENT PROJECT LIST
 * 
 */

userApp.controller('adduserController', function($scope){
	// users data
	$scope.users = [
						{
							'username' : 'eyce',
							'firstname' : 'Asim',
							'lastname' : 'Craft',
							active: false,
							'email' : 'info@useremail.com',
							'bio' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
							'skills':[ "Web Design","Graphic Design"]
						},
						{
							'username' : 'track1',
							'firstname' : 'Tom',
							'lastname' : 'Billard',
							active: false,
							'email' : 'user1@useremail.com',
							'bio' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
							'skills':[ "Web Design","Logo Design"]
						},
						{
							'username' : 'biker3',
							'firstname' : 'Bill',
							'lastname' : 'Home',
							active: false,
							'email' : 'theuser@useremail.com',
							'bio' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
							'skills':[ "Wordpress","Graphic Design"]
						} ];
// toggle function to show if users who clicked is active or not
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};
	
// user adds himself to project if he selects add, if clicked it displays the user name who added himself
	
$scope.projuser = function(){
	var projuser = "Username : " ;
	angular.forEach($scope.users, function(s){
		//var projuser;
		if (s.active){
			projuser = s.username;
		}
		});
	return projuser;
};

	
/*var user = {"username":"eyce"};
$('.userclick').click(function(){
	if(user.username == "eyce"){
		$('.userlist').append(user.username);		
	}
});*/




});


/***** Recieve Notification ****/
/*
 * RETRIVE SENDING USER NAME
 * RETRIVE SENDERS USER NAME
 * IF USER FILLS OUT INPUT FIELD AND PRESS SEND BUTTON
 * THE TEXT FROM THE INPUT FIELD IS RECIEVED AND STORED IN A DIV BASED ON RECIEVER USER ID
 * IF USER SENDS MESSAGE. DISPLAY A NOTIFICATION ALERT
 * 
 */
 // My script
myApp.controller('msgController', function(){
	
	notification = function(){
		
		var client;
		var user;
		
		
	};
	
});
