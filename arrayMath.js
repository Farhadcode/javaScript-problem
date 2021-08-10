  var number = [5,7, 10 ,3 , 6, 9,8];
 var max = Math.max(...number);
 var main = Math.min(...number);
 console.log(max);
 console.log(main);

// total sum of array ;
let sum = 0;
for(let i = 0 ;i<number.length; i++){
   const element = number[i];
   sum = sum + element; 
  
}
console.log(sum);

// Useing funtion 

 function arrayTotal(number){
     let value =0;
     for(let i =0; i<number.length; i++){
         const element = number[i];
          value = value + element;
     }
     return value;
 }
var totalSum = arrayTotal(number);
console.log(totalSum);

// max and min value in  array useing destocture

 var priceList =[68,90,355,858,768,112,656,12];
 var nagitive =[-1,-8,-89]
 function arrayMax(array){
     var max = Math.max(...array);
      var min =Math.min(...array)
     return [max,min];
     
 }
 const numArry = arrayMax(priceList);
 console.log(numArry);

 const nagNum = arrayMax(nagitive);
 console.log(nagNum);

 //max value in array
 function largestElement(priceList){
     let largest = priceList[0];
     for(let i =0; i< priceList.length; i++){
         const element = priceList[i];
         if(element > largest){
             largest = element;
         }
     }
     return largest;
 }
 const result = largestElement(priceList);
 console.log(result);

 // min value in array

 function smallElement(priceList){
    let small = priceList[0];
    for(let i =0; i< priceList.length; i++){
        const element = priceList[i];
        if(element < small){
            small = element;
        }
    }
    return small;
}
const result1 = smallElement(priceList);
console.log(result1);

const friends = ['farhad','fardin','mukta','evanRakitis','eva','me'];
function bigFriend(friends){
    let  myfriend = friends[0];
    for(let i= 0; i<friends.length; i++){
        const largfriend = friends[i];
        if( largfriend < myfriend){
            myfriend = largfriend
        }
    }
    return myfriend;
}
const bigBoos = bigFriend(friends);
console.log(bigBoos);

function smallFriend(friends){
    let  myfriend = friends[0];
    for(let i= 0; i<friends.length; i++){
        const largfriend = friends[i];
        if( largfriend > myfriend){
            myfriend = largfriend
        }
    }
    return myfriend;
}
const bacchaFriend = smallFriend(friends);
console.log(bacchaFriend);

