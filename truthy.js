/*const userEmail = [];
if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't  have user ");
}*/
// false value
// false , 0,-0, "", null, Nan, undifined, bigInt 0n,

//truthy vlaue
//"false" ,'0' ," ",[],{},function(){}

//if (userEmail.length === 0) {
// console.log("array is empty");
//}

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//   console.log(" obj is empty");
// }

// nullish coalesing operator(??): nill undefined
// let val1;
// // val1 = 5 ?? 10;
// //val1 = null ?? 10;
// // val1 = undefined ?? 15;
// val1 = null ?? 5 ?? 10;

// console.log(val1);

// terniary opertaor
// condition ? true:false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log(" less than 80") : console.log("more tahn 80");
