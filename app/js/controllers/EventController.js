'use strict';

eventsApp.controller('EventController', 
	// eventData is a service we created to hold our data - it is being passed in, like scope, so we have access to it
	function EventController($scope, eventData){
		$scope.sortorder= '-upVoteCount';
		// so we have our eventData model, calling the getEvent function and the callback is the function we pass the event to
		// and the passback gets assigned to the $scope.event

		// this gives you access to the event object, the $scope.event is just a promise
		$scope.event=eventData.getEvent();
		// if you want access in the controller to the $scope.event object...
		$scope.event.then(function(event){
			console.log(event);
		},function(status){
			console.log(status);
		});
        $scope.upVoteSession = function(session){
			session.upVoteCount++;
		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		}
	}
);