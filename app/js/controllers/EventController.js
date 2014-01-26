'use strict';

eventsApp.controller('EventController', 
	// eventData is a service we created to hold our data - it is being passed in, like scope, so we have access to it
	function EventController($scope, eventData, $anchorScroll, $route){
		$scope.sortorder= '-upVoteCount';

		$scope.event=$route.current.locals.event;


		// this is set in the $route
		console.log($route.current.foo);
		// this is set by querystring
		console.log($route.current.params.barval);
		//this is set in the rest id
		console.log($route.current.params.eventId);
		// the difference with pathParams only has the route, not the querystring
		console.log($route.current.pathParams.eventId);


        $scope.upVoteSession = function(session){
			session.upVoteCount++;
		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};

		$scope.scrollToSession = function(){
			$anchorScroll();
		}
		$scope.reload = function(){
			$route.reload();
		}		
	}
);