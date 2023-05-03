var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

function validateRegister() {
  let useridRe = document.getElementById("useridRe").value;
  if (useridRe.trim() == "") {
    alert("tên người dùng không được để trống");
    return false;
  }
  let email = document.getElementById("email").value;
  if (email.trim() == "") {
    alert("email không được đẻ trống");
    return false;
  }
  let pwdRe = document.getElementById("pwdRe").value;
  if (pwdRe.trim() == "") {
    alert("Bạn phải nhập mật khẩu!");
    return false;
  }
  let confirmpassword = document.getElementById("confirmpassword").value;
  if (pwdRe != confirmpassword) {
    alert("Mật khẩu không khớp, vui lòng nhập lại");
    return false;
  }
  alert("Đăng ký thành công!");
  return true;
}

$(document).ready(function () {
  $("#register").submit(function () {
    var useridRegister = $("#useridRe").val();
    var pwdRegister = $("#pwdRe").val();
    var emailRegister = $("#email").val();
    localStorage.setItem("useridRe", useridRegister);
    localStorage.setItem("pwdRe", pwdRegister);
    localStorage.setItem("email", emailRegister);
  });

  $("#login").submit(function (e) {
    var enteredUserid = $("#useridLog").val();
    var enteredPass = $("#pwdLog").val();

    var storedUserid = localStorage.getItem("useridRe");
    var storedPass = localStorage.getItem("pwdRe");

    if (enteredUserid == storedUserid && enteredPass == storedPass) {
      alert("You are logged in!");
      localStorage.setItem("isLoggedIn", true);
      window.location.replace("../home/index.html");
    } else {
      alert("Username and Password do not match!");
      e.preventDefault();
    }
  });
});
