document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const doctorId = document.getElementById('doctorId').value;
            const password = document.getElementById('password').value;

            if (validateLogin(doctorId, password)) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                alert('Invalid Doctor ID or Password');
            }
        });
    }
});

function validateLogin(doctorId, password) {
    const doctors = [
        { id: 'Colin', password: 'colin' },
        { id: 'Reshav', password: 'reshav' },
        { id: 'Benya', password: 'benya' },
        { id: 'Mikhael', password: 'mikhael' },
        { id: 'doc5', password: 'password5' }
    ];
    
    return doctors.some(doctor => doctor.id === doctorId && doctor.password === password);
}