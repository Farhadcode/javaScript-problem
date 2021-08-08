const number1 = 788;

const number2 = 688;

if(number1 > number2){
    console.log( ' this is the maximum value',number1);
}
else{
    console.log( 'this is  the min value');
}

var number = [345,78, 10 ,9363,636,96967,8857795];
//  var max = Math.max(...number);
//  var main = Math.min(...number);
//  console.log(max);
//  console.log(main);

 function arrayMax(array){
     var max = Math.max(...array);
     var min =Math.min(...array)
     return max ,min;

 }
 const numArry = arrayMax(number);
 console.log(numArry);

 function findLargest(num1 ,num2,num3){
     if(num1 > num2){
         return num1;
     }
     else if(num2 > num3){
       return num2;
     }
     else{
         return num3;
     }


 }
 const largestNumber = findLargest(5,854 ,47785);
 console.log(largestNumber);