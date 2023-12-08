/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result = {};
  const final = [];
  for (let transaction of transactions) {
    const category = transaction.category;
    const price = transaction.price;
    if (result[category]) {
      result[category] = result[category] + price;
      continue;
    }
    result[category] = price;
  }

  const arr = Object.entries(result);

  for (let item of arr) {
    final.push({ category: item[0], totalSpent: item[1] });
  }

  return final;
}

module.exports = calculateTotalSpentByCategory;
