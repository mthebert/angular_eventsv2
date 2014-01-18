'use strict';

eventsApp.controller('EventController', 
	// eventData is a service we created to hold our data - it is being passed in, like scope, so we have access to it
	function EventController($scope, eventData, $routeParams, $route){
		$scope.sortorder= '-upVoteCount';
		// so we have our eventData model, calling the getEvent function and the callback is the function we pass the event to
		// and the passback gets assigned to the $scope.event

		// this gives you access to the event object, the $scope.event is just a promise
		$scope.event=eventData.getEvent($routeParams.eventId);
		// this is set in the $route
		console.log($route.current.foo);
		// this is set by querystring
		console.log($route.current.params.barval);
		//this is set in the rest id
		console.log($route.current.params.eventId);
		// the difference with pathParams only has the route, not the querystring
		console.log($route.current.pathParams.eventId);
		$scope.event.then(
			function(event) {console.log(event);},
			function(response) {console.log(response)
		});
		// if you want access in the controller to the $scope.event object...

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