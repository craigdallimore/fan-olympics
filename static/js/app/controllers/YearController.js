// Year Controller
// ----------------------------------------------------------------------------

define([ 'angular' ], function(angular) {

  return [

    '$scope',
    '$routeParams',
    'cityPhotoProvider',
    'cityWikiProvider',
    'medalWinnersProvider',

  function (

    $scope,
    $routeParams,
    cityPhotoProvider,
    cityWikiProvider,
    medalWinnersProvider

  ) {

    var year    = $routeParams.year;
    $scope.year = year;

    // Athletes
    // ------------------------------------------------------------------------

    $scope.athletesLoading = true;
    $scope.athletes        = [];

    function onAthletesLoaded(data) {

      $scope.athletesLoading = false;
      $scope.athletes        = data;

    }

    medalWinnersProvider.getMedals(year).then(onAthletesLoaded);

    // Host photo
    // ------------------------------------------------------------------------

    $scope.photoLoading = true;
    $scope.photo        = {};

    function onPhotoLoaded(data) {

      $scope.photoLoading = false;
      $scope.photo       = data[0];

      // Set body style on parent scope
      if(data[0] && data[0].background) {
        $scope.setBackgroundImage(data[0].background);
      }

    }

    // Host wiki
    // ------------------------------------------------------------------------

    $scope.wikiLoading = true;
    $scope.wiki        = '';
    $scope.logo        = '';
    $scope.city        = '';
    $scope.country     = '';

    function onWikiLoaded(data) {

      var city       = data[0].city,
          country    = data[0].country,
          dashedCity = city.toLowerCase().split(' ').join('-');

      $scope.wikiLoading = false;
      $scope.wiki        = data[0].intro;
      $scope.logo        = data[0].logo;
      $scope.city        = city;
      $scope.country     = country;

      cityPhotoProvider.getCityPhoto(dashedCity, year).then(onPhotoLoaded);

    }

    cityWikiProvider.getCityWiki(year).then(onWikiLoaded);

    $scope.$apply();

  }];

});

