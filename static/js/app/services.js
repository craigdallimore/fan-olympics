define([ 'angular', 'importio', 'app/config' ], function( angular, importio, config ) {

  importio.init({

    'auth': {
      'userGuid': config.userGuid,
      'apiKey':   config.apiKey
    },

    'host': 'import.io'

  });

  return angular.module('fanApp.services', [])

    // IOC Codes
    // ------------------------------------------------------------------------

    .factory('iocCodeFactory', function($q) {

      var deferred = $q.defer(),

        params = {

          'connectorGuids': [ config.iocCountryCodeConnectorGuid ],
          'input': { 'webpage/url': 'http://en.wikipedia.org/wiki/List_of_IOC_country_codes' }

        },

        callback = {

          'data': function(data) {
            deferred.resolve(data.map(withData));
          }

        };

      importio.query(params, callback);

      return deferred.promise;

    })

    // Host Countries
    // ------------------------------------------------------------------------

    .factory('hostFactory', function($q) {

      var deferred = $q.defer(),

        params = {

          'connectorGuids': [ config.hostConnectorGuid ],
          'input': { 'webpage/url': 'http://en.wikipedia.org/wiki/Summer_Olympic_Games' }

        },

        callback = {

          'data': function(data) {
            deferred.resolve(data.map(withData).filter(isCompleteHostRow).reverse());
          }

        };

      importio.query(params, callback);

      return deferred.promise;

    })

    // Medal Winners by Year
    // ------------------------------------------------------------------------

    .provider('medalWinnersProvider', function() {

      this.$get = function($q) {

        return {
          getMedals: function(year) {

            var deferred = $q.defer();
            var params = {

              'connectorGuids': [ config.yearMedalCountConnectorGuid ],
              'input':          { 'year': year }

            },

            callback = {

              'data': function(data) {
                deferred.resolve(data.map(withData));
              }

            };

            importio.query(params, callback);
            return deferred.promise;

          }

        };
      };

    })

    // City Photo by city and year
    // ------------------------------------------------------------------------

    .provider('cityPhotoProvider', function() {

      this.$get = function($q) {


        return {
          getCityPhoto: function(city, year) {

            var deferred = $q.defer();
            var params = {

              'connectorGuids': [ config.yearCityPhotoConnectorGuid ],
              'input':          { 'city': city, 'year': year }

            },

            callback = {

              'data': function(data) {
                deferred.resolve(data.map(withData));
              }

            };

            importio.query(params, callback);
            return deferred.promise;

          }

        };
      };

    })

    // City Wiki by city and year
    // ------------------------------------------------------------------------

    .provider('cityWikiProvider', function() {

      this.$get = function($q) {


        return {
          getCityWiki: function(year) {

            var deferred = $q.defer();
            var params = {

              'connectorGuids': [ config.yearWikiConnecterGuid ],
              'input':          { 'year': year }

            },

            callback = {

              'data': function(data) {
                deferred.resolve(data.map(withData));
              }

            };

            importio.query(params, callback);
            return deferred.promise;

          }

        };
      };

    })

    // Athlete by Name (olympic.org)
    // ------------------------------------------------------------------------

    .provider('athleteOlympicProvider', function() {

      this.$get = function($q) {

        return {
          getAthlete: function(firstname, lastname) {

            var deferred = $q.defer();
            var params = {

              'connectorGuids': [ config.athleteOlympicConnecterGuid ],
              'input':          { 'name': firstname + '-' + lastname }

            },

            callback = {

              'data': function(data) {
                deferred.resolve(data.map(withData));
              }

            };

            importio.query(params, callback);
            return deferred.promise;

          }

        };
      };

    })

    // Athlete by Name (sports-reference.com)
    // ------------------------------------------------------------------------

    .provider('athleteSportRefProvider', function() {

      this.$get = function($q) {

        return {
          getAthlete: function(firstname, lastname, prefix) {

            var deferred = $q.defer();
            var params = {

              'connectorGuids': [ config.athleteSportRefConnecterGuid ],
              'input':          { 'firstname': firstname, 'lastname': lastname, 'prefix': prefix }

            },

            callback = {

              'data': function(data) {
                deferred.resolve(data.map(withData));
              }

            };

            importio.query(params, callback);
            return deferred.promise;

          }

        };
      };

    });

    // Helpers
    // ------------------------------------------------------------------------

    function withData(obj) {

      return obj.data;

    }

    function isCompleteHostRow(obj) {

      return obj.year && obj.city && obj.country;

    }


});

