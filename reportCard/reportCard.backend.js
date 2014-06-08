(function() {
  var ReportCardBackend;

  ReportCardBackend = (function() {
    function ReportCardBackend($httpBackend) {
      $httpBackend.whenGET(/osrc.dfm.io/).passThrough();
    }

    return ReportCardBackend;

  })();

  angular.module('app').run(['$httpBackend', ReportCardBackend]);

}).call(this);

/*
//# sourceMappingURL=reportCard.backend.js.map
*/
