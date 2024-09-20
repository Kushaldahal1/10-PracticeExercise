marks = [85, 97, 44, 37, 76, 60];
var avg = 0;
marks.forEach(e => {
  avg = avg + e / 6;
});
console.log(avg);

// 2
prices = [250, 645, 300, 900, 50];

prices[0] = prices[0] - prices[0]/10;
prices[1] = prices[1] - prices[1]/10;
prices[2] = prices[2] - prices[2]/10;
prices[3] = prices[3] - prices[3]/10;
prices[4] = prices[4] - prices[4]/10;

console.log(prices);

// 3
companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies[1] = "OLA";
companies.push("Amazon");
console.log(companies);
