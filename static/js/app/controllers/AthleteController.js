// Athlete Controller
// ----------------------------------------------------------------------------

define([ 'angular' ], function( angular ) {

  return [

    '$scope',
    '$animate',
    '$routeParams',
    'athleteSportRefProvider',
    'athleteOlympicProvider',

    function (

      $scope,
      $animate,
      $routeParams,
      athleteSportRefProvider,
      athleteOlympicProvider

    ) {

    $scope.setBackgroundImage(false);

    $scope.firstname   = $routeParams.name.split('_')[0];
    $scope.lastname    = $routeParams.name.split('_')[1];
    $scope.olympicLoading = true;

    var firstname = $scope.firstname,
      lastname    = $scope.lastname;

    // Load from olympics.org
    // ------------------------------------------------------------------------

    athleteOlympicProvider
      .getAthlete(firstname, lastname)
      .then(onOlypicDataLoaded);

    function onOlypicDataLoaded(data) {

      $scope.olympicLoading = false;

      if (! data[0]) {
        return;
      }

      $scope.bio         = data[0].bio;
      $scope.countrycode = data[0].countrycode;
      $scope.gold        = data[0].gold;
      $scope.silver      = data[0].silver;
      $scope.bronze      = data[0].bronze;
      $scope.sport       = data[0].sport;

      $scope.setBackgroundImage(data[0].photo);

    }

    // Load from sports-reference.com
    // ------------------------------------------------------------------------

    $scope.sportsRefLoading = true;

    athleteSportRefProvider
      .getAthlete(firstname, lastname, lastname.substr(0, 2))
      .then(onSportsRefDataLoaded);

    function onSportsRefDataLoaded(data) {

      $scope.sportsRefLoading = false;
      console.log('sportsref', data);

      $scope.gold     = data[0].gold;
      $scope.silver   = data[0].silver;
      $scope.bronze   = data[0].bronze;
      $scope.sport    = data[0].sport;
      $scope.weight   = data[0].weight;
      $scope.height   = data[0].height;
      $scope.gender   = data[0].gender;
      $scope.nickname = data[0].nickname;
      $scope.flag     = data[0].flag;
      $scope.country  = data[0].country;

    }

    $scope.$apply();

  }];

});

