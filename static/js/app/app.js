define([

  'angular',
  'importio',
  'app/config',
  'app/controllers',
  'angularRoute',
  'angularAnimate'

  ], function( angular, importio, config, controllers ) {

  // Configure importio
  importio.init({

    "auth": {

      "userGuid": config.userGuid,
      "apiKey":   config.apiKey

    },

    "host": "import.io"

  });

  return angular.module('fanApp', [

    'ngRoute',
    'fanApp.controllers'

  ]);

});

