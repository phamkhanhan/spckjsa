let bagach = document.querySelector(".fa-bars");
let khoibentrai = document.querySelector(".khoibentrai");
console.log(bagach);
bagach.addEventListener("click", function () {
  khoibentrai.style.display = "block";
});

let x = document.getElementById("x");
x.addEventListener("click", function () {
  khoibentrai.style.display = "none";
});

let subject_name = document.querySelectorAll(".subject_name");
let subject_image = document.querySelector(".subject_image");
subject_image.src = JSON.parse(localStorage.getItem("current_page")).userImage;

for (let i = 0; i < subject_name.length; i++) {
  subject_name[i].innerText = JSON.parse(
    localStorage.getItem("current_page")
  ).userName;
}



let nut = document.querySelector(".nut")
nut.addEventListener("click", function (){
  window.location.href = "trangcourse.html";
}
)
