angular.module('app').config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/events/:id', {
		controller: 'eventController',
		controllerAs: 'controller',
		templateUrl: '/event/event.html'
	})
}])