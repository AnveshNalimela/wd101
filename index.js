
function submittedForm(event) {
    
    event.preventDefault();

   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var acceptTerms = document.getElementById('acceptTerms').checked;

   
    var user = {
        name: name,
        email: email,
        password: password, // Note: In a real application, you should not display passwords.
        dob: dob,
        acceptTerms: acceptTerms ? 'Yes' : 'No'
    };

    
    var users = JSON.parse(localStorage.getItem('users')) || [];

   
    users.push(user);

  
    localStorage.setItem('users', JSON.stringify(users));

   
    displayUsers();

    // Reset the form fields
    document.getElementById('registrationForm').reset();
}


function displayUsers() {
    // Get the user list element
    var userList = document.getElementById('userList');

    // Clear the existing list
    userList.innerHTML = '';

    // Get the users from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

   
    users.forEach(function (user) {
        var row = userList.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.textContent = user.name;
        cell2.textContent = user.email;
        cell3.textContent = user.password;
        cell4.textContent = user.dob;
        cell5.textContent = user.acceptTerms? 'true':'false';
    });
}

// Display users when the page loads
displayUsers();
