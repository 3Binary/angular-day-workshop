(function() {
  var Admin;

  Admin = (function() {
    function Admin($log) {
      $log.info('adminService instantiated.');
    }

    return Admin;

  })();

  angular.module('app').service('adminService', ['$log', Admin]);

}).call(this);

/*
//# sourceMappingURL=adminService.js.map
*/
