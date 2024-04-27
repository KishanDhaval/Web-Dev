let api=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("DATA "+ id)
            resolve("success")
        }, 2000);
    })
}


// this structure is called immediately invocked function expression
(async()=>{
    await api(1)
    await api(2)
    await api(3)
    await api(4)
    await api(5)
    await api(6)
})()