//document.addEventListener("DOMContentLoaded", function () {
function start(){
  var startConsole=document.getElementById("startConsole")
  startConsole.style.display='none';
  startConsole.style.visibility='hidden';


//set position to zero
  var leftPos=0;
  var topPos=0;
  var maxScroll=5000;
  var maxHeight=-300;
  var minHeight=550;

//attach plane img to plane var
  var plane=document.getElementById("plane");
//create variables for fuel
  var fuelDiv=document.getElementById("fuel");
  var fuelGuage=document.getElementById("fuelRemaining");


//plane move forward function

function fullAnimation(){
 function planeMove(){

   leftPos+=4;
   plane.style.left=leftPos+"px";
   fuelDiv.style.left=leftPos+"px";
   if (leftPos==maxScroll){

     plane.style.visibility='hidden';
     explotion.style.visibility='visible';
     $('plane').stop();
     return;

     //window.alert("You ran out of fuel :(");

   }
 }

  planeMove();
   requestAnimationFrame(fullAnimation, plane);
   var fuel = 0;
   if (leftPos<5000){fuel=5000-leftPos}
   else {fuel=0}
   fuelGuage.innerHTML=fuel;
}





//plane up function
function planeDown(){
  topPos+=5;
  plane.style.top=topPos+"px";
  if (topPos<=minHeight){
    return;
   }
  requestAnimationFrame(planeUp, plane);
}

function planeUp(){
  topPos-=5;
  plane.style.top=topPos+"px";
  if (topPos>=maxheight){
    window.alert("You safely Landed the Plane!");
    return;
   }
  requestAnimationFrame(planeUp, plane);
}


//call plane move
fullAnimation();




//keydown function
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
  };
//});


//planeMove function is being recalled after every key press making the speed increase each time. hmmmm
