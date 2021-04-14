// Add your code here
let objConfgc{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } 

function submitData(name, email) {
    return fetch( 'http://localhost:3000/users', )
      .then( function (response) {
        return response.json()
      } )
      .then( function (json) {
        document.body.innerHTML = json.id
      } )
      .catch( function (err) {
        alert("There was an Error. please try again later");
        document.body.innerHTML = err.message
      } )
  } 