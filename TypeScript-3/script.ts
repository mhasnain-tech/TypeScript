// Class and Constructor 

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




// class User {

//     constructor (public name:string , public age:number , public gender?:string) {

//     }
// }


// let u1 = new User("Muhammad Hasnain" , 17 , "male")
// console.log(u1);


// Optional Properties 

// class Student {

//     constructor(public name:string , public id:string , public age?:number) {
     
//     }
// }


// let s1 = new Student("Muhammad Hasnain" , '#446863' , 17);
// // console.log(s1);



// class Teacher extends Student {

//     constructor (name:string , id:string , age?:number) {
//    super(name,id,age);
// }
// public isPresent = true;
// public hasPeriod = true;
// public whichSubTeacher = 'Mathematics'
// }

// let t1 = new Teacher("Sir Ali" , '#930213' , 38);
// console.log(t1);



// Parameter Properties / Default 

// class User {

//     constructor (public name:string ,public  email:string , public  password:string = "hasnainzainab@123") {

//     }
// }

// let u1 = new User("Muhammad Hasnain" , "codermhasnain@gmail.com");
// console.log(u1);


// class Admin {

//     constructor(public name:string , public age:number) {

//     }

    
//     public set setAge(v : number) {
//         this.age = v;
//     }
    
// }


// let a1 = new Admin("Hansain" , 18);

// a1.setAge = 90;
// console.log(a1);




// class Icecream {


//     constructor (public name:string , public price?:number , public flavour?:string) {

//     }
// }

// let i1 = new Icecream("Cornetto");
// console.log(i1);




// Getters and Setters 

// class Admin {

//     constructor ( public name:string , public id:string ) {
    
 
//     }
    
    
//     public get Idpoll() : string {
//         return this.id
//     }
    
// }


// let a1 = new Admin("Muhammad Hasnain" , "#446863");
// console.log(a1.Idpoll);


// class User {
  
//     constructor (public userName:string , public userAge?:number , public gender?:string) {

//     }
    
    
//     public set AgeGet(v : number) {
//         this.userAge = v;
//     }
    

    
//     public set iisis(v : string) {
//         this.gender = v;
//     }
    
// }


// let u1 = new User("Muhammad Hasnain");
// u1.AgeGet = 90;
// u1.iisis = 'male'
// console.log(u1.userAge);




// function foo (a:number , b:(val:string) => void):void {

//  b("Hasnain")


// }

// foo(12,(val:string) => {
//     console.log(val);
    
// })


// function foo2 (a:number , b:(c:number) => void) {

//     b(39393939);
//     console.log(a);
    
// }


// foo2(12, (val:number) => {
//     console.log(val);
    
// })


// function returnOne (a:number , b:(c:string) => void):void {
//     b("Muhammad Hasnain")
// }


// returnOne(12,(name) => {
//     console.log(name);
    
// })


// function foo(val1:number , val2:(n1:number , n2:number) => void){

// val2(12,43)
// }


// foo(12 , (n1,n2) => {
//     console.log(n1 + n2);
    
// })




// function foo(...args:number[]) {
// console.log(args);

// }

// foo(1,2,3,4,5)



// function Students (...students:string[]) {
// console.log(students);

// }


// Students("Muhammad Hasnain" , "Umair" , "Hasan" , "Nofil" , "Ponka" , "Foo")




// Function Overloading 


// function signature 


// function sum (a:number , b:number):void
// function sum (a:string , b:string):void

// function sum (a:number | string , b:number | string):void {
// console.log(a + " " +  b);

// }





// sum(12,32)
// sum("Hasnain" , "Umair")




// function kuchBi (a:string , b:string):void
// function kuchBi (a:number , b:number):void


// function kuchBi (a:number | string, b:number | string):void {
// if(typeof a == "number" && typeof b == "number"){

//     let neww  = a.toString();
//     console.log(neww);
    
// }


// if(typeof a == "string" && typeof b == "string"){
//     console.log(a + " " + b);
    
// }
// else{
//     throw new Error("Maza Nhi Aya Ponke!")
// }
// }

// kuchBi("Muhammad" , "Hasnain")
// kuchBi(32,12)


// Generic Funtions 


// function kuchBi<T> (a:T) {
// console.log(a);

// }

// kuchBi("string")
// kuchBi(12)
// kuchBi(true)
// kuchBi(false)
// kuchBi(undefined)
// kuchBi(null)



// function foo<T> (a:T) {
// console.log(a);

// }


// foo("Void")
// foo(12)
// foo(true)
// foo(false)
// foo(undefined)
// foo([])
// foo({})
// foo(1)




// Generic Interfaces 

// interface User<T> {
// name: string,
// age:number
// }


// function foo<T>(obj:User<number>) {
// console.log(obj);

// }

// foo({name:"Hasnain" , age:17})
// foo({name:"ddd" , age:17})


// Generic Classes

// class Admin<T>  {

//     constructor (public name:T){
    
//     }
// }


// let new1 = new Admin("Hasnain")
// let new2 = new Admin(43);
// console.log(new1,new2);




    // Type asserts


// function foo<T> (a:T, b:T) {

//     return "Srting" as T
// }

// console.log(foo("jjj" , "Ponka"));




// type Casting 
// function foo (a:string , b:number){
//     if(typeof a == "string"){
//         console.log(a);

//         let n1 = Number(a)
//         console.log(n1);
        
        
//     }
//     if(typeof b == "number"){
//         console.log(b);

//         let str = String(b)
//         console.log(str);
        
        
//     }
// }


// foo("45", 89)



// function foo(a:string , b:number):void {

//     if(typeof a == "string"){
//     console.log(a);
    
//         let n1 = Number(a);
//         console.log(n1);
        
//     }
//     if(typeof b == "number"){
//     console.log(b);
    
//       let n2 =   String(b);
//       console.log(n2);
      
//     }
// }


// foo("22" , 12)



// Revision 

// class is like a blueprint that help to make us unique products , bottles or many more


class User {

    constructor (public name:string , public email:string , public age?:number) {
     
    }
}

let u1 = new User("Muhammad Hasnain" , "codermhasnain@gmail.com" , 17);
console.log(u1);
