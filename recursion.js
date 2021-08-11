// sum of 6 to 1

// let sum = 0;
// for (let i= 1; i <= 6 ; i++){
//     sum = sum + i ;
// }
// console.log(sum);
let sum = 0;

 for( let i = 6; i >= 1 ;i--){
     sum = sum + i;
 }
 console.log(sum);

 // multyplay 6 to 1

 let mul = 1;
 for( let i = 6 ; i >= 1; i--){
     mul =  mul * i;
 }
 console.log(mul);

 
 function factorialCalculat(n){
    let factorial = 1;
     for(let n =10  ; n >= 1; n--){
         factorial = factorial * n;
     }
     return factorial;
 }

 const result = factorialCalculat();
 console.log(result);


 function factorial(i){
     if( i == 1){
         return 1;
     }
     return i * factorial(i - 1);
 }
 console.log(factorial(10));