// diff btw funvtion defination function statement function expression and function declaraton anaonimous function arrow function 

// car()
// function car()
// {
//     //statements
// }


// let bmw = function (){          // function expression 
//     //anonymous functions    
//  }
//  bmw()

//   var arrow = ()=>{          //   Fat arrow functiion () => {}  explicit 
//      return 5
//   }

// var arrow = ()=>(
      
// );
 
//   console.log(arrow())
//   arrow funtion with implicit return / explicit return 


// function fun()
// {
//    return function()
//    {
//     return 5;
//    }
// }
// var a = fun();
// a()
// console.log(fun()())


// javascipt is a syncronnus single threaded language ?
//   for(i=0;i<1000000;i++)   syncronous nature
//   {

//   }
//   console.log("hi")

 fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
    response.json().then((json)=>{
      console.log(json)
    })
})

async function ()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await  res.json()
}


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))


// fetch()
// setTimeout()

// promice - is an object which will be eventually fullfileed 