/////////////////

part 1 :
--------


variable and constant are use to store data 
variable esa data jiski value badal sakte he
constant esa data jiski value badal nahi sakte

undifind : exist but not know
nondefine : non exist

Hoisting =>
var b; 
console.log(b)
b=12;
-->here console will print 12 instead of undifind is  hoistion nature of js


Data Type =>
primitive : number , String , null , undifind etc.
reference : () , {} , []


Function =>
function : code which we use many time with the help of name of function
type :
    1 - function name(parameter){  <---function defination
            code here
        }
    2 - var/const name=(parameter)=>{
            code here
        }
    3 - function(){   <--anonumus function
            code here
        }    

name(argument) <--calling fuction



Array => many element with same type 
arr.pop()  <--to remove element from end
arr.shift() <-- to remove element from start
arr.push()  <--to add element at end
arr.unshift()  <--to add element at beggening
arr.splice(index , n) <---it start removing element from index and remove n nnumber of element | if n=1 then it will remove element which at index , else if ( n=2 ) then it remove element which at index and index+1

behind the seen array is work as object 



Object =>use when aap ek identity k bare me bahut kuch likhna ho

blank object :
     var nameOfObject = {}
filled object : 
    var nameOfObject = {
                    age : 24, 
                    name : "Kishan", 
                    study : "graduated"
    }
access : nameOfObject.age  <--return age which is 24
access and change  : nameOfObject.age=19  <---this will change age from 24 to 19
delete nameOfObject.age   <--this will delete age from nameOfObject object


//////////////////////////////////////////////////////////////////////////

Part : 2
--------

var : js version es5
     var is function scoped
     ex :   
        fuction name(){
            for(var i=0  ;  i<5 ; i++){
                console.log(i)
            }
            console.log(i)
        }
        here outer for console will print last value of i cause here i is var
        because of var is fuction scoped we can access it in its parant function
    var adds it self to window object



let , const : js version es6
            var is brases [],{},() scoped
            it's not posible like var
            they does not adds it self to window object  

here 1+2+3+4+5
first 1+2
second 3+3 
third 6+4 like vise 
    here in computer these middle operation which is not actual answer is stored in heep memory <---hip
    and final aanswer and all other data and variables are stored in stack <---stack memory


for reference variavle
var a= [1,2,3,4,5]
var b = [...a] <--coping a to b by using spread object
var b = a  <---it will not copying  b has reference of a

falsy value : 0 , false , undifind , NaN , document.all
truthy value : falsy k sivay ki all value


forech : it is used only on array

var a = [ 1,2,3,4,5,6,7]

a.forEach(function(ele)){  <---actualy in forEach the element is just copy of array it is not change in real array | it take copy anf perform operation 
    console.log(ele)  
}

forin : mainly used on object
var obj ={
    name = " hersh",
    age =19
}
for(var key in obj){
    console.log(obj[key])
}



callback fuctions
    setTimeout(function (){
        code
    } , 2000)


in js function are first class means we can treate as value
    fuction abcd(a){  <---function defination
        a()           <---it will print hey
    }
abcd(function(){console.log("hey)})  <--function call
Ex : setTimeout function


Higher order functions : 
    function which either accept functoin as parameter or function which return function
    Ex : forEach is higher order function


constuctor funciton : is use when we want lot of element with same properties
function abcd(){
    this.i=12
    this.j=53
}
var  a1 = new abcd()
var  a2 = new abcd()
var  a3 = new abcd()
we can pass argument and take parameter in constructor function



New : jab bhi new lagta hai ek blank object bantahe imaginery

immediatly invocked fuction expression
(function(){
    var a=19
})()
here this a variable is not directly accessyble  | variable in iife function is by default private

to access this private variable
var ans = (function(){
    var a 

    return{
        getter : function (){
            console.log(a)
        }
        setter : fuction(ele){
            a = ele
        }
    }
})()
ans.setter(19)  <---to access private element or variable
ans.getter()  <---to access private element or variable
            
