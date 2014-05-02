angular.module('example-app', ['ftFloater']);

var MainController = function($scope) {
  $scope.startedFloating = function() {
    console.log('float start');
  };

  $scope.stoppedFloating = function() {
    console.log('float stop');
  };
};
