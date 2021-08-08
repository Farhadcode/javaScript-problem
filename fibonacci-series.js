// fibonacci series = 0 , 1 , 1, 2,3 ,5,8,13,21,34,55 ,89
/*
3rd = 2nd + 1st 
4th = 3rd + 2nd 
5th = 4th + 3rd
nth = (n-1)th + (n-2)th
*/
const fibo =[0,1]
for(let i = 2; i<= 20; i++){
    //   ith = (i-1)th + (i-2)th
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);



function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'please give a number';
    }
    if(num < 2){
        return 'please enter a positive number greater than 1';
    }
    const fibo = [0,1];
    for(let i= 2 ; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboResult = fibonacciSeries(8);
console.log(fiboResult);

// fibonacci series apply recursive  way 

function fibonacci(n){

  if(n == 0){
    return 0;
  }
  if(n == 1){
    return 1;
  }
    return fibonacci(n-1) + fibonacci(n-2);
}
const  fiboElement = fibonacci(6);
console.log(fiboElement);
