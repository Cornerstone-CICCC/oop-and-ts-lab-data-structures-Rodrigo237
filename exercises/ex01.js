// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  // your code here
  const tempStack = new Stack()
  let indexA = -1
  let indexB = - 1
  let index = 0 

  while(!stack.isEmpty()){
    const item = stack.pop()

    if(item === a){
      indexA = index
    }
    if(item === b){
      indexB = index
    }
    tempStack.push(item)
    index++;
  }

  while(!tempStack.isEmpty()){
    stack.push(tempStack.pop())
  }

  if(indexA !== -1 && indexB !== -1){
    return Math.abs(indexA - indexB)
  }

  return -1
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance(students, "Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2