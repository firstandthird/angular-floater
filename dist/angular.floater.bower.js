/*!
 * angular-floater - Floating element directive
 * v0.0.1
 * https://github.com/firstandthird/angular-floater
 * copyright First+Third 2014
 * MIT License
*/
(function(){
  angular.module('ftFloater', [])
    .directive('floater', ['$parse', function($parse) {
      return {

        link: function(scope, el, attrs) {
          var options = $parse(attrs.floater)() || {};

          if(options.stopElement) {
            options.stopElement = $(options.stopElement);
          }

          $(el).floater(options);
        }
      };
    }]);
}());