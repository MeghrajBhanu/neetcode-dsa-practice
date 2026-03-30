class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sum=nums.reduce((acc,curr)=>{
        return acc+curr
    },0);
    let n= nums.length;
    let sum_of_n= (n*(n+1))/2
    return sum_of_n-sum
    }
}
