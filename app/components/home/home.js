/**
 * Created by briany on 10/9/15.
 */

'use strict';
angular.module('collegeScorecard.home', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'components/home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', [function() {

  }]);