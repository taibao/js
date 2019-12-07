//定义立即执行函数
window.onload = function(){
    var prevIndex,nextIndex;
    var len;
    init();
    function init(){
         prevIndex = nextIndex = 0;
         len = document.querySelectorAll('.list .item').length;

         document.querySelector('.prev').onclick= function(){
            slidePrev();
        };

        document.querySelector('.next').onclick = function(){
            slideNext();
        }

    }

    function slidePrev(){
        prevIndex = nextIndex;
        nextIndex--;
        if(nextIndex === -1){
            nextIndex = len-1;
        }
        slideTo(prevIndex,nextIndex);
    }
    function slideNext(){
        prevIndex = nextIndex;
        nextIndex++;
        if(nextIndex === len){
            nextIndex = 0;
        }
        slideTo(prevIndex,nextIndex);
    }

    function slideTo(prev,next){
        var lis = document.querySelectorAll('.list .item');
        animate(lis[prev],{opacity:0});
        animate(lis[next],{opacity:100});
    }
};