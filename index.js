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
    let h2 = document.createElement('h2');
    h2.innerText = response.id;
    document.body.appendChild(h2);
    console.log(response);
  })
  .catch(function(error) {
    let h3 = document.createElement('h3');
    h3.innerText = error.message;
    document.body.appendChild(h3);
    console.log(error.message);
  });
  
}