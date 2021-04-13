// Add your code here


// let formData = {
//     name: "Steve",
//     email: "steve@steve.com"
//     };
    
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"},
//   body: JSON.stringify(formData)
//   };

  let app = document.querySelector('body');
  // let usP = document.createElement('ul');
  // app.append(usp)
  // let usM = document.createElement('li');
  // let usO = document.createElement('li');

function submitData (nameU, emailU){
 
let formData = {
  name: `${nameU}`,
  email: `${emailU}`
  }
  
let configObj = {
method: "POST",
headers: {
  "Content-Type": "application/json",
  "Accept": "application/json"},
body: JSON.stringify(formData)
}

  let body = document.querySelector('body');

  fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(message => {
      let elementID = document.createElement('li');
      elementID.innerText = message['id'].toString()
      app.append(elementID)
      console.log(elementID)
    })
    .catch(function(error) {
      let messageString = document.createElement('li');
      messageString.innerText = error.message.toString()
      app.append(messageString)
      console.log(messageString)
    })
    // .then( res => res.json())
    // .then(data => console.log(data))
    
}


  //let usP = document.createElement('ul');
  //app.append(usP);
  //console.log(app)

  // function addToDom (object) {
  //   //console.log(object)
  //   let usO = document.createElement('li');
  //   //console.log(object)
  //   usO.innerText = object.id
  //   usP.append(usO)
  //   //console.log("addto dom" ,usP)
  // }
        








