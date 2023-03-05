function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
if(username==''||password==''){
  alert("All credentials should be filled")
}
  if(username=='Admin' && password=='Admin')||(username=='Student' && password=='Student'){
    alert("Login Sucessful, redirecting)
          }
          else{
          alert("Invalid Credentials")
  }
}
