  // logo click
  let logo = document.querySelector("#navbar>img")
  logo.style.cursor="pointer";
  logo.addEventListener("click",function(){
  document.location.href = "index.html"
  })

  document.querySelector("form").addEventListener("submit",formfun)
  

  function formfun(e){
      e.preventDefault()
      let fname = document.querySelector("#fname").value
      let lname = document.querySelector("#lname").value
      let email = document.querySelector("#email").value
      let pass = document.querySelector("#pass").value

      console.log(fname,lname,email,pass)

      if(fname=="" || lname=="" || email=="" || pass==""){
          alert("please fill correct data")
      }else if(pass.length<8){
          alert("password must be 8 char.")
      }else{
          
          localStorage.setItem("email",email)
          localStorage.setItem("pass",pass)
          popup()
      }

      
  }

  // pop up

  document.querySelector(".btn__purple").addEventListener("click",function(){
      document.location.href = "log.html"
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