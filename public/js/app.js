(function() {
  angular.module('myApp', ['ngRoute']) // inject the router
        .config(function($routeProvider){
          $routeProvider
              .when("/", {
                templateUrl: 'views/index.html',
                controller: "MainController"
              })
              .when('/calc', {
                templateUrl: 'views/calc.html',
                controller: "MainController"
              })
              .otherwise({
                redirectTo:'/'
              });
        });
}());