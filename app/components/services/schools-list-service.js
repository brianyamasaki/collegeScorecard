/**
 * Created by briany on 10/9/15.
 */
'use strict';

angular.module('collegeScorecard.schoolsListService', [])

  .factory('SchoolsListService', ['$rootScope', function($rootScope) {
    var schools = [],
      idList = [];

    function sendChangedMessage () {
      $rootScope.$broadcast('schoolsListChanged');
    }

    return {
      addSchools: function (schoolList) {
        schoolList.forEach(function(schoolT){
          if (_.find(schools, function(school){return school.id === schoolT.id;})) {
            // school found
          } else {
            schools.push(schoolT);
          }
        });
      },
      removeSchools: function (schoolList) {
        schoolList.forEach(function(schoolT) {
          var imatch = _.findIndex(schools, function(school){return school.id === schoolT.id;});
          if (imatch !== -1) {
            schools.slice(imatch, 1);
          }
        });
      },
      toggleSelectedSchool: function(id) {
        var idFound = idList.indexOf(id);
        if (idFound !== -1) {
          idList.splice(idFound, 1);
        } else {
          idList.push(id);
        }
        sendChangedMessage();
      },
      addSelectedSchool: function (id) {
        if (idList.indexOf(id) === -1) {
          idList.push(id);
          sendChangedMessage();
        }
      },
      removeSelectedSchool: function (id) {
        var idFound = idList.indexOf(id);
        if (idFound !== -1) {
          idList.splice(idFound, 1);
          sendChangedMessage();
        }
      },
      isSelectedSchool: function (id) {
        var idFound = idList.indexOf(id);
        return idFound !== -1;
      },
      getSelectedSchools: function() {
        return angular.copy(idList).sort();
      }
    };
  }]);