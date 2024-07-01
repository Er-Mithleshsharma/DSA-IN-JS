 // binary search 
 let arr  = [1,2,3,4,5,6,7];
 let start = 0;
 let end = arr.length-1;
  let target = 12;
 while(start<=end)
    {
        let mid = Math.floor(start+end/2);
        
        if(target == arr[mid])
            {
                console.log("target found");   
                break;
            }
        else if(target>arr[mid]) 
            {
                   start = mid+1;
            } 
        else 
        {
             end = mid-1;
        }      

    }


    // 1 2 3 

    // target - 4       st = 3 end = 2    


    // 1 lakh   50 25 12  6 3 1500 700    

