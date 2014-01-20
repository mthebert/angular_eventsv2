'use strict'

eventsApp.directive('eventThumbnail', function($compile){
	return{
		// C is class, E is element
		restrict: 'E',
		replace: true,
		templateUrl: "templates/directives/eventThumbnail.html",
		scope: {
			event: "=myEvent"
		}
	};
})
