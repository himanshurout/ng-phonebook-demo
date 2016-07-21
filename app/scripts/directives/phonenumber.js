angular.module('phonebookApp').directive('phonenumber', ['$filter', function($filter){

	function link(scope, element, attributes) {
 
		scope.inputValue = scope.phonenumberModel;

		scope.$watch('inputValue', function(value, oldValue) {
			
			value = String(value);
			var number = value.replace(/[^0-9]+/g, '');
			scope.phonenumberModel = number;
			scope.inputValue = $filter('phonenumber')(number);
		});
	}
		
	return {
		link: link,
		restrict: 'E',
		scope: {
			phonenumberModel: '=model',
		},
		template: '<input ng-model="inputValue" type="tel" class="form-control" required>'
	};
}]);