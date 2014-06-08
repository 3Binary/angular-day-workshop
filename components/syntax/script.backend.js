(function() {
  var ScriptBackend;

  ScriptBackend = (function() {
    function ScriptBackend($httpBackend) {
      $httpBackend.whenGET(/.(coffee|js)/).passThrough();
    }

    return ScriptBackend;

  })();

  angular.module('app').run(['$httpBackend', ScriptBackend]);

}).call(this);

/*
//# sourceMappingURL=script.backend.js.map
*/
