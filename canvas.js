/**
 * Created by hxsd on 2016/11/17.
 */
window.onload=function () {
    var cvs=document.getElementById("cvs");
    var ctx=cvs.getContext("2d");
    //------上------
    // ctx.beginPath();
    // ctx.moveTo(0,50);
    // ctx.lineTo(200,50);
    // ctx.lineWidth=.2;
    // ctx.strokeStyle="#4e6b97";
    // ctx.closePath();
    // ctx.stroke();
    //-------右-----
    // ctx.beginPath();
    // ctx.moveTo(195,45);
    // ctx.lineTo(195,110);
    // ctx.lineWidth=.2;
    // ctx.strokeStyle="#4e6b97";
    // ctx.closePath();
    // ctx.stroke();
    /* //-------下-----
    ctx.beginPath();
    ctx.moveTo(200,105);
    ctx.lineTo(0,105);
    ctx.lineWidth=.2;
    ctx.strokeStyle="#4e6b97";
    ctx.closePath();
    ctx.stroke();
    //------左------
    ctx.beginPath();
    ctx.moveTo(4,115);
    ctx.lineTo(4,45);
    ctx.lineWidth=.2;
    ctx.strokeStyle="#4e6b97";
    ctx.closePath();
    ctx.stroke();*/
    //up
   return function runline() {
        //清除画板
        ctx.clearRect(0,0,cvs.width,cvs.height);
        (function() {
            var last=1;
            var time=setInterval(function () {
                if(last>200){
                    clearInterval(time);
                }
                ctx.beginPath();
                ctx.moveTo(0,50);
                ctx.lineTo(last,50);
                ctx.lineWidth=.1;
                ctx.strokeStyle="#4e6b97";
                ctx.closePath();
                ctx.stroke();
                last+=3;
            },30)
        })();
        //right
        (function() {
            var last=45;
            var time1=setInterval(function () {
                if(last>110){
                    clearInterval(time1);
                }
                ctx.beginPath();
                ctx.moveTo(195,50);
                ctx.lineTo(195,last);
                ctx.lineWidth=.1;
                ctx.strokeStyle="#4e6b97";
                ctx.closePath();
                ctx.stroke();
                last+=1;
            },30)
        })();
        //down
        (function() {
            var last=195;
            var time1=setInterval(function () {
                if(last<0){
                    clearInterval(time1);
                }
                ctx.beginPath();
                ctx.moveTo(200,105);
                ctx.lineTo(last,105);
                ctx.lineWidth=.1;
                ctx.strokeStyle="#4e6b97";
                ctx.closePath();
                ctx.stroke();
                last-=3;
            },30)
        })();
        //left
        (function() {
            var last=110;
            var time1=setInterval(function () {
                if(last<45){
                    clearInterval(time1);
                }
                ctx.beginPath();
                ctx.moveTo(4,110);
                ctx.lineTo(4,last);
                ctx.lineWidth=.1;
                ctx.strokeStyle="#4e6b97";
                ctx.closePath();
                ctx.stroke();
                last-=1;
            },30)
        })();
    }
   // runline();
}
