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

})

})(window.angular);
