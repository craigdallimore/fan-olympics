// Routes
// ----------------------------------------------------------------------------

define(['angular', 'app/app'], function( angular, fanApp ) {

  return fanApp.config(['$routeProvider', function($routeProvider) {

    // Index
    $routeProvider.when('/', {

      templateUrl: 'static/templates/index.html',
      controller:  'IndexController'

    });

    // List of host countries
    $routeProvider.when('/hosts', {

      templateUrl: 'static/templates/hosts.html',
      controller:  'HostController'

    });

    // Year profile
    $routeProvider.when('/year/:year', {

      templateUrl: 'static/templates/year.html',
      controller:  'YearController'

    });

    $routeProvider.otherwise({ redirectTo: '/' });

  }]);

});
