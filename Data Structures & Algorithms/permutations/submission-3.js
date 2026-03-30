class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        
        let arr=[]
        function getAll(i){
            if(i===nums.length){
            arr.push([...nums]);
            return;
        }
        for(let idx=i;idx<nums.length;idx++){
            [nums[idx], nums[i]] = [nums[i], nums[idx]];

            getAll(i+1);

            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }

    }
    getAll(0)
    return arr;

       
    }
}