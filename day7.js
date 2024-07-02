// Q -> Pelendrome or not 
// let s = "NamaN"; //5
// let s1 = "rohan"
// // floor(5/2) ->2


// let start = 0;
// let end = s1.length-1;
// let flag = 0;
// while(start<Math.floor(s1.length/2) )
//     {
//         if(s1[start]!=s1[end])
//             {
//                 flag = 1;
//                 console.log("not pelendrome")
//                 break;
//             }
//             start++;
//             end--;
//     }
//     if(flag==0)
//         {
//             console.log("pelendrome")
//         }


// let s = "rohan ";  adding two strings
// let s2 = "sharma";
// let s3 = s+s2;
// console.log(s3)

// let s1 = "Rohaan";           convert string to array
//   let s = s1.split("");

// console.log(s)

// let st = 0;
// let end = s.length-1;

// while(st< Math.floor(s.length/2))
//     {
//         // swap(s[st],s[end]);
//         let temp = s[st];
//         s[st]=s[end];
//         s[end]=temp;
//         st++;
//         end--;
//     }
//     console.log(s);

// // let new_str = s.join('');   to  convert array  into sting 
// // console.log(new_str)
// let new_str = "";
// for(i = 0 ;i<s.length;i++)
//     {
//            new_str+=s[i];
//     }
//     console.log(new_str)



// let string1 = "NAMAA";
// let arr = string1.split("");


// let st = 0;
// let end = arr.length-1;

// while(st< Math.floor(arr.length/2))   // reverse 
//     {
//         // swap(s[st],s[end]);
//         let temp = arr[st];
//         arr[st]=arr[end];
//         arr[end]=temp;
//         st++;
//         end--;
//     }
//     let reversed = arr.join("");
//     let flag = 0;
//   // comparing 
//     for(let i =0;i<reversed.length;i++)
//         {
//             if(string1[i]!=reversed[i])
//                 {
//                     flag = 1;
//                 }
//         }
//         if(flag ==1)
//             {
//                 console.log("not peneldrone")
//             }
//             else 
//             {
//                 console.log("peneldrone")
//             }