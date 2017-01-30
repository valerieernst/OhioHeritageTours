angular.module('heritageTours', [
  'heritageTours.home',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeController',
    templateUrl: './home.html'
  })
})