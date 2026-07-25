// Promise Chaining
 const order = new Promise((resolve) => {
    resolve("Laptop");
});

order
.then((product) => {
    console.log("Selected:", product);
    return product + " Bag";
})
.then((product) => {
    console.log("Added:", product);
    return product + " + Mouse";
})
.then((product) => {
    console.log("Final Order:", product);
});