'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/newEvent',
		{
			templateUrl: 'templates/NewEvent.html',
			controller: 'EditEventController'
		});
		$routeProvider.when('/events',
		{
			templateUrl: 'templates/EventList.html',
			controller: 'EventListController'
		});
        $routeProvider.when('/sampleDirective',
        {
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        }
        );	
		$routeProvider.when('/event/:eventId',
		{
			foo: 'bar',
			// template: '<h1>Hello World</h1>',
			templateUrl: 'templates/EventDetails.html',
			controller: 'EventController',
			resolve: {
				event: function($q, $route, eventData){
					var deferred = $q.defer();
					// cant use the $routeParams yet - so use $route
					eventData.getEvent($route.current.pathParams.eventId)
						.then(function(event){deferred.resolve(event);
					});
					return deferred.promise;
				}
			}
		});	
		$routeProvider.otherwise({redirectTo: '/events'});	
		//$locationProvider.html5Mode(true);		
	})
	.factory('myCache', function($cacheFactory){
		return $cacheFactory('myCache', {capacity: 3})
	});
