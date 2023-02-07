!function(e, t, a) {

    function r() {
        for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }
    function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(),
            o(e)
        }
    }
    function o(e) {
        var a = t.createElement("div");
        a.className = "heart",
        s.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: c()
        }),
        t.body.appendChild(a)
    }
    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch(t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function c() {
        return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
    }
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
    function(e) {
        setTimeout(e, 1e3 / 60)
    },
    i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
    n(),
    r()
} (window, document);

var SCKEY_Server="SCT195211TOjCqd93TcS4uFQRwRaeIVhsl";
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0]; 
function send_valine_Server(){ 
    // var text="desp="; 
    // var pagename=document.title;
    // var wz=pagename.indexOf('|'); 
    // var res=pagename.substring(0,wz); 
    // var pageurl=document.URL; 
    // var ptime=new Date(); 
    // var vnick=document.getElementsByClassName("vnick vinput")[0].value; 
    // var vmail=document.getElementsByClassName("vmail vinput")[0].value; 
    // var veditor=document.getElementsByClassName("veditor vinput")[0].value; 
    // var data=text+"昵称: " + vnick +"\n\n"+ "邮箱: " + vmail +"\n\n"+ "当前页面: " + res + "\n\n" + "评论内容: " + veditor + "\n\n" + "跳转链接: " + pageurl + "\n\n" + "评论时间: " + ptime.toLocaleString();
    // var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象 
    // var title1="text=博客评论: " + res + '--' + veditor;
    // httpRequest.open('POST', 'https://sctapi.ftqq.com/'+SCKEY_Server+'.send', true); //第二步：打开连接 
    // httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头） 
    // httpRequest.send(title1+"&"+data);//发送请求 将情头体写在send中 
    console.log("有新评论啦22222"); 
}; 
ValineButton.onclick=send_valine_Server();
