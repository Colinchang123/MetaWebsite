document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const doctorId = document.getElementById('doctorId').value;
            const password = document.getElementById('password').value;

            if (validateLogin(doctorId, password)) {
                localStorage.setItem('isLoggedIn', true);
                window.location.href = 'index.html';
            } else {
                alert('Invalid Doctor ID or Password');
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const doctorId = document.getElementById('doctorId').value;
            const password = document.getElementById('password').value;

            if (registerDoctor(doctorId, password)) {
                alert('Sign up successful. Please log in.');
                window.location.href = 'login.html';
            } else {
                alert('Signup failed. Please try again.');
            }
        });
    }
});

function validateLogin(doctorId, password) {
    const doctors = [
        { id: 'doctor1', password: 'password1' },
        { id: 'doctor2', password: 'password2' },
        { id: 'doctor3', password: 'password3' },
        { id: 'doctor4', password: 'password4' },
        { id: 'doctor5', password: 'password5' }
    ];
    
    return doctors.some(doctor => doctor.id === doctorId && doctor.password === password);
}

function registerDoctor(doctorId, password) {
    // This function should handle doctor registration
    // For simplicity, this example does not include actual registration logic
    // In a real application, you would need to send the data to a server
    return true; // Assume registration is successful
}