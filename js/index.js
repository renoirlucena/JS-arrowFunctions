function normalSum(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function (a, b) {
  return a + b;
}

console.log(`Soma anônima: ${anonymousSum(2,2)}`)

const arrowSum = (a, b) => {
  return a + b;
}

console.log(`Soma arrow function: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b

console.log(`Subtraction: ${subtract(2, 2)}`)

const double = n => `double of ${n} is ${n * 2}`

const number = 21
console.log(double(number))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)

