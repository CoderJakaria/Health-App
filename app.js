let counter=document.querySelector(".counter")


let count=1;
 var mymath=Math.random()*99;
 var final=mymath.toFixed();

 setInterval(() =>{

     if (count<final) {
         count++
         counter.innerHTML=count+" "
     }

     else if (count<=40) {
         document.querySelector(".myH2").innerHTML="How are you feeling ?"
     }

      else if (count<70&&count>40) {
        document.querySelector(".myH2").innerHTML="What About Today ?"
    }

     else if (count<99&&count>70) {
        document.querySelector(".myH2").innerHTML="Tell Me About You!"
    }

 },1)


 let sleeper=document.querySelector(".sleeper")

let slpCount=1;

 var slpMath=Math.random()*9;

 var slpFinal=slpMath.toFixed();

 setInterval(() =>{

    if (slpCount<slpFinal) {
        slpCount++
        sleeper.innerHTML=slpCount+" "
    }

},1)




let myWater=document.querySelector(".myWater")

let watrcount=1;

 var watrMath=Math.random()*50;

 var watrFinal=watrMath.toFixed();

 setInterval(() =>{

    if (watrcount<watrFinal) {
        watrcount++
        myWater.innerHTML=watrcount+" "
    }

},1)


var dates=new Date().getMilliseconds()/5000

let mySteps=document.querySelector(".mySteps")

let stepscount=1;

 var stepsMath=Math.random()*999;

 var stepsFinal=stepsMath.toFixed();

 setInterval(() =>{

    if (stepscount<stepsFinal) {
        stepscount++
        mySteps.innerHTML=stepscount+" "
    }
    
},dates)

































// var mymath=Math.random()*99;
// var final=mymath.toFixed();
// counter.innerHTML=final+" "