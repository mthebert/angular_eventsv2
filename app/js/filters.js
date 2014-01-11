'use strict';

// the first param is the name of the filter, the second is a function
// filters return a function - the inner function is your actual filter
// dont forget to add the filters.js to the html
// then add the filter to the binding {{ expression | filtername}}
eventsApp.filter('durations', function()
{
	return function(duration){
		switch(duration){
			case 1:
				return "Half Hour";
			case 2:
				return "1 Hour";
			case 3:
				return "Half Day";
			case 4:
				return "Full Day";
		}
	}
})