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

function registertest() {
  var id = document.getElementById("userid").value;
  var password = document.getElementById("pwd").value;
  var Email = document.getElementById("email").value;
  var confirmpwd = document.getElementById("cf-pwd").value;

  localStorage.getItem("userid", id);
  localStorage.getItem("pwd", password);
  localStorage.getItem("email", Email);

  //   return true;

  let useridRe = document.getElementById("useridRe").value;
  if (userid.trim() == "") {
    alert("tên người dùng không được để trống");
    return false;
  }
  let email = document.getElementById("email").value;
  if (email.trim() == "") {
    alert("email không được đẻ trống");
    return false;
  }
  let pwdRe = document.getElementById("pwdRe").value;
  if (pwd.trim() == "") {
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

  $("#login").submit(function () {
    var enteredUserid = $("#useridLog").val();
    var enteredPass = $("#pwdLog").val();

    var storedUserid = localStorage.getItem("useridRe");
    var storedPass = localStorage.getItem("pwdRe");

    if (enteredUserid == storedUserid && enteredPass == storedPass) {
      alert("You are logged in!");
    } else {
      alert("Username and Password do not match!");
    }
  });
});
//
var emailArray = [];
var passwordArray = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(e) {
  e.preventDefault();

  regBox.style.visibility = "visible";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "hidden";

  regTab.style.backgroundColor = "rgb(12, 132, 189)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}
function loginTabFun(e) {
  e.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
  forgetBox.style.visibility = "hidden";

  loginTab.style.backgroundColor = "rgb(12, 132, 189)";
  regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}
function forTabFun(e) {
  e.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "visible";

  regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}

function register() {
  var email = document.getElementById("re").value;
  var password = document.getElementById("rp").value;
  var passwordRetype = document.getElementById("rrp").value;

  if (email == "") {
    alert("Email required.");
    return;
  } else if (password == "") {
    alert("Password required.");
    return;
  } else if (passwordRetype == "") {
    alert("Password required.");
    return;
  } else if (password != passwordRetype) {
    alert("Password don't match retype your Password.");
    return;
  } else if (emailArray.indexOf(email) == -1) {
    emailArray.push(email);
    passwordArray.push(password);

    alert(email + "  Thanks for registration. \nTry to login Now");

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById("rrp").value = "";
  } else {
    alert(email + " is already register.");
    return;
  }
}
function login(e) {
  e.preventDefault();

  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;

  var i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Password required.");
      return;
    }
    alert("Password does not match.");
    return;
  } else {
    alert(email + " yor are login Now \n welcome to our website.");

    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";
    return;
  }
}
function forgot(e) {
  e.preventDefault();

  var email = document.getElementById("fe").value;

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  }

  alert("email is send to your email check it in 24hr. \n Thanks");
  document.getElementById("fe").value = "";
}

//

const navbar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
const close = document.querySelector(".close");

console.log(navbar);

navbar.addEventListener("click", function () {
  nav.classList.add("active");
});

close.addEventListener("click", function () {
  nav.classList.remove("active");
});
