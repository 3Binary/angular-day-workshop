(function() {
  describe('syntax', function() {
    return describe('syntax directive', function() {
      beforeEach(module('app'));
      beforeEach(inject(function($compile, $rootScope) {
        this.$compile = $compile;
        return this.scope = $rootScope.$new();
      }));
      return it('starts with the <pre> tag', function() {
        var controller, element, html, markup;
        markup = "<syntax>\nname = 'Cary'\n</syntax>";
        element = this.$compile(markup)(this.scope);
        controller = element.controller();
        html = element.html();
        return expect(html.indexOf('<pre')).toEqual(0);
      });
    });
  });

}).call(this);

/*
//# sourceMappingURL=syntax-directive.spec.js.map
*/
