document.querySelector(".material-icons").addEventListener("click",function(){
    document.location.href = "index.html"
})
document.querySelector(".material-icons").style.cursor = "pointer"



// local data
let data = JSON.parse(localStorage.getItem("adddata"))

document.querySelector(".item>p>span").innerText = "( "+data.length +" items)"

let total = data.reduce(function(acc,ele){
        return acc + Number(ele.price)
    },0)

document.querySelector("#to").innerText = total

data.forEach(function(ele,inbox){

    let cardbox = document.createElement("div")
    cardbox.classList.add("cardbox")
    

    // img div

    let imgdiv = document.createElement("div")
    imgdiv.style.border = "0px solid black"
    imgdiv.style.height = "100%"
    imgdiv.style.width = "30%"

    let img = document.createElement("img")
    img.setAttribute("src",ele.image_url)
    img.style.width = "100%"
   

    // details div
    let detdiv = document.createElement("div")
        // child1
    let name = document.createElement("p")
    name.innerText = ele.name
        // child2
    let price = document.createElement("p")
    price.innerText = "Rs. "+ele.price+".00"
    price.style.marginTop = "5px"
        // 

    // cancel div
    let candiv = document.createElement("div")
    let i = document.createElement("i")
    i.innerText = "delete"
    i.classList.add("material-icons")
    i.style.color = "red"
    i.style.cursor = "pointer"

    // cancel div event
    i.addEventListener("click",function(){
        cardbox.remove()
        
        data.splice(inbox,1);
        localStorage.setItem("adddata",JSON.stringify(data));

    })

    

    imgdiv.append(img)
    detdiv.append(name,price)
    candiv.append(i)
    cardbox.append(imgdiv,detdiv,candiv)
    document.querySelector(".cont").append(cardbox)
    

    
    
})