// A company wants to interview 2N people. The cost of flying the i-th person to city A is costs[i][0],
// and the cost of flying the i-th person to city B is costs[i][1].
// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

const twoCitySchedulingCost = (costs) => {
  costs.sort((a,b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  
  let sum = 0;
  let cityA = 0;
  let cityB = 0;
  let limit = costs.length/2;
  
  for (let i = 0; i < costs.length; i++) {
    let costCityA = costs[i][0];
    let costCityB = costs[i][1];
    
    if (costCityA <= costCityB) {
      if (cityA < limit) {
        sum += costCityA;
        cityA += 1;
      } else {
        sum += costCityB;
        cityB += 1;
      }
    } else {
      if (cityB < limit) {
        sum += costCityB;
        cityB += 1;
      } else {
        sum += costCityA;
        cityA += 1;
      }
    }
  }
  return sum;
};

console.log(twoCitySchedulingCost([[10,20],[30,200],[400,50],[30,20]])) // 110