var sun=document.getElementById("sun");
var mon=document.getElementById("mon");
var tue=document.getElementById("tue");
var wed=document.getElementById("wed");
var thur=document.getElementById("thur");
var fri=document.getElementById("fri");
var sat=document.getElementById("sat");


var sunday=document.getElementsByClassName("sunday");
var monday=document.getElementsByClassName("monday");
var tuesday=document.getElementsByClassName("tuesday");
var wednesday=document.getElementsByClassName("wednesday");
var thursday=document.getElementsByClassName("thursday");
var friday=document.getElementsByClassName("friday");
var saturday=document.getElementsByClassName("saturday");

sun.addEventListener("click",sundays);
mon.addEventListener("click",mondays);
tue.addEventListener("click",tuesdays);
wed.addEventListener("click",wednesdays);
thur.addEventListener("click",thursdays);
fri.addEventListener("click",fridays);
sat.addEventListener("click",saturdays);

function sundays(){
    let a =document.querySelector(".a1");
    let b=document.querySelector(".a2");
    let c=document.querySelector(".a3");
    let d=document.querySelector(".a4");
    let e=document.querySelector(".a5");
    let f=document.querySelector(".a6");
    let g=document.querySelector(".a7");
    sun.style.background=" radial-gradient(black,black,rgb(8, 235, 8),black,rgb(2, 2, 235),rgb(246, 246, 247),rgb(255, 255, 255))"
    mon.style.background=" linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    
    tue.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    wed.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    thur.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    fri.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    sat.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        

     a.style.left="10%";
     b.style.left="600px";
    c.style.left="600px";
    d.style.left="600px";
    e.style.left="600px";
    f.style.left="600px";
    g.style.left="600px";
}

function mondays(){
    let a =document.querySelector(".a1");
    let b=document.querySelector(".a2");
    let c=document.querySelector(".a3");
    let d=document.querySelector(".a4");
    let e=document.querySelector(".a5");
    let f=document.querySelector(".a6");
    let g=document.querySelector(".a7");
    sun.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    mon.style.background="radial-gradient(black,black,rgb(8, 235, 8),black,rgb(2, 2, 235),rgb(246, 246, 247),rgb(255, 255, 255))"
    tue.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    wed.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    thur.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    fri.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    sat.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
     
     a.style.left="-600px";
     b.style.left="10%";
    c.style.left="600px";
    d.style.left="600px";
    e.style.left="600px";
    f.style.left="600px";
    g.style.left="600px";
}
function tuesdays(){
    let a =document.querySelector(".a1");
    let b=document.querySelector(".a2");
    let c=document.querySelector(".a3");
    let d=document.querySelector(".a4");
    let e=document.querySelector(".a5");
    let f=document.querySelector(".a6");
    let g=document.querySelector(".a7");
    sun.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    mon.style.background=" linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    
    tue.style.background="radial-gradient(black,black,rgb(8, 235, 8),black,rgb(2, 2, 235),rgb(246, 246, 247),rgb(255, 255, 255))"    
    wed.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    thur.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    fri.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    sat.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
     
     a.style.left="-600px";
     b.style.left="-600px";
    c.style.left="10%";
    d.style.left="600px";
    e.style.left="600px";
    f.style.left="600px";
    g.style.left="600px";
}
function wednesdays(){
    let a =document.querySelector(".a1");
    let b=document.querySelector(".a2");
    let c=document.querySelector(".a3");
    let d=document.querySelector(".a4");
    let e=document.querySelector(".a5");
    let f=document.querySelector(".a6");
    let g=document.querySelector(".a7");
    sun.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    mon.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    
    tue.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    wed.style.background="radial-gradient(black,black,rgb(8, 235, 8),black,rgb(2, 2, 235),rgb(246, 246, 247),rgb(255, 255, 255))"
    thur.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    fri.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    sat.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
     
     a.style.left="-600px";
     b.style.left="-600px";
    c.style.left="-600px";
    d.style.left="10%";
    e.style.left="600px";
    f.style.left="600px";
    g.style.left="600px";
}
function thursdays(){
    let a =document.querySelector(".a1");
    let b=document.querySelector(".a2");
    let c=document.querySelector(".a3");
    let d=document.querySelector(".a4");
    let e=document.querySelector(".a5");
    let f=document.querySelector(".a6");
    let g=document.querySelector(".a7");
    sun.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    mon.style.background=" linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    
    tue.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    wed.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    thur.style.background="radial-gradient(black,black,rgb(8, 235, 8),black,rgb(2, 2, 235),rgb(246, 246, 247),rgb(255, 255, 255))"
    fri.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    sat.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
     
     a.style.left="-600px";
     b.style.left="-600px";
    c.style.left="-600px";
    d.style.left="-600px";
    e.style.left="10%";
    f.style.left="600px";
    g.style.left="600px";
}
function fridays(){
    let a =document.querySelector(".a1");
    let b=document.querySelector(".a2");
    let c=document.querySelector(".a3");
    let d=document.querySelector(".a4");
    let e=document.querySelector(".a5");
    let f=document.querySelector(".a6");
    let g=document.querySelector(".a7");
    sun.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    mon.style.background=" linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
    
    tue.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    wed.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    thur.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
        
    fri.style.background="radial-gradient(black,black,rgb(8, 235, 8),black,rgb(2, 2, 235),rgb(246, 246, 247),rgb(255, 255, 255))"
    sat.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
     
     a.style.left="-600px";
     b.style.left="-600px";
    c.style.left="-600px";
    d.style.left="-600px";
    e.style.left="-600px";
    f.style.left="10%";
    g.style.left="600px";
}
function saturdays(){
    let a =document.querySelector(".a1");
    let b=document.querySelector(".a2");
    let c=document.querySelector(".a3");
    let d=document.querySelector(".a4");
    let e=document.querySelector(".a5");
    let f=document.querySelector(".a6");
    let g=document.querySelector(".a7");
     
     sun.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
     mon.style.background=" linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
     
     tue.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
         
     wed.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
         
     thur.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
         
     fri.style.background="linear-gradient(135deg,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.37),rgba(9, 255, 0, 0.336),rgba(0, 0, 0, 0.384),rgba(0, 0, 0, 0.363),rgba(0, 0, 255, 0.397),rgba(0, 0, 0, 0.37),rgba(0, 0, 0, 0.336))"
         
     sat.style.background="radial-gradient(black,black,rgb(8, 235, 8),black,rgb(2, 2, 235),rgb(246, 246, 247),rgb(255, 255, 255))"
      a.style.left="-600px";
     b.style.left="-600px";
    c.style.left="-600px";
    d.style.left="-600px";
    e.style.left="-600px";
    f.style.left="-600px";
    g.style.left="10%";
}

function pos(){
    sun.style.position="absolute";
    mon.style.position="absolute";
    tue.style.position="absolute";
    wed.style.position="absolute";
    thur.style.position="absolute";
    fri.style.position="absolute";
    sat.style.position="absolute";

    let tr=document.querySelector(".week");
    tr.style.bottom="-500px";
    


    let down=document.querySelector("#slide-down");
    down.style.bottom="-100px";

    let up=document.querySelector("#slide-up");
    
}
function poss(){
    sun.style.position="relative";
    mon.style.position="relative";
    tue.style.position="relative";
    wed.style.position="relative";
    thur.style.position="relative";
    fri.style.position="relative";
    sat.style.position="relative";

    let tr=document.querySelector(".week");
    tr.style.bottom="50px";
  

    let up=document.querySelector("#slide-up");

    let down=document.querySelector("#slide-down");
    down.style.bottom="0px";
    up.style.transform="rotate(45deg)";
}