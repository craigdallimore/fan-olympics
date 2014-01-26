// Routes
// ----------------------------------------------------------------------------

define(['angular', 'app/app'], function( angular, fanApp ) {

  return fanApp.config([
    '$routeProvider',
    '$locationProvider', function($routeProvider, $locationProvider) {

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

    // Year (Host) profile
    $routeProvider.when('/year/:year', {

      templateUrl: 'static/templates/year.html',
      controller:  'YearController'

    });

    // Athlete Profile
    $routeProvider.when('/athlete/:name', {

      templateUrl: 'static/templates/athlete.html',
      controller:  'AthleteController'

    });

    $routeProvider.otherwise({ redirectTo: '/' });

  }]);

});
