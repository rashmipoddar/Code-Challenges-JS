// Given an array of stock prices, the ith element representing the price of stock on ith day.
// Write a function to return the max profit
// You may complete as many transactions as you would like.
// i.e. buy and sell one share of the stock mutliple times. 

// We complete a transaction every time the price for the next day is greater than the price for current day.
const maxProfit = (prices) => {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i+1] > prices[i]) {
      profit += prices[i+1] - prices[i];
    }
  }
  return profit;
};

console.log(maxProfit([7,1,5,3,6,4])) // 7
console.log(maxProfit([1,2,3,4,5])) // 4
console.log(maxProfit([7,6,4,3,1])) // 0