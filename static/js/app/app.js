define([

  'angular',
  'app/controllers',
  'app/services',
  'angularRoute',
  'angularAnimate'

  ], function( angular, controllers, services ) {

  return angular.module('fanApp', [

    'ngRoute',
    'ngAnimate',
    'fanApp.controllers',
    'fanApp.services'

  ]);

});

