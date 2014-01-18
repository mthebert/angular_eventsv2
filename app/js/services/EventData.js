// services are created by calling the factory method on your app
// pass in the service name and return a function that will become your service
eventsApp.factory('eventData', function($resource, $q){
	var resource = $resource('/data/event/:id',{id: '@id'});
	return{
		getEvent: function(eventId){
			var deferred = $q.defer();
			
			resource.get({id: eventId},
			function (event){
				deferred.resolve(event);
			},
			function(response){
				deferred.reject(response);
			});
			return deferred.promise;
		},
		save: function(event){
			var deferred = $q.defer();
			event.id=9999;
			resource.save(event,
				function(response){deferred.resolve(response);},
				function(response){deferred.reject(response);}
			);
			return deferred.promise;
		},
		getAllEvents: function(){
			return resource.query();
		}
	};
});