let myset = new Set();

// let arr = [1,1,2,2,3,3,4,4,4];


// for(let i =0;i<arr.length;i++)
//     {
//         let item = arr[i];
//         myset.add(item);
//     }

//     // console.log(myset)
//     for (let value of arr) {        // for off loop
//         console.log(value);
//       }

// without using set  
let arr = [1,1,2,2,3,3,4,4,4];
let ans = new Array();
for(let i =0 ;i<arr.length;i++)
    {
        console.log("i->"+arr[i]+"   i+1 ->",arr[i+1])
        if(arr[i]==arr[i+1])
            {
              console.log("skip");
                continue;
            }
            else 
            {
                console.log("add")
                ans.push(arr[i]);
            }

    }
    // let lastelement = arr[arr.length-1];
    // ans.push(lastelement);
    console.log(arr[100]);