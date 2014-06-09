// files with .backend. in the name will be excluded when executing gulp --prod
angular.module('app').run(function ($httpBackend) {
	$httpBackend.whenGET(/workshop-api-1.herokuapp.com/).passThrough();
	$httpBackend.whenDELETE(/workshop-api-1.herokuapp.com/).passThrough();
	$httpBackend.whenPOST(/workshop-api-1.herokuapp.com/).passThrough();
});