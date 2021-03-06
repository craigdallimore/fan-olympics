define([ 'angular' ], function( angular ) {

  return angular.module('fanApp.controllers', [])

    .controller('PageController', ['$scope', '$injector', function($scope, $injector) {

      require(['app/controllers/PageController'], function(pageController) {

        $injector.invoke(pageController, this, { '$scope': $scope });

      });

    }])

    .controller('HostController', ['$scope', '$injector', function($scope, $injector) {

      require(['app/controllers/HostController'], function(hostController) {

        $injector.invoke(hostController, this, { '$scope': $scope });

      });

    }])

    .controller('YearController', ['$scope', '$injector', function($scope, $injector) {

      require(['app/controllers/YearController'], function(yearController) {

        $injector.invoke(yearController, this, { '$scope': $scope });

      });

    }])

    .controller('AthleteController', ['$scope', '$injector', function($scope, $injector) {

      require(['app/controllers/AthleteController'], function(athleteController) {

        $injector.invoke(athleteController, this, { '$scope': $scope });

      });

    }])

    .controller('IndexController', ['$scope', '$injector', function($scope, $injector) {

      require(['app/controllers/IndexController'], function(indexController) {

        $injector.invoke(indexController, this, { '$scope': $scope });

      });

    }]);

});
