const main= document.querySelector(".main")
const cursor = document.querySelector(".cursor")


main.addEventListener("mousemove" , (value)=>{
        // console.log(value)
        // console.log(value.x)
        // console.log(value.y)
        cursor.style.left= value.x+"px" 
        cursor.style.top= value.y+"px"
})