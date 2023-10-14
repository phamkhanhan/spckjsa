let bagach = document.querySelector(".fa-bars")
let khoibentrai = document.querySelector(".khoibentrai")
console.log(bagach);
bagach.addEventListener("click", function(){

    khoibentrai.style.display = "block"
})


let x = document.getElementById("x")
x.addEventListener("click", function(){
    khoibentrai.style.display = "none"
})