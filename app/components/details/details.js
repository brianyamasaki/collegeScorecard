'use strict';

angular.module('collegeScorecard.details', ['ngRoute', 'collegeScorecard.scorecardDataService', 'collegeScorecard.schoolsListService'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/details', {
      templateUrl: 'components/details/details.html',
      controller: 'DetailsCtrl'
    });
  }])
  .controller('DetailsCtrl', ['$scope', 'ScorecardDataService', '$log', 'SchoolsListService',
    function(scope, ScorecardDataService, $log, SchoolsListService) {


    }]);
