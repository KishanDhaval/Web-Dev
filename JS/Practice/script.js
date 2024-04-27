let btn1=document.querySelector(".btn")
let curr="light"
btn1.addEventListener("click",()=>{
    if(curr=="light"){
        document.querySelector("body").style.backgroundColor="black"
        curr="dark"
    }
    else{
        document.querySelector("body").style.backgroundColor="white"
        curr="light"
    }
})

