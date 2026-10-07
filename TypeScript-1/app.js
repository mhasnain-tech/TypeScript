"use strict";
// let a:number = 6;
// console.log(a);
// let str:string = "Muhammad Hasnain";
// str = "Ponka"
// console.log(str);
// let input = true;
// var boolData:boolean = !!!!input;
// console.log(boolData);
// var num:unknown = "Hansna";
// num = 12.324;
// num =true;
// if(typeof num === "number"){
//     console.log(num.toFixed(1));
// }
// if(typeof num === "boolean"){
//    console.log(num.valueOf());
// }
// function foo():number {
//   let a = 4;
//   let b = 5;
//   console.log(a + b);
//   return 20
// }
// console.log(foo());
// function abc():string {
//     let a = "Hasnain";
//     console.log(a);
//     return "HalaHaveli"
// }
// console.log(abc());
// let numsArr: [
//   number,
//   number,
//   number,
//   boolean,
//   undefined,
//   string,
//   string,
//   number,
// ] = [1, 2, 3, true, undefined, "ponka", "lala", 23.3];
// console.log(numsArr);
// let arr:[boolean,boolean,string,number,string,undefined,null] = [true,false,"lala",23,"jani",undefined,null]
// let arr:number[] = [1,2,4,32]
// let arr:string[] =  ["kaka",or any string value ];
// Enums  Enumenator
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Bad_Request"] = 400] = "Bad_Request";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Abandond"] = 410] = "Abandond";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Bad_Request);
