// files with .backend. in the name will be excluded when executing gulp --prod
angular.module('app').run(function ($httpBackend) {
	$httpBackend.whenGET(/^.*\.(html|htm)$/).passThrough();
});