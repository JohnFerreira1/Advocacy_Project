let darkModeButton = document.getElementById("Dark-Mode-Button");
const toggleDarkMode = () => {
  console.log("hello")
  document.body.classList.toggle("dark-mode");
}
 darkModeButton.addEventListener('click', toggleDarkMode)