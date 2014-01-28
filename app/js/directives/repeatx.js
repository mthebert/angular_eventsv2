eventsApp.directive('repeatX', function($compile){
	return {
		// scope is not available to compile, its all about dom manipulation
		compile: function(element, attributes){
			for (var i=0; i< Number(attributes.repeatX)-1; i++){
				element.after(element.clone().attr('repeat-x', 0));
			}
			return function(scope, element, attributes, controller){
				attributes.$observe('text', function(newVal){
					if (newVal === 'Hello World'){
						element.css('color', 'red');
					}
				})
			}
		}
	};
});