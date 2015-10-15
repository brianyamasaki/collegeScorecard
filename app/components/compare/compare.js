'use strict';

angular.module('collegeScorecard.compare', ['ngRoute', 'collegeScorecard.scorecardDataService', 'collegeScorecard.schoolsListService'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/compare', {
      templateUrl: 'components/compare/compare.html',
      controller: 'CompareCtrl'
    });
  }])
  .controller('CompareCtrl', ['$scope', 'ScorecardDataService', '$log', 'SchoolsListService',
    function(scope, ScorecardDataService, $log, SchoolsListService) {


  }]);
