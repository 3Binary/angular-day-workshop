class AdminRoutes extends Config
	constructor: ($routeProvider) ->
		$routeProvider
		.when '/admin',
			caption: 'admin'
			controller: 'adminController'
			controllerAs: 'controller'
			templateUrl: '/admin/admin.html'