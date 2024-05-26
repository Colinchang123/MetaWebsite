document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const doctorId = document.getElementById('doctorId').value;
            const password = document.getElementById('password').value;

            if (validateLogin(doctorId, password)) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUser', doctorId); // Store the logged-in user's ID
                window.location.href = 'index.html';
            } else {
                alert('Invalid Doctor ID or Password');
            }
        });
    }
});

function validateLogin(doctorId, password) {
    const doctors = [
        { id: 'doc1', password: 'password1' },
        { id: 'doc2', password: 'password2' },
        { id: 'doc3', password: 'password3' },
        { id: 'doc4', password: 'password4' },
        { id: 'doc5', password: 'password5' }
    ];
    
    return doctors.some(doctor => doctor.id === doctorId && doctor.password === password);
}
