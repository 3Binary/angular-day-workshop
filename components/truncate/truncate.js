(function() {
  var Truncate;

  Truncate = (function() {
    function Truncate() {
      return function(text, characters) {
        var truncated;
        truncated = text.substr(0, characters);
        return "" + truncated + "...";
      };
    }

    return Truncate;

  })();

  angular.module('app').filter('truncate', [Truncate]);

}).call(this);

/*
//# sourceMappingURL=truncate.js.map
*/
