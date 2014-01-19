// Year Controller
// ----------------------------------------------------------------------------

define([

  'angular',
  'importio',
  'app/config'

  ], function(angular, importio, config) {

  return ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $scope.year = $routeParams.year;


    var yearQueryConfig = {

      "connectorGuids": [ config.yearConnectorGuid ],
      "input": { "webpage/url": "http://www.databaseolympics.com/country/countrysport.htm?cty=GBR&sp=ARC" }

    };

    // Gather the hosts data
    importio.query(yearQueryConfig, {

      "data": dataCallback

    });

    function dataCallback(data) {

      console.log('year callback', data);

    }

    $scope.$apply();

  }];

});

