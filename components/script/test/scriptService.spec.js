(function() {
  describe('script', function() {
    return describe('scriptService', function() {
      var getScriptTag;
      beforeEach(module('app'));
      beforeEach(inject(function($document, scriptService) {
        this.$document = $document;
        this.scriptService = scriptService;
      }));
      getScriptTag = function(url) {
        var script;
        return script = "<script src=\"" + url + "\"></script>";
      };
      it('adds a script', function() {
        var html, url;
        url = '//foo/bar.js';
        this.scriptService.add(url);
        html = this.$document.find('body').html();
        return expect(html).toContain(getScriptTag(url));
      });
      it('adds multiple scripts', function() {
        var html, url1, url2;
        url1 = '//foo/bar.js';
        url2 = '//biz/baz.js';
        this.scriptService.add(url1);
        this.scriptService.add(url2);
        html = this.$document.find('body').html();
        expect(html).toContain(getScriptTag(url1));
        return expect(html).toContain(getScriptTag(url2));
      });
      return it('gets an array of scripts', function() {
        var isArray, scripts, url1, url2;
        url1 = '//foo/bar.js';
        url2 = '//biz/baz.js';
        this.scriptService.add(url1);
        this.scriptService.add(url2);
        scripts = this.scriptService.get();
        isArray = Array.isArray(scripts);
        expect(isArray).toEqual(true);
        return expect(isArray).not.toEqual(false);
      });
    });
  });

}).call(this);

/*
//# sourceMappingURL=scriptService.spec.js.map
*/
