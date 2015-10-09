angular.module("poalim-home").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $stateProvider
      .state('projects', {
          url: '/',
          templateUrl: 'client/views/project-list.ng.html',
          controller: 'ProjectListCtrl'
      })
      .state('projectsDetails', {
          url: '/:projectId',
          templateUrl: 'client/views/project-details.ng.html',
          controller: 'ProjectDetailsCtrl',
      });

      $urlRouterProvider.otherwise("/");
  }]);