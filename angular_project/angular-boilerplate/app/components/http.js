'use strict';

(function(angular){
  //由于默认angular提供的异步请求对象不支持自定义回调函数名
  //分配angluar随即分配的回调名称不被豆瓣支持
  var http =  angular.module('moviecat.services.http',[]);
  http.service('HttpService',['$window','$document',function($window,$document){

    //url:https://douban.uieee.com/v2/movie/in_theaters
    this.jsonp = function(url,data,callback){
      //1.将data转换为url字符串的形式
      //{id:1,name:'zhangsan'} => id=1&name=zhangsan
      var querystring = url.indexOf('?') == -1?'?':'&';
      for(var key in data){
        querystring += key+'='+data[key] + '&';
      }
      var func_name = 'my_json_cb'+Math.random().toString().replace('.','');
      //2.处理url地址中的回调参数
      querystring += 'callback='+func_name;
      //url+= callback = qwerfqwe
      //3.创建一个script标签
      var scriptElement = $document[0].createElement('script');
      scriptElement.src = url+querystring;
      //4.挂载回调函数
      $window[func_name] = function(data){
        callback(data);
        $document[0].body.removeChild(scriptElement);
      };
      //5.将script标签放到页面
      $document[0].body.appendChild(scriptElement);
      //append过后页面会自动对这个地址发送请求，请求完成以后自动执行
    };

  }]);
})(angular);
