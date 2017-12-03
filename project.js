document.addEventListener("DOMContentLoaded", function () {

var distance=4;
var dx= Math.random()*600;
var dy= Math.random()*600;
var x=0;
var y=0;

plane=document.getElementById("plane")

window.requestAnimFrame=(function(){
 return window.requestAnimationFrame||
        window.webkitRequestAnimationFrame||
        window.mozRequestAnimationFrame||
        window.oRequestAnimationFrame||
        window.msRequestAnimationFrame||
        function(/*function*/ callback, /*DOMelement*/ element){
          window.setTimeout(callback,1000/60);
        };
      })

 function planeMove(){
   x+= (dx-x) * 0.15;
   y+= (dy-y) * 0.15;
   plane.style.left=x+"px";
   plane.style.top=y+"px";
   requestAnimFrame(planeMove, plane);
}

planeMove();
})
