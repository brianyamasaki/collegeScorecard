'use strict';

// Declare app level module which depends on views, and components
angular.module('collegeScorecard', [
  'ngRoute',
  'collegeScorecard.common',
  'collegeScorecard.footer',
  'collegeScorecard.home',
  'collegeScorecard.schools',
  'collegeScorecard.scorecardDataService',
  'collegeScorecard.selectedSchoolsDirective',
  'collegeScorecard.schoolsListService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);