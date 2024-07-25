let darkModeButton = document.getElementById("Dark-Mode-Button");
const toggleDarkMode = () => {
  console.log("hello")
  document.body.classList.toggle("dark-mode");
}
 darkModeButton.addEventListener('click', toggleDarkMode)


document.getElementById('myForm').addEventListener('submit', function(event) {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;


  var isValid = true;
  var errorMessage = '';


  if (!name.match(/^[a-zA-Z\s]+$/)) {
      isValid = false;
      errorMessage += 'Invalid name. Only letters and spaces are allowed.\n';
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      isValid = false;
      errorMessage += 'Invalid email format.\n';
  }



  if (!isValid) {
      alert(errorMessage);
}
});
