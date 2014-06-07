class Admin extends Controller
	constructor: ($log, $scope, adminService, Guid) ->
		$log.info 'adminController instantiated.'
		@events = [
			{
				id: Guid()
				what: 'Angular Day'
				when: '2014-06-07'
				where: 'Starter School'
			}
			{
				id: Guid()
				what: 'Angular Day 2'
				when: '2014-06-08'
				where: 'Starter School'
			}
			{
				id: Guid()
				what: 'ngConf'
				when: '2014-08-01'
				where: 'Google Campus'
			}
		]

		$scope.$on '$destroy', ->
			$log.info 'controller destroyed'

		@addEvent = (whatEvent, whenEvent, whereEvent) ->
			id = Guid()
			eventDetails = {id: id, what: whatEvent, when: whenEvent, where: whereEvent}

			$scope.$broadcast 'notify', eventDetails
			@events.push eventDetails


class Notifications extends Directive
	constructor: ($log, $timeout) ->
		return {
			link: (scope, element, attrs) ->
				scope.$on 'notify', (e, eventDetails) ->
					scope.newNotification = true
					scope.eventDetails = eventDetails

					$timeout ->
						scope.newNotification = false
					, 4000
			restrict: 'E'
			template: '<div ng-show="newNotification" class="new-notification bg-success"><p>{{eventDetails.what}} scheduled for {{eventDetails.when}} - {{eventDetails.where}}</p></div>'
		}