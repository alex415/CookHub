var app = angular.module('recipeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'views/templates/main.html',
    controller: 'MainCtrl'
  })
  .when('/api', {
    templateUrl: 'views/templates/main.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}]);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.submit = function () {
    var recipe = $scope.tag;
    $http.post('/api', {tag: recipe})
      .then(function(response) {
        $scope.recipeData = JSON.parse(response.data);
        console.log(response.data);
      });
  };

}]); // end