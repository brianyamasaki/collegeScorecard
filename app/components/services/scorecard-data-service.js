/**
 * Created by briany on 10/9/15.
 */
'use strict';

angular.module('collegeScorecard.scorecardDataService', [])

  .factory('ScorecardDataService', ['$q', '$http',
    function($q, $http) {
      var dataUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json',
        paramsDft = {
          api_key : 'j3Qq2mweEEbU6ZYsmP1C3Fjga8zujhWywMHq1yuX'
        };
      return {
        getData: function (params) {
          var dfr = $q.defer();

          $http({
            method: 'GET',
            url: dataUrl,
            params: angular.extend(params, paramsDft)
          })
            .success(function(data, status, headers, config) {
              dfr.resolve(data);
            })
            .error(function(data, status) {
              dfr.reject(data);
            });
          return dfr.promise;

        }
      };
  }]);