(function($){
    $.fn.extend({
        magnifier:function(){
            var that = this;
            this.each(function(){
                $('.left',this).mousemove(function(evt){
                    var x = evt.offsetX;
                    var y = evt.offsetY;
                    var float = $('.float',this);

                    x = x - float.width()/2;
                    y = y - float.height()/2;

                    if(x<0){
                        x=0;
                    }
                    if(y<0){
                        y=0;
                    }
                    //限制浮动x边界
                    if(x>$(this).width() - float.width()){
                        x = $(this).width() - float.width();
                    }
                    //限制浮动y边界
                    if(y > $(this).height() - float.height()){
                        y = $(this).height() - float.height();
                    }
                    float.css({
                        left:x,
                        top:y
                    });

                    $('.right',that).css({
                        backgroundPosition: x * -2.4 + 'px ' + y * -1.85 + 'px'
                    })
                }).mouseover(function(){
                    $('.left .float, .right',that).show();
                }).mouseout(function(){
                    $('.left .float, .right',that).hide();
                });
            })
        }
    })
})(jQuery);