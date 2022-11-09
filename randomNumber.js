// generate random numbers

function radomInTwoRange(min1,max1,min2,max2){
    var randomNumbers = [];
 randomNumbers.push(Math.floor(Math.random() * (max1-min1))+min1) 
 randomNumbers.push(Math.floor(Math.random() * (max2-min2))+min2)
 return randomNumbers;
}

console.log("TWO RANDOM NUMBERS  "+ radomInTwoRange(-100,0,800,900));
console.log(radomInTwoRange(-100,0,800,900));
   
