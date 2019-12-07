function getStyle(el,property){
    if(getComputedStyle){
        return getComputedStyle(el)[property];
    }
    else{
        return getComputedStyle(el)[property];
    }
}
//根据property属性定义物体运动
function animate(el,properties){
    clearInterval(el.timerId);
    el.timerId = setInterval(function(){
        for(var property in properties){
            var current;
            var target =  properties[property];
            if(property==='opacity'){
                current = Math.round(parseFloat(getStyle(el,property))*100);
            }else{
                current = parseInt(getStyle(el,property));
            }
            var speed = (target -current)/30;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            if(property==='opacity'){
                el.style.opacity = (current+speed)/100;
            }else{
                el.style[property] = current+speed+'px';
            }
        }
    },20);
}