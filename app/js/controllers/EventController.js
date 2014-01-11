'use strict';

eventsApp.controller('EventController', 
	// eventData is a service we created to hold our data - it is being passed in, like scope, so we have access to it
	function EventController($scope, eventData){
		$scope.sortorder= '-upVoteCount';
		$scope.event= eventData.event;
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		}
	}
);