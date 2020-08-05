const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//to solve return to zero problem
var date = new Date(); //get the hour ,mins and seconds from date object
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);


//convert it to degrees as we need to enter degree measures for transform style
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runClock(){
      hrPosition = hrPosition+(3/360);
      minPosition = minPosition+(6/60);
      secPosition = secPosition+6;


  //add it to css inline styling through javascript
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
//repeat after every one sec
var interval = setInterval(runClock,1000);
