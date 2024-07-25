document.getElementById('myForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    var nameField = document.getElementById('name');
    var emailField = document.getElementById('email');
    var name = nameField.value.trim();
    var email = emailField.value.trim();

    
    nameField.classList.remove('error');
    emailField.classList.remove('error');

    
    var isValid = true;
    var errorMessage = '';

    
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        isValid = false;
        errorMessage += 'Invalid name. Only letters and spaces are allowed.\n';
        nameField.classList.add('error'); 
    }

    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += 'Invalid email format.\n';
        emailField.classList.add('error'); 
    }

    
    if (!isValid) {
        alert(errorMessage);
        return;
    }

    
    var signatureList = document.getElementById('signatures');
    var newSignature = document.createElement('li');
    newSignature.textContent = name + ' has signed the petition!';
    signatureList.appendChild(newSignature);

    
    nameField.value = '';
    emailField.value = '';
});