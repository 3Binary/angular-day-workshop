angular.module('app').controller('eventBriteController', function ($scope, Guid, eventBriteService) {
	// show the initial list
	eventBriteService.list().then(function (result) {
		$scope.events = result;
	});

	$scope.addEvent = function (event) {
		event.event_id = Guid();
		
		// add event
		// get the updated events
		// add the events to the scope
		eventBriteService.add(event).then(function (result) {
			$scope.$broadcast('notify', {title: 'Added', event: event});
		})
		.then(eventBriteService.list)
		.then(function (result) {
			$scope.events = result;
		});
	};
});