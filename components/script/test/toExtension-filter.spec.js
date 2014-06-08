(function() {
  describe('script', function() {
    return describe('toExtension filter', function() {
      beforeEach(module('app'));
      beforeEach(inject(function(toExtensionFilter) {
        this.toExtensionFilter = toExtensionFilter;
      }));
      return it('replaces the extension', function() {
        var filtered, getScript, script, source, sourceExt, targetExt;
        getScript = function(ext) {
          var script;
          return script = "foo/bar" + ext;
        };
        sourceExt = '.js';
        source = getScript(sourceExt);
        targetExt = '.coffee';
        filtered = this.toExtensionFilter(source, targetExt);
        script = getScript(targetExt);
        expect(filtered).toEqual(script);
        return expect(filtered).not.toEqual(source);
      });
    });
  });

}).call(this);

/*
//# sourceMappingURL=toExtension-filter.spec.js.map
*/
