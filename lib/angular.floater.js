(function(){
  angular.module('ftFloater', [])
    .directive('floater', ['$parse', function($parse) {
      return {
        scope: {
          floatStart: '&floatBegin',
          floatStop: '&floatEnd'
        },
        link: function(scope, el, attrs) {
          var options = $parse(attrs.floater)() || {};

          if(options.stopElement) {
            options.stopElement = $(options.stopElement);
          }

          $(el)
            .floater(options)
            .on('floatStart', function() {
              scope.$apply(function() {
                scope.floatStart();
              });
            })
            .on('floatStop', function() {
              scope.$apply(function() {
                scope.floatStop();
              });
            });
        }
      };
    }]);
}());
