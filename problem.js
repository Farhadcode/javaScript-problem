
// problem-1  seer to moon


function seerToMoon(seer){
    let moonCalculation =  seer / 40;

      if(typeof seer != 'seer'){
        return 'please give a number';
      }
      if(seer <= 0){
       return 'please enter a positive number ';
      }
    return moonCalculation;
}

const totalMoon = seerToMoon(20);
console.log(totalMoon);


// problem-2 total sales calculation


function totalSales(shirt,pant,shoes){

    const  shirtPrice =100;
    const pantPrice = 200;
    const shoesPrice = 500;

      if(typeof shirt != 'number'){
        return 'please give shirt number';
      }
      if(typeof pant != 'number'){
        return 'please give pant  number';
      }
      if(typeof shoes != 'number'){
        return 'please give shoes number';
      }

      if(shirt <=-1){
        return 'please enter positiv  shart sales number ';
       }

       if(pant <=-1){
        return 'please enter positiv  pant sales number ';
       }
       if(shoes <=-1){
        return 'please enter positiv shoes sales number ';
       }

      
    const salesShirt = shirt * shirtPrice;
    const salesPant = pant * pantPrice ;
    const salesShoes = shoes * shoesPrice;
    const totalPrice = salesShirt + salesPant + salesShoes;
    
    
    return totalPrice;
}
const perDaySales = totalSales(7, 5,0);
console.log(perDaySales);


// problem-3

function deliveryCost(quantity){
    const first100DeliveryCost = 100;
    const second100DeliveryCost = 80;
    const moreThen200DeliveryCost = 50;
    
     if(typeof quantity != 'number'){
        return 'please give a number not string';
      }
    if( quantity<=0){
        return "minimum delivery quantity 1"                                     
    }
   
    else if(quantity<= 100){
      const costCount = quantity * first100DeliveryCost;
        return costCount;
    }
    else if( quantity<=200 ){
        const first100 = 100 * first100DeliveryCost;
        const nextCount = quantity - 100 ;
        const second100 = nextCount * second100DeliveryCost;
        const totatCost =  first100 + second100 ;
       return totatCost;                                      
    }
    else{
        const first100 = 100 * first100DeliveryCost;
        const second100 = 100 * second100DeliveryCost;
        const nextCount = quantity -200;
        const moreThen200 = nextCount * moreThen200DeliveryCost;
        const totalCost =  first100 + second100 + moreThen200 ;
        return totalCost ;

    }
}
 const yourDeliveryCost = deliveryCost(1);
 console.log(yourDeliveryCost);


 //problem-4 


  const friends =['farhad','mukid','farhan','evan','jamil'];

 function perfectFriend(friend){
     for(let i=0; i<friends.length;i++){

         let myFriend =friends[i];

         if(myFriend.length == 5){
            return myFriend;
        }
        
           
     }
     return friend;
 }
 const array = perfectFriend(friends);
 console.log(array);