// Add your code here
let formData = {
  name: "Byron",
  email: "byron@dogpoodle.com"
};

let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
function submitData(name, email){
  fetch("http://localhost:3000/users", configObj)
  .then()
  .then()
  
  return fetch();
}