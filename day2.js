let arr = [8 ,7 ,1 ,6 ,5 ,9];    // 0 , 1 , 2 ,3, 4 , 5     len - 6     len/2->3   
// arr.sort((a, b) => a - b)
// 1 5 6 7 8 9
// first half 
// for(let i = 0;i<arr.length/2;i++)
//     {
//         console.log(arr[i]);
//     }
// let last = arr.length-1;

// for(let i = last ; i>=arr.length/2;i-- )   // i -- 3  i--
//     {
//        console.log(arr[i]);
//     }

// i = 0 ; i<arr.length i++


// sort function is not defined for numeric value ... string 



// let arr1 = [15,6,1,4,7];
//  to find median first sort the array 
let arr1 =[1,4,6,7,15];   -- odd

let mid = Math.ceil((arr1.length)/2);  
console.log(mid);                                  //        2.5    floor - 2 ceil - 3