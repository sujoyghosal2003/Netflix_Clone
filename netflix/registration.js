document.addEventListener('DOMContentLoaded', function () {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInFields = document.getElementById('signInFields');
    const signUpFields = document.getElementById('signUpFields');
    const submitSignIn = document.getElementById('submitSignIn');
    const submitSignUp = document.getElementById('submitSignUp');

    // Initialize with Sign In fields visible
    signInFields.style.display = 'block';
    signUpFields.style.display = 'none';

    signInBtn.addEventListener('click', function () {
        signInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
        signInFields.style.display = 'block';
        signUpFields.style.display = 'none';
    });

    signUpBtn.addEventListener('click', function () {
        signUpBtn.classList.add('active');
        signInBtn.classList.remove('active');
        signInFields.style.display = 'none';
        signUpFields.style.display = 'block';
    });

    submitSignIn.addEventListener('click', function () {
        const loginId = document.getElementById('loginId').value;
        const password = document.getElementById('password').value;

        // Retrieve stored user data
        const storedUserId = localStorage.getItem('userId');
        const storedPassword = localStorage.getItem('password');

        if (!storedUserId) {
            alert('You need to sign up first!');
        } else if (loginId === storedUserId && password === storedPassword) {
            alert('Sign In successful');
        } else {
            alert('Invalid login ID or password');
        }

        // Clear input fields
        document.getElementById('loginId').value = '';
        document.getElementById('password').value = '';
    });

    submitSignUp.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            // Save sign-up data in local storage
            localStorage.setItem('userId', phone);
            localStorage.setItem('password', password);

            // Notify user of successful sign-up
            alert(`Sign Up successful for ${name}`);
        }

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('signupPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    });
});
