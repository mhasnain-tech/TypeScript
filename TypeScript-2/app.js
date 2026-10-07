"use strict";
// let a= 5;
// console.log(a);
Object.defineProperty(exports, "__esModule", { value: true });
// let a:unknown = 12.33333;
// console.log(a);
// if(typeof a === "string"){
// console.log(a.charAt(3));
// }
// if(typeof a === "number"){
//     console.log(a.toFixed(1));
// }
// let arr:[number,number,number,number , number] = [1,2,3,4,5];
// console.log(arr);
// Tuples 
// let arr:[number,string,boolean] =  [1,"" , true]
// let arr:([number | boolean | undefined]) = [1,true,undefined]
// console.log(arr);
// enum UserRoles {
//     admin = "ADMIN",
//     guest = "GUEST"
// }
// console.log(UserRoles.guest);
// console.log(UserRoles.admin);
// enum StatusCodes {
//     Bad_Request = 401,
//     Not_Found = 404,
//     success = 200
// }
// console.log(StatusCodes.success);
// console.log(StatusCodes.Bad_Request);
// console.log(StatusCodes.Not_Found);
// function add ():number {
// console.log("ali");
// return 13
// }
// console.log(add());
// let a:unknown;
// a= 40;
// a = "lasan"
// if(typeof a === "number"){
//     a.toString()
// }
// if(typeof a === "string"){
//     a.charAt(3)
//     console.log(a);
// }
// Define Interface also define object shape 
// interface Userobj {
//     name : string,
//     email : string,
//     password : string
// }
const obj = {
    name: "Muhammad Hasnain",
    email: "codermhasnain@gmail.com",
    password: "hasnain@123"
};
// function foo (object : Userobj):void {
// console.log(object);
// }
// foo(obj)
// interface User {
//     name : string,
//     email : string,
//     password : string
// }
// interface Admin extends User {
//     isAdmin : boolean;
// }
// function foo (data : Admin) {
// console.log(data);
// }
// foo(obj)
// Union In TypeScript 
// type val = number | boolean | string ;
// let a:val = 12;
// a = "kela";
// a = true
// console.log(a);
// InterSection In TypeScript 
// type arg = number & boolean;
// let a = 23;
// console.log(a);
// a = true;
// console.log(a);
// Class Basic In TYpescript 
// class bottle{
//     constructor (public name: string , public price : number) {
//     }
// }
// let b1 = new bottle("Aquafina" , 1000);
// let b2 = new bottle("Pakola" , 230)
// console.log(b1,b2);
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let u1 = new User("Muhammad Hasnain", 17);
let u2 = new User("Muhammad Hasan", 23);
console.log(u1, u2);
