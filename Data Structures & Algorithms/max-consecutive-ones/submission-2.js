class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
     let maxx=0
    let i=0
    let curr=0
    while(i<nums.length){
        if(nums[i]!==1){
           
            curr=0
        }else{
            curr+=1
        }
        maxx=Math.max(maxx,curr)
        i+=1
    }
    return maxx
    }
}
