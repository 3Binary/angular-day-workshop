(function() {
  var Admin, Notifications;

  Admin = (function() {
    function Admin($log, $scope, adminService, Guid) {
      $log.info('adminController instantiated.');
      this.events = [
        {
          id: Guid(),
          what: 'Angular Day',
          when: '2014-06-07',
          where: 'Starter School'
        }, {
          id: Guid(),
          what: 'Angular Day 2',
          when: '2014-06-08',
          where: 'Starter School'
        }, {
          id: Guid(),
          what: 'ngConf',
          when: '2014-08-01',
          where: 'Google Campus'
        }
      ];
      $scope.$on('$destroy', function() {
        return $log.info('controller destroyed');
      });
      this.addEvent = function(whatEvent, whenEvent, whereEvent) {
        var eventDetails, id;
        id = Guid();
        eventDetails = {
          id: id,
          what: whatEvent,
          when: whenEvent,
          where: whereEvent
        };
        $scope.$broadcast('notify', eventDetails);
        return this.events.push(eventDetails);
      };
    }

    return Admin;

  })();

  Notifications = (function() {
    function Notifications($log, $timeout) {
      return {
        link: function(scope, element, attrs) {
          return scope.$on('notify', function(e, eventDetails) {
            scope.newNotification = true;
            scope.eventDetails = eventDetails;
            return $timeout(function() {
              return scope.newNotification = false;
            }, 4000);
          });
        },
        restrict: 'E',
        template: '<div ng-show="newNotification" class="new-notification bg-success"><p>{{eventDetails.what}} scheduled for {{eventDetails.when}} - {{eventDetails.where}}</p></div>'
      };
    }

    return Notifications;

  })();

  angular.module('app').controller('adminController', ['$log', '$scope', 'adminService', 'Guid', Admin]);

  angular.module('app').directive('notifications', ['$log', '$timeout', Notifications]);

}).call(this);

/*
//# sourceMappingURL=adminController.js.map
*/
