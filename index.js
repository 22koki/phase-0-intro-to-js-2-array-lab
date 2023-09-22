// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
beforeEach(function () {
    cats.length = 0;
  
  cats.push('Milo', 'Otis', 'Garfield');
});
 function destructivelyAppendCat(){
cats.push("Ralph");
console.log(cats);
 }
 function destructivelyPrependCat(){
    cats.unshift("Bob");
    console.log(cats);
 }
 function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
 }
 function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);
 }
 function appendCat(){
    const newCatsArray = [...cats, "Broom"];
    return newCatsArray;
 }
 function prependCat(){
    let newCatsArrays = ["Arnold",...cats];
    return newCatsArrays;
 }
 //ts
 function removeLastCat() {
    
    if (cats.length === 0) {
      
      return [];
    }
  
    
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
  }
  
  
  const newCatsArray = removeLastCat();
  
  
  console.log(newCatsArray); 
  console.log(cats);  
  //yd
  function removeFirstCat(){

    if( cats.length === 0){
        return[];
    }
    
    const newCatsArrays = cats.slice(1);
    return newCatsArrays;
}
    console.log(newCatsArrays);
    console.log(cats);
  


 





