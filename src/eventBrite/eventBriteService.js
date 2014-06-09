angular.module('app').service('eventBriteService', function ($http) {
	// add events
	this.add = function (event) {
		return $http.post('http://workshop-api-1.herokuapp.com/events.json', event).then(function (result) {
			return result.data;
		});
	};
	
	// delete event
	this.delete = function (id) {
		return $http.delete('http://workshop-api-1.herokuapp.com/events/' + id + '.json').then(function (result) {
			return result.data;
		});
	};
	
	// get one event
	this.get = function (id) {
		return $http.get('http://workshop-api-1.herokuapp.com/events/' + id + '.json').then(function (result) {
			return result.data;
		});
	};
	
	// get all events
	this.list = function () {
		return $http.get('http://workshop-api-1.herokuapp.com/events.json').then(function (result) {
			return result.data;
		});
	};
});