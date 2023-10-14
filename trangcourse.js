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


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Môn Toán',
        image: 'toan.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'Môn Văn',
        image: 'https://img.daibieunhandan.vn/Files/Images/2020/10/10/1651730543667.png',
        price: 120000
    },
    {
        id: 3,
        name: 'Môn Ngoại Ngữ',
        image: 'https://lh4.googleusercontent.com/Or6U-FxKtlX0ahSpEtEUSQ5Oc2eU7qHyLUUEGzdeYbeRW_3Q5wXC0m8J0CtCXVrDUIRbcGiR1aLCJHykWrolHLorttrob5CNaEHhU59zoizcDt4fq4j6pBYi4n92BUzsJ1hyyXPztFuBhSIu4SJO6dI',
        price: 220000
    },
    {
        id: 4,
        name: 'Môn Hóa',
        image: 'https://lhu.edu.vn/Data/News/640/images/thi_thpt_quoc_gia_2019_4_7.jpg?v1.1.2',
        price: 123000
    },
    {
        id: 5,
        name: 'Môn Lý',
        image: 'https://aztest.vn/uploads/news/2020/on-luyen-thi-trac-nghiem-1.png',
        price: 320000
    },
    {
        id: 6,
        name: 'Môn Sinh',
        image: 'https://hoc24h.vn/files/news/2017/04/27/de-thi-thu-tot-nghiep-thpt-mon-sinh-hoc.jpg',
        price: 120000
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
