'use strict';

/**
 * @ngdoc function
 * @name cryptowatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cryptowatchApp
 */
angular.module('cryptowatchApp')
    .controller('MainCtrl', function($scope, ApiService) {
        $scope.ApiService = ApiService;
        ApiService.getMarkets()
            .then(function mySuccess(resp) {
                console.log(resp);
            }, function myError(err) {
                console.log(err);
            });
    });