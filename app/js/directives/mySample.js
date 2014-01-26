'use strict'

eventsApp.directive('mySample', function($compile){
	return{
		// E means we are going to use it as an element, vs A as an attribute, C as class, M for comment
		// if we use class we can use <div class="my-sample"></div> to add custom styles
		restrict: 'E',
		link: function(scope, element, attrs, controller){
			var markup = "<input type='text' ng-model='sampleData' />{{sampleData}}<br />";
			angular.element(element).html($compile(markup)(scope));
			// an easier way would be to use the following line and get rid of the previous 2
			// but I am leaving it in because I want to keep the example of using angular.element
			// template: <input type='text' ng-model='sampleData' />{{sampleData}}<br />
		},
		// isolates the scope so each instance has its own scope
		scope: {
			
		}
	};
})