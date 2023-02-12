// Step 1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    // Step 1: Get the email address insie the imail input field
    // Always remember  to use .value to get the text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step 3: Get password
    const passwordField = document.getElementById('user-password');
    const pass = passwordField.value;
    // console.log(email, pass);

    //Step 4: Varify email & password
    if(email === 'son@father.com' && pass === 'secret'){
        window.location.href = 'bank.html';
    }
    else if(email !== 'son@father.com' && pass === 'secret'){
        alert('Incorrect Email. Please Input a Valid Email Address');
    }
    else if(email === 'son@father.com' && pass !== 'secret'){
        alert('Incorrect Password. Please Input a Valid Password');
    }
    else{
        alert('Email and password is wrong. Please try again!')
    }
})