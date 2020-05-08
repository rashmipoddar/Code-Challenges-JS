// Given an array of coordinates, coordinates[i] = [x,y] where [x, y] represents the coordinates of a point. 
// Check if the coordinates make a straight line.


// Check the slope between the 1st point and 2nd point, the 1st point and the 3rd point and so on. 
// If the slope is equal it is a straight line else its not.

let checkStraightLine = (coordinates) => {
  if (coordinates.length === 2) {
    return true;
  }
  
  let x = coordinates[0][0];
  let y = coordinates[0][1];

  let slope = (coordinates[1][1] - y) / (coordinates[1][0] - x); 
  
  for (let i = 2; i < coordinates.length; i++) {
    let x2 = coordinates[i][0];
    let y2 = coordinates[i][1];
    let innerSlope = (y2-y)/(x2-x);
    if (innerSlope !== slope) {
      return false;
    }
  } 
  return true;
};

console.log(checkStraightLine([[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]])) // true
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])); // false
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); // true
console.log(checkStraightLine([[0,1],[1,3],[-4,-7],[5,11]])) // true