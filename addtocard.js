
document.querySelector(".btn__purple").addEventListener("click",function(){
    document.location.href = "log.html"
})

let prodata4 = [
    {
        image_url:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/01_1d174cd4-5898-4449-a249-d414a0205e47_400x.jpg?v=1659966176",
        name: "Boat Air drop",
        price: "1170",
        
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Ab-550_400x.png?v=1639053174",
        name: "Boat Air drop",
        price: "1170",
        
    },
    {
        image_url:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-2_b0b3aa4f-c695-4157-857c-1864c2ac947f_400x.png?v=1629091906",
        name: "Boat Air drop",
        price: "1170",
        
    },
    {
        image_url:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_2_1_400x.png?v=1656914178",
        name: "Boat Air drop",
        price: "1170",
       
    },
]


let addcard = [];

function likeMe1(){
    addcard.push(prodata4[0])

    console.log(addcard)
    localStorage.setItem("adddata",JSON.stringify(addcard))
}
function likeMe2(){
    addcard.push(prodata4[1])

    console.log(addcard)
    localStorage.setItem("adddata",JSON.stringify(addcard))
}
function likeMe3(){
    addcard.push(prodata4[2])

    console.log(addcard)
    localStorage.setItem("adddata",JSON.stringify(addcard))
}
function likeMe4(){
    addcard.push(prodata4[3])

    console.log(addcard)
    localStorage.setItem("adddata",JSON.stringify(addcard))
}


// pop up

const trigger = document.querySelector('#cardclick');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
})

function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}








