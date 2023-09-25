// const bint = document.querySelector("button")

// bint.addEventListener("click", ()=>{

//     window.open("https://www.google.com/search?client=opera-gx&q=window+js&sourceid=opera&ie=UTF-8&oe=UTF-8", "_blank")

// })


const check = document.querySelector("#myCheckbox")
const senha = document.querySelector("#senha")

check.addEventListener("click",()=>{
    if(senha.type == "password"){
        senha.type = "texte"
    }
    else{
        senha.type = "password"
    }
})