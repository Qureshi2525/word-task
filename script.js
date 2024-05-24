function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert('Signup successful!');
        showLogin();
    } else {
        alert('Please enter a username and password');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert('Login successful!');
        // Redirect to another page after successful login
        window.location.href = "word.html"; // Change "welcome.html" to the desired page
    } else {
        alert('Invalid username or password');
    }
}

// Update clock every second
const clock = document.getElementById('clock');
 setInterval(() => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 1000);
