'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_detail',
  'moviecat.movie_list',
  'moviecat.directives.auto_focus',
])
//为模块定义常量
.constant('AppConfig',{
  pageSize:10,
  listApiAddress:'https://douban.uieee.com/v2/movie/',
  detailApiAddress:'https://douban.uieee.com/v2/movie/subject/',
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
.controller('SearchController',[
  '$scope',
  '$route',
  'AppConfig',
  function($scope,$route,AppConfig){
  $scope.input = ''; //取文本框中的输入
  $scope.search = function(){
    $route.updateParams({q:$scope.input});
  }
}]);

//
// .controller('NavController',[
//   '$scope',
//   '$location',
//   function($scope,$location){
//     $scope.$location = $location;
//     $scope.$watch('$location.path()',function(now){
//       var path = now;
//       if(path.startsWith('/top250')){
//         $scope.type = 'top250';
//       }else if(path.startsWith('/in_theaters')){
//         $scope.type = 'in_theaters';
//       }else if(path.startsWith('/coming_soon')){
//         $scope.type = 'coming_soon';
//       }
//     });
// }]);
