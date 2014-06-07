angular.module('app').controller('eventController', ['$log', '$routeParams', 'Guid', function ($log, $routeParams, Guid) {
	$log.info(Guid());
	$log.info('eventController', $routeParams);
	var id = $routeParams.id;

	this.eventId = id;
}])