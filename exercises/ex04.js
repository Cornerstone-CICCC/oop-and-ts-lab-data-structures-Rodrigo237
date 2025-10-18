// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue()
  const stack = []
  const values = []

  while(!queue.isEmpty()){
    const item = queue.dequeue()
    values.push(item)
    stack.push(item)
    tempQueue.enqueue(item)
  }

  while(!tempQueue.isEmpty()){
    queue.enqueue(tempQueue.dequeue())
  }

  for(let i= 0; i < values.length; i++){
    if(values[i] !== stack.pop()){
      return false
    }
  }
  return true
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true