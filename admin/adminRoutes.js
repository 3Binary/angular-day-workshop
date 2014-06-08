(function() {
  var AdminRoutes;

  AdminRoutes = (function() {
    function AdminRoutes($routeProvider) {
      $routeProvider.when('/admin', {
        caption: 'admin',
        controller: 'adminController',
        controllerAs: 'controller',
        templateUrl: '/admin/admin.html'
      });
    }

    return AdminRoutes;

  })();

  angular.module('app').config(['$routeProvider', AdminRoutes]);

}).call(this);

/*
//# sourceMappingURL=adminRoutes.js.map
*/
