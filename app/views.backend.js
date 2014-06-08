(function() {
  var ViewsBackend;

  ViewsBackend = (function() {
    function ViewsBackend($httpBackend) {
      $httpBackend.whenGET(/^.*\.(html|htm)$/).passThrough();
    }

    return ViewsBackend;

  })();

  angular.module('app').run(['$httpBackend', ViewsBackend]);

}).call(this);

/*
//# sourceMappingURL=views.backend.js.map
*/
