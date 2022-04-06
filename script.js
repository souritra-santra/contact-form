// provide the validation code here
function validateName(evt) {
  var letters = /^[A-Za-z]+$/;
  var element = document.getElementById(evt.target.id + "Error");
  if (evt.target.value.match(letters)) {
    element.innerHTML = "";
    return true;
  }
  element.innerHTML = "Enter alphabets only";
  evt.target.focus();
  return false;
}

function validateEmail(evt) {
  var letters = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
  var element = document.getElementById(evt.target.id + "Error");
  if (evt.target.value.match(letters)) {
    element.innerHTML = "";
    return true;
  }
  element.innerHTML = "Enter valid email";
  evt.target.focus();
  return false;
}

function validatePhoneNo(evt) {
  var letters = /^(\+[1-9]{0,2})?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var element = document.getElementById(evt.target.id + "Error");
  if (evt.target.value.match(letters)) {
    element.innerHTML = "";
    return true;
  }
  element.innerHTML = "Enter valid Phone Number";
  evt.target.focus();
  return false;
}

function validateBirthDate(evt) {
  var date = new Date(evt.target.value)
  const today = new Date();
  
  var element = document.getElementById(evt.target.id + "Error");
  if (date<today) {
    element.innerHTML = "";
    return true;
  }
  element.innerHTML = "Enter a date before today";
  evt.target.focus();
  return false;
}
function addContact() {
  document.getElementById("contactNos").innerHTML += '<div class="col-md-6">'+
  '<input class="form-control form-control-sm" type="text" name="otherNo" id="otherNo" placeholder="Enter Contact No - Other" onblur="validatePhoneNo(event)">'+
  '<small id="otherNoError"></small>'+
  '</div>';
}