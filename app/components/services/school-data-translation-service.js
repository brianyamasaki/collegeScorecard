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
        ],
        carnegieClass = [
          'Not classified',
          'Associate\'s--Public Rural-serving Small',
          'Associate\'s--Public Rural-serving Medium',
          'Associate\'s--Public Rural-serving Large',
          'Associate\'s--Public Suburban-serving Single Campus',
          'Associate\'s--Public Suburban-serving Multicampus',
          'Associate\'s--Public Urban-serving Single Campus',
          'Associate\'s--Public Urban-serving Multicampus',
          'Associate\'s--Public Special Use',
          'Associate\'s--Private Not-for-profit',
          'Associate\'s--Private For-profit',
          'Associate\'s--Public 2-year colleges under 4-year universities',
          'Associate\'s--Public 4-year Primarily Associate\'s',
          'Associate\'s--Private Not-for-profit 4-year Primarily Associate\'s',
          'Associate\'s--Private For-profit 4-year Primarily Associate\'s',
          'Research Universities (very high research activity)',
          'Research Universities (high research activity)',
          'Doctoral/Research Universities',
          'Master\'s Colleges and Universities (larger programs)',
          'Master\'s Colleges and Universities (medium programs)',
          'Master\'s Colleges and Universities (smaller programs)',
          'Baccalaureate Colleges--Arts & Sciences',
          'Baccalaureate Colleges--Diverse Fields',
          'Baccalaureate/Associate\'s Colleges',
          'Special Focus Institutions--Theological seminaries, Bible colleges, and other faith-related institutions',
          'Special Focus Institutions--Medical schools and medical centers',
          'Special Focus Institutions--Other health professions schools',
          'Special Focus Institutions--Schools of engineering',
          'Special Focus Institutions--Other technology-related schools',
          'Special Focus Institutions--Schools of business and management',
          'Special Focus Institutions--Schools of art, music, and design',
          'Special Focus Institutions--Schools of law',
          'Special Focus Institutions--Other special-focus institutions',
          'Tribal Colleges'
        ],
        ethnicity = {
          'aian': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are American Indian/Alaska Native',
            short: 'American Indian / Alaska Native'
          },
          'aian_2000': {
            long: 'Total share of enrollment of undergraduate students who are American Indian/Alaska Native',
            short: 'American Indian / Alaska Native'
          },
          'aian_prior_2009': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are American Indian/Alaska Native',
            short: 'American Indian / Alaska Native'
          },
          'api_2000': {
            long: 'Total share of enrollment of undergraduate students who are Asian/Pacific Islander',
            short: 'Asian/Pacific Islander'
          },
          'asian': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are Asian',
            short: 'Asian'
          },
          'asian_pacific_islander': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are Asian/Pacific Islander',
            short: 'Asian/Pacific Islander'
          },
          'black': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are black',
            short: 'Black'
          },
          'black_2000': {
            long: 'Total share of enrollment of undergraduate students who are black non-Hispanic',
            short: 'Black (non-Hispanic)'
          },
          'black_non_hispanic': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are black non-Hispanic',
            short: 'Black (non-Hispanic)'
          },
          'hispanic': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are Hispanic',
            short: 'Hispanic'
          },
          'hispanic_2000': {
            long: 'Total share of enrollment of undergraduate students who are Hispanic',
            short: 'Hispanic'
          },
          'hispanic_prior_2009': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are Hispanic',
            short: 'Hispanic'
          },
          'nhpi': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are Native Hawaiian/Pacific Islander',
            short: 'Native Hawaiian/Pacific Islander'
          },
          'non_resident_alien': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are non-resident aliens',
            short: 'Non-resident Alien'
          },
          'two_or_more': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are two or more races',
            short: 'Two or more races'
          },
          'unknown': {
            long: 'Total share of enrollment of undergraduate students whose race is unknown',
            short: 'Unknown'
          },
          'unknown_2000': {
            long: 'Total share of enrollment of undergraduate students whose race is unknown',
            short: 'Unknown'
          },
          'white': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are White',
            short: 'White'
          },
          'white_2000': {
            long: 'Total share of enrollment of undergraduate students who are white non-Hispanic',
            short: 'White (non-Hispanic)'
          },
          'white_non_hispanic': {
            long: 'Total share of enrollment of undergraduate degree-seeking students who are white non-Hispanic',
            short: 'White (non-Hispanic)'
          }
        };
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
        },
        translateCarnegieClassification: function(dbValue) {
          return carnegieClass[dbValue];
        },
        translateRacialEthnicity: function(race_ethnicity) {
          var retArray = [],
            item;
          for (var key in race_ethnicity) {
            if (race_ethnicity[key]) {
              item = ethnicity[key];
              if (item) {
                retArray.push({
                  dbName: key,
                  longString: item.long,
                  shortString: item.short ,
                  value: race_ethnicity[key]
                });
              } else {
                console.error('cannot find ' + key);
              }
            }
          }
          return retArray;
        }
      };
    }]);