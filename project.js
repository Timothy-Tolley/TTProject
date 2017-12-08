//document.addEventListener("DOMContentLoaded", function () {
function start(){
  var startConsole=document.getElementById("startConsole")
  startConsole.style.display='none';
  startConsole.style.visibility='hidden';
  title.style.display='none';
  title.style.visibility='hidden';

//page Scroll
function pageScroll(){
   window.scrollBy(3,0);
   scrolldelay = setTimeout(pageScroll,10);}

   var stop=false;

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
// get extra images
  var explotion=document.getElementById("explotion");
  var rescued=document.getElementById("rescued");
  var congrats=document.getElementById('congrats');
  var failure=document.getElementById('failure');

//plane move forward function

 function planeMove(){
   leftPos+=5;
   plane.style.left=leftPos+"px";
   fuelDiv.style.left=leftPos+"px";
   if (leftPos==maxScroll){
     plane.style.visibility='hidden';
     explotion.style.visibility='visible';
     failure.style.visibility="visible";
     fuelDiv.style.visibility="hidden";
     stop=true;
     cancelAnimationFrame(planeMove)
     return;
     }
   var fuel = 0;
   if (leftPos<=5000){fuel=5000-leftPos}
   else {fuel=0}
   fuelGuage.innerHTML=fuel;

   if (topPos>=minHeight){
      rescued.style.top=topPos+"px";
      rescued.style.left=plane.style.left;
      rescued.style.visibility="visible";
      plane.style.visibility="hidden";
      fuelDiv.style.visibility="hidden";
      congrats.style.visibility="visible";
      congrats.style.left=plane.style.left;
      stop=true;
      cancelAnimationFrame(planeMove);
      return;
   }

   requestAnimationFrame(planeMove,plane);


//plane up function
function planeDown(){
  topPos+=5;
  plane.style.top=topPos+"px";
   }


function planeUp(){
  topPos-=5;
  plane.style.top=topPos+"px";
  if (topPos<=maxHeight){
    return;
   }
}

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







  //call plane move
  planeMove();
}

//});


//planeMove function is being recalled after every key press making the speed increase each time. hmmmm
