// function validate() {
//     var u = document.getElementById("username").value;
//     var p1 = document.getElementById("password").value;


//     if (u == "" && p1 == "") {
//         alert("Vui lòng nhập đủ thông tiin")
//         return false;
//     }

//     if (u == "") {
//         alert("Vui lòng nhập tên!");
//         return false;
//     }

//     if (p1 == "") {
//         alert("Vui lòng nhập mật khẩu!");
//         return false;
//     }else {
//         alert("Bạn đã điền đủ thông tin")
//         window.location.href="trangchu.html"
//     }
// }

// let click = document.getElementById("nut")
// click.addEventListener("click", validate)

const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "trangchu.html";
    } 
    else {
      alert("Đăng nhập thất bại")
    }
  }
});