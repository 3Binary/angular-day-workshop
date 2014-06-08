(function() {
  var Guid;

  Guid = (function() {
    function Guid() {
      return (function() {
        function _Class() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r, v;
            r = Math.random() * 16 | 0;
            v = (c === 'x' ? r : r & 0x3 | 0x8);
            return v.toString(16);
          });
        }

        return _Class;

      })();
    }

    return Guid;

  })();

  angular.module('app').factory('Guid', [Guid]);

}).call(this);

/*
//# sourceMappingURL=Guid.js.map
*/
