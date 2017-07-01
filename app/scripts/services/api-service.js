'use strict';

/**
Configurator service containt functions calling the remote actions
*/
angular.module('cryptowatchApp')
.service('ApiService', function($http) {
	return {
		getMarkets: function() {
			return $http({
				method: 'GET',
				url: 'https://bittrex.com/api/v1.1/public/getmarkets',
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}

	};
});