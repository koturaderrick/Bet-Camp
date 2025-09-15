document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    // Password strength indicator
    passwordInput.addEventListener('input', function() {
      const password = passwordInput.value;
      let strength = 0;
      
      if (password.length >= 8) strength += 20;
      if (password.match(/[a-z]+/)) strength += 20;
      if (password.match(/[A-Z]+/)) strength += 20;
      if (password.match(/[0-9]+/)) strength += 20;
      if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) strength += 20;
      
      strengthBar.style.width = strength + '%';
      
      if (strength < 40) {
        strengthBar.style.background = '#e53e3e';
        strengthText.textContent = 'Weak password';
      } else if (strength < 80) {
        strengthBar.style.background = '#d69e2e';
        strengthText.textContent = 'Medium strength';
      } else {
        strengthBar.style.background = '#38a169';
        strengthText.textContent = 'Strong password';
      }
    });
    
    // Form validation
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm').value;
      
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      
      // In a real application, you would submit the form to a server here
      alert('Account created successfully! Redirecting to login...');
      // window.location.href = 'login.html';
    });
  });