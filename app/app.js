(function() {
  var App;

  App = (function() {
    function App() {}

    App.constructor = ['ngAnimate', 'ngRoute', 'ngMockE2E'];

    return App;

  })();

  angular.module('app', App.constructor);

}).call(this);

/*
//# sourceMappingURL=app.js.map
*/
