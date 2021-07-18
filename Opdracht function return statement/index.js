
// voorbeeld eerder gemaakt

// const multiply = function(numberA, numberB) {
//     console.log(numberA * numberB);
// };

// multiply(5, 8);

// const age = 5;
// const dogYearsFactor = 7;
// multiply(age, dogYearsFactor);


// Opdracht 1 If a number is big

const num = 100;

const checkNumber = function(greaterNumber){
    if (greaterNumber > num){
        return true;
    }else{
        return false;
    }
}

let result = checkNumber(91);
console.log(result);


// Opdracht 2 Bouncer at a club


const maxLimitPeopleInTheClub = 100;
const ageLimitedClub = 18;
let currentPeopleInTheClub;
let maxPeopleInTheClub;
let personAgeEnteringTheClub;


function clubBouncer(currentPeopleInTheClub){

    if(currentPeopleInTheClub <= maxLimitPeopleInTheClub){
        return "come in";
    }else if (maxPeopleInTheClub > maxLimitPeopleInTheClub){
        return "it's to busy now, come back later";
    }else if (personAgeEnteringTheClub < ageLimitedClub){
        return "this is a club for adults";
    }
 }

const club = clubBouncer(100);
console.log(club);
//  console.log(peopleMaxClub);


// Opdracht 3 Calculating the average

  function calAvg(number1, number2, number3, number4, number5){

      let sum = (number1 + number2 + number3 + number4 + number5) * 5;
      return sum;

  }
  let resultAvg = calAvg(24.5, 12.5, 32.5, 41.5, 52.5);
  console.log(Math.round(resultAvg));