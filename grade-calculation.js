function gradeCal(marks){
     let youGrad = marks;
    if (youGrad >= 80 ) {
        console.log("A+");
    } 
    else if(youGrad >= 70){
      console.log("A");
    } 
    else{
        console.log( 'sorry you fail ');
    }
 return youGrad;   
    
}
var resutlpublish = gradeCal(98);
console.log(resutlpublish);