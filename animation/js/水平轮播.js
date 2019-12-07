//定义立即执行函数
window.onload = function(){
    var currIndex;
    var prevIndex,nextIndex;
    var len;
    var id;
    init();
    function init(){
        currIndex  = 1;
        var li_1 = document.querySelector(".slider .list .item:first-of-type");
        var copy_1 = li_1.cloneNode(true);
        var li_last = document.querySelector('.slider .list .item:last-of-type');
        var copy_last = li_last.cloneNode(true);

        var list = document.querySelector(".slider .list");
        list.appendChild(copy_1);
        list.insertBefore(copy_last,li_1);

        lis = document.querySelectorAll('.list .item');
        liWidth = lis[0].offsetWidth;
        len = lis.length;

        list.style.width = liWidth*len+'px'; //动态设置滚动框宽度
        list.style.left = -liWidth + 'px';

        document.querySelector('.prev').onclick = function(){
            slidePrev();
        }

        document.querySelector('.next').onclick = function(){
            slideNext();
        }


        prevIndex = nextIndex = 0;
         len = document.querySelectorAll('.list .item').length;

         document.querySelector('.prev').onclick= function(){
            slidePrev();
        };

        document.querySelector('.next').onclick = function(){
            slideNext();
        }

        var bullets = dcument.querySelectorAll('.slider .pagination .bullet');
        for(var i =0 ;i<bullets.length;i++)
        {
            bullets[i].index = i;
            bullets[i].onclick = function(){
                currIndex = this.index + 1;
                slideTo(currIndex);
            }
        }

        document.querySelector('.slider').onmouseover = function(){
            stop();
        }
        document.querySelector('.slider').onmouseout = function(){
            auto();
        }

    }

    function slidePrev(){
        currIndex++;
        slideTo(currIndex);
    }

    function slideNext(){
        currIndex--;
        slideTo(currIndex);
    }

    function slideTo(index){
        var list = document.querySelector('.slider .list');

        if(index === len){
            currIndex = index = 2;
            list.style.left = -liWidth + 'px'; //移到第一张
        }

        if(index === -1)
        {
            currIndex = index = len - 3;
            list.style.left = -(len -2)*liWidth + 'px'; //移到第一张
        }

        var focusIndex;
        var bullets = document.querySelectorAll('.pagination .bullet');

        if(index === 0)
        {
            focusIndex = bullets.length - 1;
        }
        else if(index === len - 1){
            focusIndex = 0;
        }else{
            focusIndex = index - 1;
        }

        document.querySelector('.focus').className = 'bullet';
        bullets[focusIndex].className = 'bullet focus';

        var left = -index * liWidth;
        animate(list,{
            left:left
        })
    }

    function auto(){
        clearInterval(id);
        id = setInterval(function(){
            slideNext(); //自动到下一张
        },2000)
    }

    function stop(){
        clearInterval(id);
    }
};