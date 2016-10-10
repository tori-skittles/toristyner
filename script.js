(function(angular) {

angular.module('SiteApp',['ngRoute', 'ngMaterial', ])
.run( function($rootScope){

})
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'MainController',
    controllerAs: 'vm'
  })
  .when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutController',
    controllerAs: 'vm'
  })
  .when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactController',
    controllerAs: 'vm'
  })

})
.run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {

    });
})

})(window.angular);
