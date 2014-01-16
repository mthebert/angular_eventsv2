'use strict'
// overriding the $exceptionHandler service, why we use the $
eventsApp.factory('$exceptionHandler', function(){
	return function(exception){
		console.log("exception handled: " + exception.message);
	};
})