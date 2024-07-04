// Function to print ASCII values of characters
// function printAsciiValues(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(`ASCII value of '${str[i]}' is ${str.charCodeAt(i)}`);
//         // console.log("AScii Valies of ",str)
//     }
// }

// // Example usage
// let inputStr = "Hello, World!";
// printAsciiValues(inputStr);

// let a = 'Mithlesh 959200';
//  let b = a.split(" ")
// console.log(b)


// let arr = [1,2,3];
// // console.log(arr.slice(starting point , length))


// // Remove spaces
// let s = "My name is rohan";
// let ans="";
// for(let i =0;i<s.length;i++)
// {
//     if(s[i]!=" ")
//     ans+=s[i];
// }
// console.log(ans)

//Remove characters from a string except alphabets
// 97 -122 chraters
// let s = "take12% *&u ^$#forward";
// let ans ="";
// for(let i =0;i<s.length;i++)
// {
//    let codenum = s.charCodeAt(i)
//     if(codenum>=97 && codenum<=122)
//     {
//       ans+=s[i];
//     }

// }
// console.log(ans)

// let s = "r*o*h*a*n";
// let arr = s.split("*");  // to covert into array
// console.log(arr)
// let new_s = arr.join("") // to convert back to string
// console.log(new_s)

// sum a string 
// let s ="12345";
// reverse of a number
// let number = parseInt(s);
// let sum =0;
// while(number != 0)
// {
//     let lastdigit = number%10; 
//    sum= sum+lastdigit
//     number = Math.floor(number/10);
// }
// console.log(sum)


// // first and last index
// let arr=[1,2,3,4,3,3,6];
// //first index
// let fi = -1;
// for(let i =0;i<arr.length;i++)
// {
//     if(arr[i]==3)
//     {
//         fi = i;
//         break;
//     }
// }

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var searchRange = function(nums, target) {
//     //first index
//     let fi = -1;
//     for(let i =0;i<nums.length;i++)
//     {
//         if(nums[i]==target)
//         {
//             fi = i;
//             break;
//         }
//     }
//     let li = -1;
//     for(let i =0;i<nums.length;i++)
//     {
//         if(nums[i]==target)
//         {
//             li = i;
//         }
//     }
//     let ans =[fi,li];
//     return ans;
    
//     };