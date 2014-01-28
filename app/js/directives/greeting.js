'use strict'

eventsApp.directive('greeting', function(){
	return{
		
		restrict: 'E',
		replace: true,
		priority: -1,
		template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
		controller: function($scope){
			var greetings = ['hello'];
			$scope.sayHello = function(){
				alert(greetings.join());
			}
			this.addGreeting = function(greeting){
				greetings.push(greeting);
			}
		}
	};
})
.directive('finnish', function(){
	return{
		// require means we want to use a directive that has a controller, in order to share functionality
		restrict: 'A',
		// priority - higher is better
		priority: -1,
		// terminal - nothing of a lower priority gets called, ng-click is a directive with 0, so you have to use negative numbers
		// if you are going to use terminal
		terminal: true,
		require: 'greeting',
		link: function(scope, element, attrs, controller){
			controller.addGreeting('hei');
		}
	}
})
.directive('hindi', function(){
	return{
		restrict: 'A',
		require: 'greeting',
		priority: -2,
		link: function(scope, element, attrs, controller){
			controller.addGreeting('Namaste!');
		}		
	}
})

