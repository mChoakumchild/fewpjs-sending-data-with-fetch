// Add your code here

//document.addEventListener('DOMContentLoaded', (e) => {
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

   
        
        
        function submitData (name, email){
            formData['name'] = name;
            formData['email'] = email;
            //console.log(formData.name, formData.email)
             let doc = fetch("http://localhost:3000/users", configObj)
                .then(function(response) {
                  return response.json();
                })
                .then(function(object) {
                  document.append(object.Name)
        
                })
                .catch(function(error) {
                  document.append(error.message)
                }); 
                return doc
        }
        
 

//submitData("steven", "seteve@gmail.com");