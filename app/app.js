var app = angular.module("Mail",['ngMaterial', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/login',{
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  })
  .when('/logout',{
    templateUrl: 'logout/logout.html',
    controller: 'logoutCtrl'
  })
  .when('/home',{
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  })
  .when('/compose',{
    templateUrl: 'compose/comose.html',
    controller: 'composeCtrl'
  })
  .when('/inbox',{
    templateUrl: 'views/inbox.html',
    controller: 'inboxCtrl'
  })
  .when('/sent',{
    templateUrl: 'views/sent.html',
    controller: 'sentCtrl'
  })
  .when('/delete',{
    templateUrl: 'views/delete.html',
    controller: 'deleteCtrl'
  })
  .otherwise({redirectTo: '/login'});
}]);
