// Fetch API Error Handling
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {

    if (!response.ok) {
        throw new Error("Something Went Wrong");
    }

    return response.json();

})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error.message);
});