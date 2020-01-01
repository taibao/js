(function(angular){
  'use strict';
  //创建正在热映模块
  var module =  angular.module(
    'moviecat.movie_list',
    [
      'ngRoute',
      'moviecat.services.http'
    ]);
 //配置模块的路由
  module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/:category/:page', {
      templateUrl: 'movie_list/view.html',
      controller: 'MovieListCtroller'
    });
  }])

  module.controller('MovieListCtroller', [
    '$scope',
    '$route',
    '$routeParams',
    'HttpService',
    function($scope,$route,$routeParams,HttpService) {
    var count = 10;
    var page = parseInt($routeParams.page);
    var start = (page-1)*count;
    //控制器的编写 1：设计暴露数据 2：设计暴露行为
    $scope.subjects = [];
    $scope.message = '';
    $scope.totalCount = 0;
    $scope.totalPages = 0;
    $scope.loading = true; //开始加载
    $scope.currentPage = page;

    var doubanApiAddress = 'https://douban.uieee.com/v2/movie/'+$routeParams.category;
    HttpService.jsonp(
      doubanApiAddress,
      {count:count,start:start},
      function(res){
          if(res){
            $scope.subjects = res.subjects;
            $scope.totalCount = res.total;
            $scope.totalPages = Math.ceil(res.total/count);
            $scope.title = res.title;
            $scope.loading = false;
            $scope.$apply();//$apply的作用就是让指定的表达式重新同步
          }else{
            $scope.message = '获取数据错误';
          }
    });

    //暴露一个更改上一页和下一页的行为
    $scope.go = function(page){
      //传来第几页就显示第几页的数据
      if(page>0&&page<=$scope.totalPages)
        $route.updateParams({ page: page }); //更新路由的参数
    }

    //-----------------------------------使用angular的默认jsonp跨域----------
    //因为xmlhttprequest对象不支持跨域，所以会有跨域问题。
    //测试$http服务
    //在angular中使用jsonp的方式做跨域请求
    //就必须给当前地址加上一个参数callback=JSON_CALLBACK, 但由于angular的返回参数是封装在
    //一个对象中的，而豆瓣的返回函数是全局的，所以豆瓣接口并不支持angular的jsonp回调函数方式
    // $http.get(doubanApiAddress).then(function(res){
    //   //此处代码是在异步请求完成过后才执行（需要等待一段时间）
    //   if(res.status==200){
    //     $scope.subjects = res.data.subjects;
    //     $scope.message = '';
    //   }else{
    //     $scope.message = '获取数据错误，错误信息：'+res.statusText;
    //   }
    // })

  }]);
})(angular)
