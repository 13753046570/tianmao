    //轮播图事件
    var butli=document.querySelectorAll(".but li");
    var contai=document.querySelector(".contai");
    var rongqi=document.querySelector(".rongqi");
    var neikuan=document.querySelector(".neikuan");
    var rongqili=document.querySelectorAll(".rongqi li");
    var num=0;
    neikuan.onmouseover=function(){
        clearInterval(t)
    }
    neikuan.onmouseout=function(){
        t=setInterval(move,2000)
    }
    function move(){
        num++;
        if(num>rongqili.length-1){
            num=0;
        }
        for(var i=0;i<rongqili.length;i++){
            rongqili[i].style.opacity=0;
            rongqili[i].style.zIndex=0;
        }
        rongqili[num].style.opacity=1;
        rongqili[num].style.zIndex=1;
        contai.style.background=rongqili[num].getAttribute("color")
        for(var i=0;i<butli.length;i++){
            butli[i].style.background="rgba(0,0,0,.3)"
        }
        butli[num].style.background="rgb(255,255,255)"
    }
    var t=setInterval(move,2000)

    for(var i=0;i<butli.length;i++){
        butli[i].index=i
        butli[i].onmouseover=function(){
            num=this.index
            for(var j=0;j<butli.length;j++){
                butli[j].style.background="rgba(0,0,0,.3)"
            }
            butli[i].style.background="rgb(255,255,255)"
        }
    }