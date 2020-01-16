(function(angular){
  'use strict';
  //创建正在热映模块
  var module =  angular.module(
    'moviecat.movie_detail',
    [
      'ngRoute',
      'moviecat.services.http'
    ]);
 //配置模块的路由
  module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/detail/:id', {
      templateUrl: 'movie_detail/view.html',
      controller: 'MovieDetailCtroller'
    });
  }])

  module.controller('MovieDetailCtroller', [
    '$scope',
    '$route',
    '$routeParams',
    'HttpService',
    'AppConfig',
    function($scope,$route,$routeParams,HttpService,AppConfig) {
      //要显示数据首先要暴露数据
      $scope.movie = {};
      $scope.loading = true;
      var id = $routeParams.id;
      var doubanApiAddress = AppConfig.detailApiAddress+id;
      HttpService.jsonp(
        doubanApiAddress,
        {},
        function(res){
            if(res){
              $scope.movie = res;
              $scope.loading = false;
              $scope.$apply();
            }
      });

  }]);
})(angular);
