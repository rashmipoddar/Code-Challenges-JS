// There is a random list of people standing in a queue. 
// Each person is described by a pair of integers (h, k), 
// where h is the height of the person and 
// k is the number of people in front of this person who have a height greater than or equal to h. 
// Write an algorithm to reconstruct the queue.

const reconstructQueue = (people) => {
  people.sort((a, b) => a[0] - b[0]);
  let queue = new Array(people.length).fill(0);
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    let count = 0;
    for (let j = 0; j < queue.length; j++) {
      let currentPosition = person[1];
      let currentHeight = person[0];
      if (count === currentPosition && queue[j] === 0) {
        queue[j] = person;
        break;
      } 
      if(queue[j] === 0 || queue[j][0] >= currentHeight) {
        count += 1;
      }
    }
  }
  return queue;
}

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]