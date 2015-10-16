'use strict';

angular.module('collegeScorecard.details', ['ngRoute', 'collegeScorecard.scorecardDataService', 'collegeScorecard.schoolsListService'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/details', {
      templateUrl: 'components/details/details.html',
      controller: 'DetailsCtrl'
    });
  }])
  .controller('DetailsCtrl', ['$scope', 'ScorecardDataService', '$log', 'SchoolsListService', 'SchoolDataTranslationService',
    function(scope, ScorecardDataService, $log, SchoolsListService, SchoolDataTranslationService) {
      var schoolIds = [],
        yearStart = 1996,
        yearEnd = 2015;

      scope.schools = {};
      scope.tabs = [];
      scope.tabSelected = 0;


      function getSchoolNames() {
        var parms = {
          _fields: 'id,school.name,school.school_url',
          _sort: 'school.name',
          id: schoolIds.join(',')
        };

        if (schoolIds.length) {
          ScorecardDataService.getData(parms)
            .then(function(result){
              scope.schools.list = result.results;
              scope.schools.totalFound = result.metadata.total;
              scope.schools.pageCur = result.metadata.page + 1;
              scope.schools.totalPages = Math.ceil(result.metadata.total / result.metadata.per_page);
              getDetails();
            })
            .catch(function(result) {
            });
        } else {
          scope.schools.list = [];
          scope.schools.totalFound = 0;
          scope.schools.pageCur = 1;
          scope.schools.totalPages = 1;
        }
      }

      function getSelectedSchools() {
        schoolIds = SchoolsListService.getSelectedSchools();
        getSchoolNames();
      }

      function fillContent() {
        var overviewData = scope.tabs[0],
          annualData = scope.tabs[1],
          indexLatestYear = annualData.data.length - 1,
          latestYear = annualData.data[indexLatestYear].year;
        scope.overviewContent = {
          data: overviewData.data,
          latestAnnualData: latestYear,
          numberOfStudents: annualData.data[indexLatestYear].student.size,
          religious_affiliation: SchoolDataTranslationService.translateReligiousAffiliation(overviewData.data.religious_affiliation),
          ownership: SchoolDataTranslationService.translateOwnership(overviewData.data.ownership),
          predominantDegreeAwarded: SchoolDataTranslationService.translatePredominantDegreeAwarded(overviewData.data.degrees_awarded.predominant),
          highestDegreeAwarded: SchoolDataTranslationService.translateHighestDegreeAwarded(overviewData.data.degrees_awarded.highest)
        };
      }

      function getDetails() {
        var parms = {
          id: scope.schools.list[0].id
        };

        if (scope.schools.list.length === 1) {
          ScorecardDataService.getData(parms)
            .then(function(result){
              var strYear,
                dataYear;
              var tabYearly = {
                name: 'Annual',
                data: []
              };
              scope.schoolDetails = result.results[0];
              scope.tabs.push({
                name: 'Overview',
                data: scope.schoolDetails.school});
              for (var i = yearStart; i <= yearEnd; i++) {
                strYear = i.toString();
                dataYear = scope.schoolDetails[strYear];
                if (dataYear) {
                  dataYear.year = strYear;
                  tabYearly.data.push(dataYear);
                }
              }
              scope.tabs.push(tabYearly);
              scope.tabs.push({
                name: 'Location',
                data: scope.schoolDetails.location
              });
              fillContent();
            })
            .catch(function(result) {
              scope.schoolDetails = [];
            });

        }
      }

      scope.tabData = function(iTab, str1, str2, str3) {
        var temp;
        if (scope.tabs.length > iTab) {
          temp = scope.tabs[iTab].data;
          if (str1) {
            temp = temp[str1];
            if (str2) {
              temp = temp[str2];
              if (str3) {
                temp = temp[str3];
              }
            }
          }
          return temp;
        }
        else {
          return;
        }
      };

      scope.clickTab = function(i) {
        scope.tabSelected = i;
      };

      scope.classForTab = function(i) {
        return i === scope.tabSelected ? 'active' : '';
      };

      getSelectedSchools();
    }]);
