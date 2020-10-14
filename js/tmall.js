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
                rongqili[j].style.opacity=0;
                rongqili[j].style.zIndex=0;
            }
            butli[num].style.background="rgb(255,255,255)"
            rongqili[num].style.opacity=1;
            rongqili[num].style.zIndex=1;
            contai.style.background=rongqili[num].getAttribute("color")
        }
    }
    var total=document.querySelector(".total");
    window.onscroll=function () {
        var stt = document.documentElement.scrollTop;
        if (stt < 300) {
            total.style.top = "-50px";
        }else {
            total.style.top = "0px";
        }
        var dh=document.querySelector(".dh");
        if(stt<500){
            dh.style.opacity="0";
            dh.style.transform="scale(0,0)"
        }else {
            dh.style.opacity="1";
            dh.style.transform="scale(1,1)"
        }
    }

    var dq=document.querySelector(".dq");
    dq.onclick=function (){
        animate(document.documentElement,{scrollTop:0},1000,Tween.Linear)
    }
    var dd=document.querySelectorAll(".dd");
    var ppp=document.querySelectorAll(".ppp");
    for(var i=0;i<ppp.length;i++){
        dd[i].top=ppp[i].offsetTop;
        dd[i].height=ppp[i].offsetTop;
        dd[i].onclick=function (){
            animate(document.documentElement,{scrollTop: this.top},1000,Tween.Linear)
        }
    }
