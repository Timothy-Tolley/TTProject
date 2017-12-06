document.addEventListener("DOMContentLoaded", function () {

//set position to zero
var leftPos=0;
var topPos=0;

//attach plane img to plane var
var plane=document.getElementById("plane")

//plane move forward function
 function planeMove(){
   leftPos+=5;
   plane.style.left=leftPos+"px";
   requestAnimationFrame(planeMove, plane);
   }
  function screenScroll(){
    leftPos+=5;
    window.scrollLeft(leftPos);
  }
//plane up function
function planeUp(){
  topPos+=5;
  plane.style.top=topPos+"px";
  requestAnimationFrame(planeMove, plane);
}

function planeDown(){
  topPos+=-5;
  plane.style.top=topPos+"px";
  requestAnimationFrame(planeMove, plane);
}

//keydown function
document.onKeydown = function checkKey(e){
  e=e || window.event;
  if(e.keycode===38){
    planeUp();
  }
  else if (e.keycode===40){
    planeDown();
  }
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            planeUp();
            break;
        case 40:
            planeDown();
            break;
    }
};
//call plane move
planeMove();
})
