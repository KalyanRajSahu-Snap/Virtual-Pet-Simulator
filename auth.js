function showSignup() {
    document.getElementById("loginForm").style.display = "none"
    document.getElementById("signupForm").style.display = "block"
  }
  
  function showLogin() {
    document.getElementById("signupForm").style.display = "none"
    document.getElementById("loginForm").style.display = "block"
  }
  
  function signup() {
    const username = document.getElementById("signupUsername").value
    const password = document.getElementById("signupPassword").value
  
    if (username && password) {
      localStorage.setItem(username, password)
      alert("Signup successful! Please login.")
      showLogin()
    } else {
      alert("Please enter both username and password.")
    }
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value
    const password = document.getElementById("loginPassword").value
  
    if (username && password) {
      const storedPassword = localStorage.getItem(username)
      if (storedPassword === password) {
        localStorage.setItem("currentUser", username)
        window.location.href = "pets.html"
      } else {
        alert("Invalid username or password.")
      }
    } else {
      alert("Please enter both username and password.")
    }
  }
  
  