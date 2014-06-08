(function() {
  describe('reportCard', function() {
    return describe('stripUsername filter', function() {
      beforeEach(module('app'));
      beforeEach(inject(function(stripUsernameFilter) {
        this.stripUsernameFilter = stripUsernameFilter;
      }));
      it('strips the username from the repo, if the repo is owned by the user', function() {
        var filtered, repo, username;
        repo = 'CaryLandholt/AngularFun';
        username = 'CaryLandholt';
        filtered = this.stripUsernameFilter(repo, username);
        expect(filtered).toEqual('AngularFun');
        return expect(filtered).not.toEqual(repo);
      });
      return it('does not strip the username from the repo, if the repo is owned by another user', function() {
        var filtered, repo, username;
        repo = 'angular/angular.js';
        username = 'CaryLandholt';
        filtered = this.stripUsernameFilter(repo, username);
        expect(filtered).toEqual(repo);
        return expect(filtered).not.toEqual('angular.js');
      });
    });
  });

}).call(this);

/*
//# sourceMappingURL=stripUsername-filter.spec.js.map
*/
