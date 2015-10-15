/**
 * Created by briany on 10/9/15.
 */
'use strict';

angular.module('collegeScorecard.schools', ['ngRoute', 'collegeScorecard.scorecardDataService', 'collegeScorecard.schoolsListService'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/find-schools', {
      templateUrl: 'components/schools/schools.html',
      controller: 'SchoolsCtrl'
    });
  }])

  .controller('SchoolsCtrl', ['$scope','ScorecardDataService', '$log', 'SchoolsListService', function(scope, ScorecardDataService, $log, SchoolsListService) {
    var params = {
      _fields: 'id,school.name',
      _zip: '98033',
      _distance: '30mi'
    },
      stateDropdown = [
        {
          label: 'Alabama',
          value: 'AL'
        },
        {
          label: 'Alaska',
          value: 'AK'
        },
        {
          label: 'Arizona',
          value: 'AZ'
        },
        {
          label: 'Arkansas',
          value: 'AR'
        },
        {
          label: 'California',
          value: 'CA'
        },
        {
          label: 'Colorado',
          value: 'CO'
        },
        {
          label: 'Connecticut',
          value: 'CT'
        },
        {
          label: 'Delaware',
          value: 'DE'
        },
        {
          label: 'Florida',
          value: 'FL'
        },
        {
          label: 'Georgia',
          value: 'GA'
        },
        {
          label: 'Hawaii',
          value: 'HI'
        },
        {
          label: 'Idaho',
          value: 'ID'
        },
        {
          label: 'Illinois',
          value: 'IL'
        },
        {
          label: 'Indiana',
          value: 'IN'
        },
        {
          label: 'Iowa',
          value: 'IA'
        },
        {
          label: 'Kansas',
          value: 'KS'
        },
        {
          label: 'Kentucky',
          value: 'KY'
        },
        {
          label: 'Louisiana',
          value: 'LA'
        },
        {
          label: 'Maine',
          value: 'ME'
        },
        {
          label: 'Maryland',
          value: 'MD'
        },
        {
          label: 'Massachusetts',
          value: 'MA'
        },
        {
          label: 'Michigan',
          value: 'MI'
        },
        {
          label: 'Minnesota',
          value: 'MN'
        },
        {
          label: 'Mississippi',
          value: 'MS'
        },
        {
          label: 'Missouri',
          value: 'MO'
        },
        {
          label: 'Montana',
          value: 'MT'
        },
        {
          label: 'Nebraska',
          value: 'NE'
        },
        {
          label: 'Nevada',
          value: 'NV'
        },
        {
          label: 'New Hampshire',
          value: 'NH'
        },
        {
          label: 'New Jersey',
          value: 'NJ'
        },
        {
          label: 'New Mexico',
          value: 'NM'
        },
        {
          label: 'New York',
          value: 'NY'
        },
        {
          label: 'North Carolina',
          value: 'NC'
        },
        {
          label: 'North Dakota',
          value: 'ND'
        },
        {
          label: 'Ohio',
          value: 'OH'
        },
        {
          label: 'Oklahoma',
          value: 'OK'
        },
        {
          label: 'Oregon',
          value: 'OR'
        },
        {
          label: 'Pennsylvania',
          value: 'PA'
        },
        {
          label: 'Rhode Island',
          value: 'RI'
        },
        {
          label: 'South Carolina',
          value: 'SC'
        },
        {
          label: 'South Dakota',
          value: 'SD'
        },
        {
          label: 'Tennessee',
          value: 'TN'
        },
        {
          label: 'Texas',
          value: 'TX'
        },
        {
          label: 'Utah',
          value: 'UT'
        },
        {
          label: 'Vermont',
          value: 'VT'
        },
        {
          label: 'Virginia',
          value: 'VA'
        },
        {
          label: 'Washington',
          value: 'WA'
        },
        {
          label: 'West Virginia',
          value: 'WV'
        },
        {
          label: 'Wisconsin',
          value: 'WI'
        },
        {
          label: 'Wyoming',
          value: 'WY'
        },
        {
          label: 'American Samoa',
          value: 'AS'
        },
        {
          label: 'District of Columbia',
          value: 'DC'
        },
        {
          label: 'Federated States of Micronesia',
          value: 'FM'
        },
        {
          label: 'Guam',
          value: 'GU'
        },
        {
          label: 'Marshall Islands',
          value: 'MH'
        },
        {
          label: 'Northern Mariana Islands',
          value: 'MP'
        },
        {
          label: 'Palau',
          value: 'PW'
        },
        {
          label: 'Puerto Rico',
          value: 'PR'
        },
        {
          label: 'Virgin Islands',
          value: 'VI'
        }
      ];
    scope.searchRules = [
      {
        id: 'school-name',
        active: false,
        fields: [
          {
            label: 'School Name',
            fieldType: 'text',
            value: '',
            dbLabel: 'school.name'
          }
        ]
      },
      {
        id: 'city',
        active: true,
        fields: [
          {
            label: 'City',
            fieldType: 'text',
            value: 'Seattle',
            dbLabel: 'school.city',
            fieldToAdd: 'school.city'
          }
        ]
      },
      {
        id: 'state',
        active: false,
        fields: [
          {
            label: 'State',
            fieldType: 'select',
            value: 'WA',
            options: stateDropdown,
            dbLabel: 'school.state',
            fieldToAdd: 'school.state'
          }
        ]
      },
      {
        id: 'zip',
        active: false,
        fields: [
          {
            label: 'Zip Code',
            fieldType: 'text',
            value: '98033',
            dbLabel: '_zip'
          },
          {
            label: 'Distance',
            fieldType: 'number',
            value: 30,
            dbLabel: '_distance'
          }
        ]
      },
      {
        id: 'population',
        active: false,
        fields: [
          {
            label: '2013 population',
            range: true,
            fieldType: 'text',
            valueMin: 1000,
            valueMax: '',
            dbLabel: '2013.student.size',
            fieldToAdd: '2013.student.size'
          }
        ]
      }
    ];
    scope.schools = [];
    scope.pageList = [];
    scope.perPageValues = [20, 50, 100];
    scope.sortList = [
      {
        label: 'Name',
        dbLabel: 'school.name'
      },
      {
        label: 'Size',
        dbLabel: '2013.student.size'
      }
    ];
    scope.sort = 'school.name';
    scope.search = {
      pageCur: 1,
      perPageCur: 20,
      totalFound: 0
    };

    scope.setupSearchParams = function () {
      var params = {
        _per_page: scope.search.perPageCur,
        _page: scope.search.pageCur - 1,
        _sort: scope.sort
        },
        fieldArray = [
          'id',
          'school.name',
          '2013.student.size',
          'school.school_url'
        ];
      scope.searchRules.forEach(function(rule) {
        if (rule.active) {
          rule.fields.forEach(function(field) {
            if (field.range) {
              params[field.dbLabel + '__range'] = field.valueMin + '..' + field.valueMax;
            } else {
              params[field.dbLabel] = field.value;
            }
            if (field.fieldToAdd) {
              fieldArray.push(field.fieldToAdd);
            }
          });
        }
      });
      params._fields = fieldArray.join(',');
      return params;
    };

    scope.doSearch = function () {

      ScorecardDataService.getData(scope.setupSearchParams())
        .then(function(result){
          scope.schools = result.results;
          scope.search.totalFound = result.metadata.total;
          scope.search.pageCur = result.metadata.page + 1;
          scope.search.totalPages = Math.ceil(result.metadata.total / result.metadata.per_page);
          $log.log(result);
        })
        .catch(function(result) {
          $log.log(result);
        });

    };

    scope.initSchools = function() {
      scope.schools.forEach(function(school) {
        if (SchoolsListService.isSelectedSchool(school.id)) {
          school.selected = true;
        }
      });
    };

    scope.clickSchoolCheckbox = function (index) {
      SchoolsListService.toggleSelectedSchool(scope.schools[index].id);
      console.log(SchoolsListService.getSelectedSchools().toString());
    };

    scope.$watch('search.perPageCur', function(newValue, oldValue){
      if (newValue !== oldValue) {
        scope.doSearch();
      }
    });

    scope.$watch('search.pageCur', function(newValue, oldvalue) {
      if (newValue !== oldvalue) {
        scope.doSearch();
      }
    });

    scope.$watch('sort', function(newValue, oldValue) {
      if (newValue !== oldValue)  {
        scope.doSearch();
      }
    });
  }]);