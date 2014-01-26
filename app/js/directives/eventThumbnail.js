'use strict'

eventsApp.directive('eventThumbnail', function($compile){
	return{
		// C is class, E is element
		restrict: 'E',
		// replace replaces the directive with HTML rather than appending to it, creating valid html
		replace: true,
		templateUrl: "templates/directives/eventThumbnail.html",
		scope: {
			event: "=myEvent"
		}
	};
})
