'use strict';

eventsApp.controller('EventController', 
	// eventData is a service we created to hold our data - it is being passed in, like scope, so we have access to it
	function EventController($scope, eventData){
		$scope.sortorder= '-upVoteCount';
		// so we have our eventData model, calling the getEvent function and the callback is the function we pass the event to
		// and the passback gets assigned to the $scope.event
		eventData.getEvent().then(function(result) {
			$scope.event = result;
   			console.log($scope.event)
		});
	
        $scope.upVoteSession = function(session, event){
        	// the console.log shows the difference between the event and the $scope.event when using promises
        	console.log(event);
        	console.log($scope.event);
			session.upVoteCount++;
		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		}
	}
);