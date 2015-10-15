'use strict';

angular.module('collegeScorecard.common.active-nav', [])

.directive('activeNav', ['$location', function($location) {
  // This directive adds the active class to navigation elements for highlighting
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var nestedA = element.find('a')[0];
      var path = nestedA.href;

      scope.location = $location;
      scope.$watch('location.absUrl()', function(newPath) {
        if (path === newPath) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      });
    }
  };
}]);
