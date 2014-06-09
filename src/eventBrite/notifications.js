angular.module('app').directive('notifications', function ($log, $timeout) {
	return {
		link: function (scope, element, attrs) {
			scope.$on('notify', function (e, details) {
				scope.newNotification = true;
				scope.details = details;

				$timeout(function () {
					scope.newNotification = false;
				}, 4000);
			});
		},
		replace: true,
		restrict: 'E',
		templateUrl: '/eventBrite/notifications.html'
	}
});