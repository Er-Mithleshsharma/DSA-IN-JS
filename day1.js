// js arrays - let ->block scope 

// let arr = [];

// //1-10

for(let i = 0 ; i<=10;i++)
    {
          arr.push(i);
    }

    for(let i = 0 ; i<=10;i++)
        {
              console.log("for loop",arr[i])        // both are known as looping statements
                                         // incriment dec within loop 
        }
        
        let i =0;
        while(i<=10)
            {
                console.log("while loop"+arr[i])  // 0 - first time
                i++; // incriment
            }
    
//    for(initializatrion ; condition ; incriment/dicriment)
//     {
//         // set of statements
//     }
     
    // while(condition)
    //     {
    //         incriment/decriment
    //     }

  // lenier search 
    let key = 6;
   let arr=[1,2,3,4,5,6,7,8,9];
    let flag = 0;
    for(let i =0;i<9;i++)
        {
            if(arr[i] == key)
                {
                    console.log("element found"+i)
                    flag = 1;
                }
        }

        if(flag == 0 )
         console.log("element  not found")
//largest in the array  
//mothod 1 - sort accending  arr[0]
//method 2 - 
let arr1=[11,12,13,4,5,6,7,8,9];
    
let maxi = arr1[0];

for(let i =0;i<8;i++)
    {
       if(arr1[i]>maxi)
        {
            maxi = arr1[i];
        }
    }
    console.log(maxi);

//second smallest                // second largest
// let arr = [2,3,1,6,4]  
// arr.sort()
// console.log(arr[1]);

// reverse an aarray

let arr = [2,3,1,6,4];
let first = 0;
let last = arr.length -1; 
while(first<=last)
    {
        //swapping logic
        let temp = arr[first];
        arr[first]= arr[last];
        arr[last]=temp;
        
    // moving first forward and last backward
        first++;
        last--;
    }
  // printing array 
    for(let i = 0;i<arr.length;i++)
        {
            console.log(arr[i]);
        }
