function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("All fields must be filled out");
      return false;
    }
  
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    // if (!email.checkValidity()) {
    //     alert("Please enter a valid email address");
    //     return false;
    //   }
  
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return false;
    }
  
    return true;
  }
  