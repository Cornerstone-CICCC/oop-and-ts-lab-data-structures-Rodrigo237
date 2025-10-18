// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 3 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function mixQueue(queue) {
  // your code here
  const size = queue.size()
  const half = size / 2

  const firstHalf = new Queue()
  const secondHalf = new Queue()

  for(let i = 0; i < size;i++){
    const item = queue.dequeue()
    if(i < half){
      firstHalf.enqueue(item)
    }else{
      secondHalf.enqueue(item)
    }
  }

  while(!firstHalf.isEmpty() && !secondHalf.isEmpty()){
      queue.enqueue(firstHalf.dequeue())
      queue.enqueue(secondHalf.dequeue())
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6