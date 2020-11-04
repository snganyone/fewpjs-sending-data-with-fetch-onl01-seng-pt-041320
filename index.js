// Add your code here


function submitData(name, email){
    let formData = {
        name: name,
        email: email
    };

    let config_obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
}

fetch("http://localhost:3000/users", config_obj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        console.log(object);
    })
    .catch(function(error){
        alert("Something went wrong?");
        console.log(error.message);
    })
