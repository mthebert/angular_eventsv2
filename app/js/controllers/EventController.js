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
			imageUrl: 'img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'In this session we will learn the ins and outs of directives!'
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: '30 min',
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes.  Learn what they do and how they can work for you'

				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: '2 hours',
					level: 'Intermediate',
					abstract: 'Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.'
				}
			]

		}
	}
);