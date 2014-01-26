// Hosts Controller
// ----------------------------------------------------------------------------

define([ 'angular' ], function( angular ) {

  return ['$scope', '$animate', 'hostFactory', function($scope, $animate, hostFactory) {

    $scope.loading = true;
    $scope.hosts   = [];

    $scope.setBackgroundImage(false);

    hostFactory.then(function(rows) {

      $scope.loading = false;
      $scope.hosts   = rows;

    });

    $scope.$apply();

  }];

});
