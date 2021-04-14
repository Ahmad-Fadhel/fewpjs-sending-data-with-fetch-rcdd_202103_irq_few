// Add your code here
let formData = {
  name: "Byron",
  email: "byron@dogpoodle.com"
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
  .then(function(json){
    
  })
  .catch(function(err){
    err.message;
  })
  
  return fetch();
}