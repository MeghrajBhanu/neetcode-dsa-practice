class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max=nums[0];
        let currsum=0;
        for(let i=0;i<nums.length;i++){
            currsum=Math.max(currsum+nums[i],nums[i])
            max=Math.max(currsum,max)
        }
        return max
    }
}
