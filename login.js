// Toggle between forms
function toggleForm(formType) {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    if (formType === "login") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    } else {
      signupForm.style.display = "block";
      loginForm.style.display = "none";
    }
  }
  
  // Login functionality
  function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    if (email && password) {
      alert("Login successful!");
    } else {
      alert("Please provide valid credentials.");
    }
  }
  
  // Signup validation
  function signupUser() {
    const email = document.getElementById("signupEmail").value;
    const mobile = document.getElementById("signupMobile").value;
    const password = document.getElementById("signupPassword").value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,20}$/;
  
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }
  
    if (!mobileRegex.test(mobile)) {
      alert("Invalid mobile number");
      return;
    }
  
    if (!passwordRegex.test(password)) {
      alert("Password must include uppercase, lowercase, and a number.");
      return;
    }
  
    alert("Signup successful!");
  }
  