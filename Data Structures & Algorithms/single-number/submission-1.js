class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
       let curr=nums.reduce((acc,curr)=>{
    return acc^curr
   },0)
   return curr
    }
}
