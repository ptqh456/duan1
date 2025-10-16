function openLogin() {
  document.getElementById("loginForm").style.display = "flex";
  document.getElementById("registerForm").style.display = "none";
}

function openRegister() {
  document.getElementById("registerForm").style.display = "flex";
  document.getElementById("loginForm").style.display = "none";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
}

function checkForm() {
  let pass = document.getElementById("pass").ariaValueMax;
  if (pass.length < 5) {
    alert("Mật khẩu ít nhất 5 ký tự!");
    return false;
  }
  return true;
}
