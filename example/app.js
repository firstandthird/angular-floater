angular.module('example-app', ['ftFloater']);

var MainController = function($scope) {
  $scope.startedFloating = function() {
    $(el).addClass('floating');
    console.log(this, 'float start');
  };

  $scope.stoppedFloating = function() {
    $(this).addClass('floating');
    console.log(this, 'float stop');
  };
};