// fetch(), .then(), response.json() 
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].email);
  });
  