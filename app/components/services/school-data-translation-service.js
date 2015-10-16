/**
 * Created by briany on 10/15/15.
 */
'use strict';

angular.module('collegeScorecard.schoolDataTranslationService', [])

  .factory('SchoolDataTranslationService', [
    function() {
      var religiousAffiliation = {
        '-1': 'Not reported',
        '-2': 'Not applicable',
        '22': 'American Evangelical Lutheran Church',
        '24': 'African Methodist Episcopal Zion Church',
        '27': 'Assemblies of God Church',
        '28': 'Brethren Church',
        '30': 'Roman Catholic',
        '33': 'Wisconsin Evangelical Lutheran Synod',
        '34': 'Christ and Missionary Alliance Church',
        '35': 'Christian Reformed Church',
        '36': 'Evangelical Congregational Church',
        '37': 'Evangelical Covenant Church of America',
        '38': 'Evangelical Free Church of America',
        '39': 'Evangelical Lutheran Church',
        '40': 'International United Pentecostal Church',
        '41': 'Free Will Baptist Church',
        '42': 'Interdenominational',
        '43': 'Mennonite Brethren Church',
        '44': 'Moravian Church',
        '45': 'North American Baptist',
        '47': 'Pentecostal Holiness Church',
        '48': 'Christian Churches and Churches of Christ',
        '49': 'Reformed Church in America',
        '50': 'Episcopal Church, Reformed',
        '51': 'African Methodist Episcopal',
        '52': 'American Baptist',
        '53': 'American Lutheran',
        '54': 'Baptist',
        '55': 'Christian Methodist Episcopal',
        '57': 'Church of God',
        '58': 'Church of Brethren',
        '59': 'Church of the Nazarene',
        '60': 'Cumberland Presbyterian',
        '61': 'Christian Church (Disciples of Christ)',
        '64': 'Free Methodist',
        '65': 'Friends',
        '66': 'Presbyterian Church (USA)',
        '67': 'Lutheran Church in America',
        '68': 'Lutheran Church - Missouri Synod',
        '69': 'Mennonite Church',
        '71': 'United Methodist',
        '73': 'Protestant Episcopal',
        '74': 'Churches of Christ',
        '75': 'Southern Baptist',
        '76': 'United Church of Christ',
        '77': 'Protestant, not specified',
        '78': 'Multiple Protestant Denomination',
        '79': 'Other Protestant',
        '80': 'Jewish',
        '81': 'Reformed Presbyterian Church',
        '84': 'United Brethren Church',
        '87': 'Missionary Church Inc',
        '88': 'Undenominational',
        '89': 'Wesleyan',
        '91': 'Greek Orthodox',
        '92': 'Russian Orthodox',
        '93': 'Unitarian Universalist',
        '94': 'Latter Day Saints (Mormon Church)',
        '95': 'Seventh Day Adventists',
        '97': 'The Presbyterian Church in America',
        '99': 'Other (none of the above)',
        '100': 'Original Free Will Baptist',
        '101': 'Ecumenical Christian',
        '102': 'Evangelical Christian',
        '103': 'Presbyterian'
        },
        predominantDegreeAwarded = [
          'Not classified',
          'Predominantly certificate degree granting',
          'Predominantly associate degree granting',
          'Predominantly bachelor\'s degree granting',
          'Entirely graduate-degree granting'
        ],
        highestDegreeAwarded = [
          'Non-degree granting',
          'Certificate degree',
          'Associate degree',
          'Bachelor\'s degree',
          'Graduate degree'
        ],
        ownership = [
          'Public',
          'Private nonprofit',
          'Private for-profit'
        ];
      return {
        translateReligiousAffiliation: function (dbValue) {
          return religiousAffiliation[dbValue];
        },
        translatePredominantDegreeAwarded: function (dbValue) {
          return predominantDegreeAwarded[dbValue];
        },
        translateHighestDegreeAwarded: function (dbValue) {
          return highestDegreeAwarded[dbValue];
        },
        translateOwnership: function(dbValue) {
          return ownership[dbValue];
        }
      };
    }]);