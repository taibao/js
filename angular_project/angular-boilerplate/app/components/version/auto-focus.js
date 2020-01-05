(function(angular){
  angular.module('moviecat.directives.auto_focus',[])
  .directive('autoFocus',['$location',function($location){
    //Runs during compile
    var path =  $location.path();
    return {
      restrict:'A', //E=Element,A=Attribute,C=Class
      link:function($scope,iElm,iAttrs,controller){
        var aLink = iElm.children().attr('href');
        var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');// /coming_soon
        if(path.startsWith(type))
        {
          //访问的是当前连接
          iElm.addClass('active');
        }
        iElm.on('click',function(){
          iElm.parent().children().removeClass('active');
          iElm.addClass('active');
        });
      }
    }
  }])

})(angular);
