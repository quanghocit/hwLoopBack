angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('add-person', {
        url: '/add-person',
        templateUrl: 'views/person-form.html',
        controller: 'AddReviewController',
        authenticate: true
      })
      .state('all-person', {
        url: '/all-person',
        templateUrl: 'views/all-person.html',
        controller: 'AllReviewsController'
      })
      .state('edit-person', {
        url: '/edit-person/:id',
        templateUrl: 'views/person-form.html',
        controller: 'EditReviewController',
        authenticate: true
      })
      .state('delete-person', {
        url: '/delete-person/:id',
        controller: 'DeleteReviewController',
        authenticate: true
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      });
    $urlRouterProvider.otherwise('all-person');
  }])
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
    });
  }]);
