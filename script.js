function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
if((username ==="Admin"&&password ==="Admin")||
(username ==="Test"&&password ==="Test")||
(username ==="Student"&&password ==="Student")||
(username ==="Faculty"&&password ==="Faculty")||
(username ==="Bogus"&&password ==="Bogus")){
  alert("Login successful, Redirecting!")
  window.location.href = "https://example.com/dashboard";
}
else if(username ===""||password ===""){
  alert("Credentials required!")
}
else{
  alert("Bad credentials!")
}

}
