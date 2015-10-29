'use strict';

// Declare app level module which depends on views, and components
angular.module('collegeScorecard', [
  'ngRoute',
  'ui.bootstrap',
  'nemLogging',
  'uiGmapgoogle-maps',
  'collegeScorecard.common',
  'collegeScorecard.footer',
  'collegeScorecard.home',
  'collegeScorecard.schools',
  'collegeScorecard.compare',
  'collegeScorecard.details',
  'collegeScorecard.selectedSchoolsDirective',
  'collegeScorecard.scorecardDataService',
  'collegeScorecard.schoolsListService',
  'collegeScorecard.schoolDataTranslationService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
