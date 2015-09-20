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


  // delete $httpProvider.defaults.headers.common["X-Requested-With"];
  // delete $httpProvider.defaults.headers.post['Content-type'];
}]);



app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.submit = function () {
    // $scope.tag = '';
    var tag = $scope.tag;


    $http.post('/api', {tag: tag})
      .then(function(response) {
        console.log(response.data);
      });

    // $http({method: 'POST', url: '/api', headers: {
    // "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }, data: {tag: hello}}).
    //   success(function(data, status, headers, config) { 
    //     alert(data);
    //   });
  };

}]); // end


