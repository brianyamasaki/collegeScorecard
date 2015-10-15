/**
 * Created by briany on 10/9/15.
 */
'use strict';
angular.module('collegeScorecard.footer', [])

  .directive('pageFooter', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/footer/footer.html'
    };
  }]);