angular.module('app').controller('eventBriteEventController', function ($scope, $routeParams, $location, $timeout, eventBriteService) {
	var id = $routeParams.id;

	eventBriteService.get(id).then(function (result) {
		$scope.event = result;
	});

	$scope.deleteEvent = function () {
		eventBriteService.delete(id).then(function () {
			$scope.$broadcast('notify', {title: 'Deleted', event: $scope.event});
			
			// arbitrary timer introduced to show notification
			// don't do this.  :)
			$timeout(function () {
				$location.path('/event-brite');
			}, 4000);
		});
	};
});