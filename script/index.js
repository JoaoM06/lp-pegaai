
//Buttons
const home = document.querySelector("#home")
const info = document.querySelector("#info")
const contact = document.querySelector("#contact")
const upBtn = document.querySelector(".upBtn")

//Elements
const featuresContainer = document.querySelector(".featuresContainer")
const page = document.querySelector("*")
const contactElement = document.querySelector(".contact")

//eventListeners
//Nav bar
home.addEventListener("click", ()=>{
    page.scrollIntoView({
        behavior: "smooth",
    })
})

info.addEventListener("click", ()=>{
    featuresContainer.scrollIntoView({
        behavior: "smooth",
    })
})

contact.addEventListener("click", ()=>{
    contactElement.scrollIntoView({
        behavior: "smooth",
    })
})

//Buttons

upBtn.addEventListener("click", ()=>{
    page.scrollIntoView({
        behavior: "smooth",
    })
})