// Page Controller
// ----------------------------------------------------------------------------

define(['angular'], function(angular) {

  return ['$scope', '$http', function($scope, $http) {

    $scope.animatedBackground = true;

    $scope.setBackgroundImage = function(image) {

      if (image) {
        $scope.bodyStyle = { 'backgroundImage': 'url(' + image + ')' };
        $scope.animatedBackground = false;
        return;
      }

      $scope.bodyStyle = '';
      $scope.animatedBackground = true;

    };

    $scope.$apply();

  }];

});

