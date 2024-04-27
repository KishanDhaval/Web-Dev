// // simple use of callback functions

// function sum(a,b){//normal function
//     console.log("sum : " + (a+b))
// }

// let calculator=(a,b , sumfunction)=>{ //arrow function
//     sumfunction(a,b)
// }

// // calling calulator function and passing sum function with it 
// calculator(1,2,sum)//withot paranthises
// calculator(5,2 ,(a,b)=>{//initialise fuction at calling time
//     console.log("mul : " +a*b)
// })





// // callback nasting and to overcome this promisis is  use
// function getdatabyid(id,getnextdata){
//     setTimeout(()=>{
//         if(getnextdata){
//             getnextdata()
//         }
//         console.log("data"+id)
//     },2000)
// }


// // this is called nasting callback and more use of this is become difficult to understand
// getdatabyid(1,()=>{
//     getdatabyid(2 , ()=>{
//         getdatabyid(3,()=>{
//             getdatabyid(4)
//         })
//     })
// })
























// let setdata=(data,setnextdata)=>{
    

//     setTimeout(()=>{
//         if(setnextdata){
//             setnextdata()
//         }
//         console.log("data : "+data)
//     },2000)
// }

// setdata(1,()=>{
//     setdata(2,()=>{
//         setdata(3)
//     })
// })

