// celsius to fahrenheit 

 function calculationfahrenheit(cel) {
     let far = 1.8 * cel +32 ;
     return far ;
 }
  var resultFar = calculationfahrenheit (100);
 console.log("fahrenheit temperater ",resultFar);

// fahrenheit to celsius 

function calculationcelsius(fahrenheit) {
    let cel = 0.5556* (fahrenheit - 32);
    return cel;
}
var resultCel = calculationcelsius(212);

console.log('celsius temperater',resultCel);