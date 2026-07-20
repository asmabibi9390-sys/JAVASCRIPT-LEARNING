// every()
// const numbers = [2, 4, 6, 8, 10];
// const ans = numbers.every((number) => {
//  return number % 2 === 0;
// });
// console.log(ans);



const userCart = [
 { productId: 1, productName: "mobile", price: 12000 },
 { productId: 2, productName: "laptop", price: 22000 },
 { productId: 3, productName: "tv", price: 15000 }
];
const ans = userCart.every((cartItem) => {
 return cartItem.price < 30000;
});
console.log(ans);