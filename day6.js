// find all repeating 

let arr= [1,1,2,3,4,4,5,2];
let ans={};

for(let i =0;i<arr.length;i++)    // o()
    {
        let item = arr[i];
        if(ans[item])
            {
                ans[item]++;
            }
            else 
            {
                ans[item]=1;
            }
    }
       for(let key in ans)
        {
            if(ans[key]==1) // non repeating  
            console.log(key);
        }

        for(let key in ans)
            {
                if(ans[key]>1) // repeating  
                console.log(key);
            }
    // 1 + 2 + 3 + 4 +...+n = n+1/2  --> o(n)-> single loop

    // 1*n + 2*n ... n*n -> n2