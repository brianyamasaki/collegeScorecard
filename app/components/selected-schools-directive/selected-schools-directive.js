'use strict';

angular.module('collegeScorecard.selectedSchoolsDirective', ['collegeScorecard.scorecardDataService', 'collegeScorecard.schoolsListService'])
  .directive('selectedSchoolsDirective', ['ScorecardDataService', '$log', 'SchoolsListService',
    function(ScorecardDataService, $log, SchoolsListService) {
      return {
        restrict: 'E',
        templateUrl: 'components/selected-schools-directive/selected-schools-directive.html',
        link: function(scope, element, attrs) {
          var schoolIds = [];

          scope.selectedSchools = {
            list: [],
            removeSchool: function(i) {
              SchoolsListService.removeSelectedSchool(i);
            }
          };

          function getSchoolNames() {
            var parms = {
              _fields: 'id,school.name,school.school_url',
              _sort: 'school.name',
              id: schoolIds.join(',')
            };

            if (schoolIds.length) {
              ScorecardDataService.getData(parms)
                .then(function(result){
                  scope.selectedSchools.list = result.results;
                  scope.selectedSchools.totalFound = result.metadata.total;
                  scope.selectedSchools.pageCur = result.metadata.page + 1;
                  scope.selectedSchools.totalPages = Math.ceil(result.metadata.total / result.metadata.per_page);
                })
                .catch(function(result) {
                });
            } else {
              scope.selectedSchools.list = [];
              scope.selectedSchools.totalFound = 0;
              scope.selectedSchools.pageCur = 1;
              scope.selectedSchools.totalPages = 1;
            }

          }

          function getSelectedSchools() {
            schoolIds = SchoolsListService.getSelectedSchools();
            getSchoolNames();
          }

          getSelectedSchools();

          scope.$on('schoolsListChanged', function() {
            getSelectedSchools();
          });
        }
      };
  }]);