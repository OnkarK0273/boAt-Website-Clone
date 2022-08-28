// logo click
let logo = document.querySelector("#navbar>img")
logo.style.cursor="pointer";
logo.addEventListener("click",function(){
    document.location.href = "index.html"
})

// form function

 document.querySelector("form").addEventListener("submit",funlog)

 function funlog(e){
    e.preventDefault()
    let email = document.querySelector("#email").value
    let pass = document.querySelector("#pass").value

    let localemail = localStorage.getItem("email")
    let localpass =  localStorage.getItem("pass")

    if(email == localemail && pass == localpass ){
        document.querySelector(".alert").removeAttribute("id")
    
        popup()

    }else if(email != localemail && pass != localpass){
       
        document.querySelector(".alert").setAttribute("id","alerttr")
    }else{
        
        document.querySelector(".alert").setAttribute("id","alerttr")
    }

   
 }

  // pop up

  document.querySelector(".btn__purple").addEventListener("click",function(){
        document.location.href = "index.html"
    })

function popup(){
    // const trigger = document.querySelector('#cardclick');
    const modalWrapper = document.querySelector('.modal__wrapper');
    const closeBtn = document.querySelector('.close');

    // trigger.addEventListener('click', function(){
    // });
    openModal();

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

}