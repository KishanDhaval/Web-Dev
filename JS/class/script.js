class car{
    constructor(brand){
        this.brand=brand
        console.log(brand)
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
    // setbrand(brand){
    //     this.brand=brand
    // }
}


class parent{
    constructor(name){
        console.log("parant constructor " + name)
    }
    hello(){
        console.log("hello from parant")
    }
}
// inheritence is perform
class child extends parent{
    constructor(name){
        console.log("before invoking parant constructor")
        super(name) //use of super key word
        super.hello()
        console.log("child constructor"+ name)
    }
    hello(){
        console.log("hello from child")
    }
}

let maruti=new car("swift")
maruti.start()
let toyota=new car("toyota")

// inharitance use
let inherite=new child("kishan")
inherite.hello()