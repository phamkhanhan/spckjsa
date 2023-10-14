// function validate() {
//     var u = document.getElementById("username").value;
//     var p1 = document.getElementById("password").value;
//     var p2 = document.getElementById("password-repeat").value;


//     if (u == "" && p1 == "" && p2 == "") {
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
//     }
//     if (p2 == "") {
//         alert("Vui lòng xác minh mật khẩu!");
//         return false;
//     }else {
//         alert("Bạn đã điền đủ thông tin")
//         window.location.href="formdnhap.html"
//     }

  
// }

// let click = document.getElementById("nut")
// click.addEventListener("click", validate)

const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "formdnhap.html";
  }
});