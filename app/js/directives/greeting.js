'use strict'

eventsApp.directive('greeting', function(){
	return{
		
		restrict: 'E',
		template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
		transclude: true,
		replace: true,
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
		require: '^greeting',
		link: function(scope, element, attrs, controller){
			controller.addGreeting('hei');
		}
	}
})
.directive('hindi', function(){
	return{
		restrict: 'A',
		require: '^greeting',
		link: function(scope, element, attrs, controller){
			controller.addGreeting('Namaste!');
		}		
	}
})

