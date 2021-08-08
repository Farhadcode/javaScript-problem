const nameList = ['kamal','jamal','samal','damal','eva','mukta','kamal','samal','jamal','eva'];
function removeDuplicate(nameList){
    const unique = [];
//    for(let i = 0; i<nameList.length; i++ ){
//       const name = nameList[i];
//        console.log(name);
//    }

  for(const element of nameList){
    // console.log(element);
    if(unique.indexOf(element)== -1){
        unique.push(element);
    }
  }
return unique;
    
}
const uniqueName = removeDuplicate(nameList);
console.log(uniqueName);

const numberList = [89,989,77,5425,77,323,55,10,89];

function duplicatNumberRemove(numberList){
    const uniqueNumber =[];

    for(const number of numberList){
      if(uniqueName.indexOf(number) == -1){
        uniqueNumber.push(number);
      }
    }
 return uniqueNumber;

}
const uniqueNumbeArray = duplicatNumberRemove(numberList);
console.log(uniqueNumbeArray);