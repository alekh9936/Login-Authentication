function login() {
  // retrieve username and password values from form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // read Excel file using SheetJS
  var workbook = XLSX.readFile('users.xlsx');
  var sheet_name_list = workbook.SheetNames;
  var users = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  
  // find matching user in Excel file
  var matching_user = users.find(function(user) {
    return user.username === username && user.password === password;
  });
  
  // check if user was found
  if (matching_user) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}
