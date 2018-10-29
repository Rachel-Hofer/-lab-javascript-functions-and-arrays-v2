
function maxOfTwoNumbers(numOne, numTwo){
    if(numOne > numTwo){
      return numOne
    }
    else if(numOne < numTwo){
      return numTwo
    }
    else {
      return "These numbers are equal"
    }
  }
  console.log(maxOfTwoNumbers(5,9));
  
  
  
  let words = ['mystery', 'elephant', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
  
  function findLongestWord(someArray) {
  let longestWord = ""; {
  someArray.forEach((arrayElement)=>{
  if(arrayElement.length > longestWord.length) {
  longestWord = arrayElement
  }
  })
  }
  return longestWord
  }
  
  findLongestWord(words);
  
  
  
  let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  function sumArray(arrayOfNumbers){
    let sum = 0;
  
    arrayOfNumbers.forEach((eachNumber)=>{
      sum += eachNumber
    })
  
    return sum
  };
  
  sumArray(numbers)/numbers.length
  
  
  
  var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
  
  function sumArray(arrayOfNumbers){
    let sum = 0;
  
    arrayOfNumbers.forEach((eachNumber)=>{
      sum += eachNumber
    })
    return sum
  };
  
  function getAverage(array){
    return sumArray(array) / array.length
  };
  getAverage(numbers);
  
  var words = [
      'seat',
      'correspond',
      'linen',
      'motif',
      'hole',
      'smell',
      'smart',
      'chaos',
      'fuel',
      'palace'
  ];
  
  function totalLetterCount(randomArray){
    let total = 0;
  
    randomArray.forEach((eachWord)=>{
      total += eachWord.length
    })
    return total
  };
  
  function avgLettersOfWords(randomArray){
    return totalLetterCount(randomArray) / randomArray.length
  }
  
  avgLettersOfWords(words);
  