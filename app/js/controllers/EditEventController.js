'use strict';

eventsApp.controller('EditEventController', 
	function EditEventController($scope){
		// newEventForm is from form name="newEventForm"
		$scope.saveEvent = function(event, newEventForm){
			console.log(newEventForm);
			if(newEventForm.$valid){
				window.alert('event: ' + event.name + ' saved');
			}
		};
		$scope.cancelEdit = function(){
			window.location = "/EventDetails.html";
		}
	}
);