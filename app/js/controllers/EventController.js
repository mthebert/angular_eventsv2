'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){
		$scope.event={
			name: 'Angular Boot Camp',
			date: '1/1/2014',
			time: '10:30am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: 'img/angularjs-logo.png'

		}
	}
);