document.addEventListener("DOMContentLoaded", function () {

var key=event.which
 function planeMove(event){
//move right on keypress
  if(key=="39"){
    document.getElementById('plane').style[left]=eval(document.getElementById('plane').style[left].value+10);
  }
  if(key="38"){
    document.getElementById('plane').style[top]=eval(document.getElementById('plane').style[top].value+10);
  }
  if(key="40"){
    document.getElementById('plane').style[top]=eval(document.getElementById('plane').style[top].value-10);
  }
};
document.getElementById("plane").addEventListener('keyDown', planeMove());

});
