let heading=document.querySelector(".heading")


let k
let setHeck=(setNextData)=>{
    return new Promise(()=>{
        setTimeout(()=>{
            k="."
            heading.innerText+=` ${k} `
            if(setNextData){
                setNextData()
            }
        },1000)
    })
}


HeckSetting=()=>{
    setHeck( ()=>{
        setHeck(()=>{
            setHeck(()=>{
                setHeck(()=>{
                    reset()
                    HeckSetting()
                })
            })
        })
    })
}
   
HeckSetting()

let reset=()=>{
    heading.innerText="Hacking"
}


let obj={
    a:1,
    b:2,
    c:3,
}

let {a,b}=obj
console.log(a,b)