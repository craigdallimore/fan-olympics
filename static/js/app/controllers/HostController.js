// Hosts Controller
// ----------------------------------------------------------------------------

define([

  'angular',
  'importio',
  'app/config'

  ], function( angular, importio, config ) {

  return ['$scope', '$animate', function($scope, $animate) {

    $scope.hosts   = [];
    $scope.loading = true;

    var hostQueryConfig = {

      "connectorGuids": [ config.hostConnectorGuid ],
      "input": { "webpage/url": "http://en.wikipedia.org/wiki/Summer_Olympic_Games" }

    };

    // Gather the hosts data
    importio.query(hostQueryConfig, {

      "data": dataCallback

    });

    // Present the hosts data
    function dataCallback(rows) {

      // Inform the ajax spinner it's time to leave
      $scope.loading = false;

      // Simplify the data to what the template requires
      $scope.hosts = rows.map(withData).filter(isCompleteHostRow);
      $scope.$apply();

    }

    function withData(obj) {

      return obj.data;

    }

    function isCompleteHostRow(obj) {

      return obj.year && obj.city && obj.country;

    }

    $scope.$apply();

  }];

});
