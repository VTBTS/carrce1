canvas= document.getElementById("can");
ctx=canvas.getContext("2d");
carwidth1=100;
roverheight1=90;
car1x=10;
car1y=10;
carwidth2=100;
roverheight2=90;
car2x=11;
car2y=11;
car1="download(2).png";
car2="images.jfif";

window.addEventListener("keydown",keydwn);
function keydwn(){
    keypressed=e.keycode;
     console.log(keypressed);
   if(keypressed=='39'){
             movea();
             console.log("ca1 ahead")
        }

     if(keypressed=='37'){
            moveB();
            console.log("car1 behind") 
        }

    if(keypressed=='65'){
             moveaa();
             console.log("car2 ahead")
        }

     if(keypressed=='68'){
            moveab();
            console.log("car2 behind")
        }
}

