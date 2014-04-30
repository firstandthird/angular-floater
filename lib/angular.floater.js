(function(){
  angular.module('ftFloater', [])
    .directive('floater', ['$parse', function($parse) {
      return {
        link: function(scope, el, attrs) {
          var options = $parse(attrs.floater)() || {};

          if(options.stopElement) {
            options.stopElement = $(options.stopElement);
          }

          $(el).floater(options).on('floatStart', function() {
            scope.$apply(attrs.floatStart);
          })
          .on('floatStop', function() {
            scope.$apply(attrs.floatStop);
          });
        }
      };
    }]);
}());