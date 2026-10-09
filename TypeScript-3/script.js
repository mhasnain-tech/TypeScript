"use strict";
// Class and Constructor 
Object.defineProperty(exports, "__esModule", { value: true });
// class User{
// public name;
// public email;
// public age;
// constructor (n:string , e:string ,a:number) {
// this.name = n;
// this.email = e;
// this.age = a
// }
// }
// let u1 = new User("Muhammad Hasnain" , "codermhasnain@gmail.com" , 17);
// console.log(u1);
// class Bottle {
//     constructor (public name:string , public price : number , public material : string) {
//     }
// }
// let b1 = new Bottle("Sting" , 90 , "Plastic")
// let b2 = new Bottle("Sting Yellow" , 200 , "Plastic-Polythene")
// console.log(b1,b2);
// class Laptop {
//     constructor (protected name:string , protected model : string , protected price:number) {
//     }
// }
// class Icecream extends Laptop{
//     constructor (public name:string , public model : string , public price:number) {
//    super(name,model,price)
//     }
// }
// let l1 = new Laptop("Dell" , "3452" , 80000);
// let i2 = new Icecream("Cornetto" , "Mango" , 90)
// console.log(l1,i2);
// function foo(a:string,b = 90) {
//     console.log(a,b);
// }
// foo("Pakola" );
// class Student {
//     constructor (private name:string , private email:string , private age:number) {
//      this.name = "Ponka"
//     }
// }
// let s1 = new Student("Muhammad Hasnain" , "codermhasnain@gmail.com" , 17);
// let s2= new Student("Muhammad Hamza" , "codermhamza@gmail.com" , 37);
// console.log(s1,s2);
// class Admin extends Student {
//     constructor (name:string,email:string,age:number) {
//     super(name,email,age)
//     }
// }
// let a1 = new Admin("Hasan" , "codermhasan@gmail.com" , 81);
// console.log(a1);
// function greet(name: string, title?: string): string {
//   if (title) {
//     return `Hello, ${title} ${name}!`;
//   }
//   return `Hello, ${name}!`;
// }
// // Calling the function with only the required parameter
// console.log(greet("Alice")); 
// // Output: Hello, Alice!
// // Calling the function with both parameters
// console.log(greet("Bob", "Dr.")); 
// // Output: Hello, Dr. Bob!
// function OptionalParameter(name:string , title? : string) {
// if (title) {
//     return `Hello , ${title} ${name}`
// }
//     return `Hello ${name}`
// }
// console.log(OptionalParameter("Muhammad Hasnain"));
// console.log(OptionalParameter("Hasnain" , "Sr."))
