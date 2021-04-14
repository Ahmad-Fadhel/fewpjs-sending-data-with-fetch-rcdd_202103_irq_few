// Add your code here
let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
function submitData(name, email){
  fetch("http://localhost:3000/users", configObj)
  .then(function(response){
    return response.json();
  })
  .then(function(response) {
    document.body.innerHTML = response[ "id" ]
    console.log(response);
  })
  .catch(function(error) {
    alert("There was an Error.");
    document.body.innerHTML = error.message
    console.log(error.message);
  });
  
}