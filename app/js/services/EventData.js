// services are created by calling the factory method on your app
// pass in the service name and return a function that will become your service
eventsApp.factory('eventData', function($http, $log, $q){
	return{
		getEvent: function(){
			// using $q is a promise library with angular
			// using $q eliminates all the callbacks with async calls
			var deferred = $q.defer();
			$http({method: 'GET', url: '/data/event/1'}).
				success(function(data, status, headers, config){
					deferred.resolve(data);
					// logging removed but if you want to add again, pass in $log to eventData
					// $log.info(data, status, headers(), config);
					// successcb(data);
				}).
				error(function(data, status, headers, config){
					// $log.warn(data, status, headers(), config);
					deferred.reject(status);
				});
			return deferred.promise;
		}
	};
});