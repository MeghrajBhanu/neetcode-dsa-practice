class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        let all=[]
        function getSubsets(i,current){
           
                all.push([...current]);
              
            for(let idx=i;idx<nums.length;idx++){
                if(idx>i && nums[idx]===nums[idx-1])continue
                current.push(nums[idx])
                getSubsets(idx+1,current)
                
                current.pop()
              

            }
        }
        getSubsets(0,[])
        return all;
    }
}
