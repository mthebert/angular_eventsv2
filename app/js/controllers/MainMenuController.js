'use strict';

eventsApp.controller('MainMenuController', 
	function MainMenuController($scope, $location){
		// these are just getters
		console.log('absUrl: ', $location.absUrl());
		console.log('protocol: ', $location.protocol());
		console.log('port: ', $location.port());
		console.log('host: ', $location.host());
		// these are getters and setters
		console.log('path: ', $location.path());
		console.log('search: ', $location.search());
		console.log('hash: ', $location.hash());
		console.log('url: ', $location.url());

		$scope.createEvent=function(){
			//replace changes URL without adding to your history
			location.replace();
			$location.url('/newEvent');
		};
	});