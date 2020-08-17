function validate() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";

  if (name.trim() == "") {
    text = "Please enter a name.";
    error_message.innerHTML = text;
    return false;
  }

  if (subject.trim() == "") {
    text = "Please enter a subject.";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = "Please enter a valid phone number.";
    error_message.innerHTML = text;
    return false;
  }

  if (!(email.includes("@"))){
    text = "Please enter a valid email.";
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <=90) {
    text = "Please enter at least 90 characters in the message.";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form submitted successfully!");


}
