angular.module('app').directive('myinput', function () {
	return {
		replace: true,
		restrict: 'E',
		scope: {
			caption: '@',
			model: '='
		},
		templateUrl: '/components/myinput/myinput.html'
	}
});