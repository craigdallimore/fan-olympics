// Configure app loading
// ----------------------------------------------------------------------------

require.config({

  baseUrl: '../js/',

  paths: {

    angular:        'libs/angular.min',
    angularRoute:   'libs/angular-route.min',
    angularAnimate: 'libs/angular-animate',
    jQuery:         'libs/jquery-2.0.3.min',
    importio:       'http://d7xe6yl2ckrgs.cloudfront.net/js/3/importio'

  },

  shim: {

    'angular':        { 'exports': 'angular' },
    'angularRoute':   ['angular'],
    'angularAnimate': ['angular'],
    'importio':       { 'exports': 'importio', 'deps': ['jQuery'] }

  }

});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([ 'angular', 'app/app', 'app/routes' ], function(angular, app, routes) {

  angular.resumeBootstrap();

});

