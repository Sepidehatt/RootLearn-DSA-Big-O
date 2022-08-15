
//1.
// function countingSheep(number) {
//   if (number < 1) return "All sheep jumped over the fence"
//   console.log(`${number}: Another sheep jumps over the fence`)
//   return countingSheep(number - 1)
// }

// console.log(countingSheep(10))


//2.
// function powerCalculator(baseNum, powerNum) {
//   if (powerNum <= 0) return "exponent should be >= 0"
//   if(powerNum == 1) return baseNum
//   baseNum *= powerCalculator(baseNum , powerNum-1)
//   return baseNum
// }

// console.log(powerCalculator(2,4))


//3.
// let newStr = ''
// function reverseString(str) {
//   newStr += str[str.length - 1]
//   if (str.length == 1) return newStr

//   return reverseString(str.slice(0, -1))
// }
// console.log(reverseString('nothing special'))


//4.
// let sum = 1;
// function triangularNumber(nthNum) {
//   if (nthNum == 1) return sum
//   sum += nthNum 
//   return triangularNumber(nthNum - 1)
// }

// console.log(triangularNumber(5))


//5.
// let resultArr=[]
// const splitter =(str,seprator)=>{
//   if(!str.includes(seprator)) {
//     resultArr.push(str)
//     return resultArr
//   }
//   let subStr = str.slice(0,str.indexOf(seprator))
//   resultArr.push(subStr)
//   return splitter(str.slice(str.indexOf(seprator)+1),seprator)
// }

// console.log(splitter("21/03/2022","/"))


//6.
// const fibonacci = (lastNum) => {
//   if (lastNum <= 2) {
//     return 1;
//   }
//   return fibonacci(lastNum - 2) + fibonacci(lastNum - 1)
// }

// console.log(fibonacci(7))


//7.
// let multiply = 1
// const factorial = (nth) => {
//   if (nth <= 1) {
//     return multiply;
//   }
//   multiply *= nth
//   return factorial(nth - 1)
// }
// console.log(factorial(6))


//8.
