// Provide persistence solution code here
function sendData() {
    console.log(document.getElementById("firstname").value);
    let xhr = new XMLHttpRequest();
    let requestBody = {
        "firstname":document.getElementById("firstname").value,
        "lastname":document.getElementById("lastname").value,
        "email":document.getElementById("email").value,
        "homeNo":document.getElementById("homeNo").value,
        "workNo":document.getElementById("workNo").value,
        "birthdate":document.getElementById("birthdate").value,
        "company":document.getElementById("company").value,
        "jobTitle":document.getElementById("jobTitle").value,
        "notes":document.getElementById("notes").value
    };
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
        let val = document.getElementById("firstname").value;
        alert("Contact added successfully");
        console.log("Data added successfully");
      }
    };
    xhr.open("POST", "http://localhost:3000/contacts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(requestBody));
  }