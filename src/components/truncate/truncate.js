angular.module('app').filter('truncate', function () {
	return function (text, characters, includeEllipsis) {
		// return original text if text length <= characters
		// nothing to truncate
		if (text.length <= characters) {
			return text;
		}
		
		return text.substr(0, characters) + (includeEllipsis ? '...' : '');
	};
});