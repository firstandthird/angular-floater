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

          // options.source = [];
          // options.sourceKey = scope.sourceKey;
          // options.allowOthers = scope.allowOthers;

          // if (attrs.query) {
          //   options.query = function(query, callback) {
          //     return scope.query({ query: query, callback: callback });
          //   };
          // } else {
          //   options.source = scope.source;
          // }

          // if (attrs.formatSuggestion) {
          //   options.formatSuggestion = function(suggestion, value) {
          //     return scope.formatSuggestion({ suggestion: suggestion, value: value });
          //   };
          // }

          // var completeEl = $(el).complete(options);

          // completeEl.on('complete:select', function(event, value){
          //   if (!value) {
          //     return;
          //   }

          //   scope.$apply(function(){
          //     scope.selectedItem = value;
          //   });

          // });
        }
      };
    }]);
}());