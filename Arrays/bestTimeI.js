// Given an array of stock prices, the ith element representing the price of stock on ith day.
// Write a function to return the max profit
// You can only sell the stock after you buy it. 
// You are restricted to maximum one transaction.

const maxProfit = (prices) => {
  let minimumPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // if current price is less than the minimum price modify the minimum price
    if (prices[i] < minimumPrice) {
      minimumPrice = prices[i];    
    } else {
      // else check if the profit is greater than the current profit if we sell at current day and if it is modify the profit
      if (prices[i] - minimumPrice > profit) {
        profit = prices[i] - minimumPrice;
      }
    }
  }
  return profit;
}

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0

