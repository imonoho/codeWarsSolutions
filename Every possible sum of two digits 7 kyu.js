// Given a long number, return all the possible sum of two digits of it.
//
// For example, 12345: all possible sum of two digits from that number are:
//
// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// Therefore the result must be:
//
// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]


// https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript




function digits(num){
    let arrOfNumbers = num.toString().split('').map(el => +el);
    let resultArr = [];
    for(let i = 0; i < arrOfNumbers.length; i++) {
        for(let j = 1 + i; j < arrOfNumbers.length; j++) {
            resultArr.push(arrOfNumbers[i] + arrOfNumbers[j]);
        }
    }


return resultArr
}

console.log(digits(3264128))//[ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]
