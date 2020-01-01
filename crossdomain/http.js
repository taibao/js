(function(window,document,undefined){
  'use strict';
  var jsonp = function(url,data,callback){
    //1.挂载回调函数
    var func_name = 'my_json_cb'+Math.random().toString().replace('.','');
    window[func_name] = callback;
    //2.将data转换为url字符串的形式
    //{id:1,name:'zhangsan'} => id=1&name=zhangsan
    var querystring = url.indexOf('?') == -1?'?':'&';
    for(var key in data){
      querystring += key+'='+data[key] + '&';
    }
    //3.处理url地址中的回调参数
    querystring += 'callback='+func_name;
    //url+= callback = qwerfqwe
    //4.创建一个script标签
    var scriptElement = document.createElement('script');
    scriptElement.src = url+querystring;
    //5.将script标签放到页面
    document.body.appendChild(scriptElement);
    //append过后页面会自动对这个地址发送请求，请求完成以后自动执行

  };

  window.$jsonp = jsonp;
})(window,document);
