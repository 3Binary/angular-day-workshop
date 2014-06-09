angular.module('app').config(function ($routeProvider) {
	$routeProvider
	.when('/event-brite', {
		controller: 'eventBriteController',
		templateUrl: '/eventBrite/eventBrite.html'
	})
	.when('/event-brite/:id', {
		controller: 'eventBriteEventController',
		templateUrl: '/eventBrite/eventBriteEvent.html'
	});
});