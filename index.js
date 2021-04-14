// Add your code here
let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
function submitData(userName, userEmail){
  fetch("http://localhost:3000/users", configObj)
  .then()
  .then()
  
  return fetch();
}