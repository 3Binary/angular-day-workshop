(function() {
  describe('syntax', function() {
    return describe('syntaxService', function() {
      beforeEach(module('app'));
      beforeEach(inject(function(syntaxService) {
        this.syntaxService = syntaxService;
      }));
      return it('renders highlighted html CoffeeScript', function() {
        var html, markdown;
        markdown = "name = 'Cary'";
        html = this.syntaxService.highlight(markdown);
        return expect(html.indexOf('<pre')).toEqual(0);
      });
    });
  });

}).call(this);

/*
//# sourceMappingURL=syntaxService.spec.js.map
*/
