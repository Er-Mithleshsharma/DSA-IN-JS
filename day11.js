// what is a callback function 

//->   a callback function is function which is passed inside another function

// setTimeout(function () {
//   console.log("hi")
// },5000)
// console.log("hi");


// function callback()
// {
//     console.log("called after task is done")
// }

// function work(callback)
// {
//     //my work
//     console.log("working")
//     callback();
// }
// work(callback)

// // why callback funtions->

// // -> used to handle async task

// // what is async task->


 /// javascript - > call stack mei jo bhi ayega vo execute go jjayegaa

//  3 ways to handle async - > callbacks , promices , async await
//  async function return promices  wich can be handled using .then .catch syntx or async await syntax
let response = fetch("https://api.github.com/users/Er-Mithleshsharma");
console.log(response);

 // three ways to handle ancyc operations in js
// wht is callback ?  ->  set timeout 
// what are promices - > The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// states - pending fullfilled failed 
// async await - > keyword asnyc 
 
// how to make a promice 
let promice = new promice(rse , rej);


// code to handle promices 
using .then .catch
fetch("https://api.github.com/users/Er-Mithleshsharma").then((data)=>{
    console.log(data)
   data.json().then((function(json){
      console.log(json)
   }))
})
// using async await 
async  function githubapi()
{
const data = await fetch("https://api.github.com/users/Er-Mithleshsharma");
const json = await data.json();
console.log(json)
}