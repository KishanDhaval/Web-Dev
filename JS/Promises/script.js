// let promises=()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("i am under the promise")
//         resolve("suCCses")
//       //   reject("error")
//    })
// }

// let promise=promises()




//// .then
let getData=(id,nextdata)=>{
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
         console.log("data : " + id)
         resolve("succses")
         if(nextdata){
            nextdata()
         }
      },2000)
   })
}

   getData(1)
   .then((res)=>{
      return getData(2)
   })
   .then((res)=>{
      return getData(3)
   })
   .then((res)=>{
      console.log(res)
   })




// // .catch
// let getData=()=>{
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//          reject("error")
//       },2000)
//    })
// }

// // when reject is there .catch is exiquit
// // otherwise .then is exiquit
// let promise=getData()
// promise.then(()=>{
//    console.log("succsess")
// })
// promise.catch(()=>{
//    console.log("error deteted")
// })