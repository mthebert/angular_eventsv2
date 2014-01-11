// services are created by calling the factory method on your app
// pass in the service name and return a function that will become your service
eventsApp.factory('eventData', function($http, $log){
	return{
		GetEvent: function(successcb){
			$http({method: 'GET', url: '/data/event/1'}).
				success(function(data, status, headers, config){
					successcb(data);
				}).
				error(function(data, status, headers, config){
					$log.warn(data, status, headers, config);
				});

		}
	};
});