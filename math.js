// const number =  9;

function getRandomNumber(num){

    const randomValue = Math.random()*num;
    const rounded =Math.round(randomValue);

    // console.log('random number',rounded);
    
  
}

const selected = []
for( let i = 0 ; i < 100; i++){
    const random = Math.random()*100;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1){
        selected.push(picked);
    }
    else{
        console.log(selected , picked);
    }

}
console.log(selected);