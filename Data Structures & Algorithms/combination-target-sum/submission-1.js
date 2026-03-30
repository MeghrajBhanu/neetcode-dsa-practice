class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    
    combinationSum(nums, target) {
        let n=nums.length
        let allcombinations=[]
        function getcombinations(i,sum,current){
            if(i>=n ){
                if(sum===target)allcombinations.push([...current]);
                return;
            }
            //take
            current.push(nums[i])
            if(nums[i]<=target-sum){
                
                getcombinations(i,sum+nums[i],current);
            }
            //not take
            current.pop()
           
            getcombinations(i+1,sum,current);



    }
        getcombinations(0,0,[])
        return allcombinations;



    }
}
