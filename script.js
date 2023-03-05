function login() {
  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username==''||password==''){
    alert("All credentials should be filled")
  }
  if (username=='Admin'&&password=='Admin'){
    alert("login sucessful")
    window.location.href = "https://example.com/dashboard";
  }
  else{
    alert("login failed, credentials invalid")
  }
}
