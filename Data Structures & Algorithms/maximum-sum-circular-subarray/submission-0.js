class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globalmax=nums[0]
        let globalmin=nums[0]
        let currmax=0
        let currmin=0
        let total=0
        for(let n of nums){
            // console.log(n)
            currmax=Math.max(currmax+n,n);
            currmin=Math.min(currmin+n,n);
            globalmax=Math.max(globalmax,currmax);
            globalmin=Math.min(globalmin,currmin);
            total+=n;

        }
        if(globalmax<0)return globalmax
        else return Math.max(globalmax,total-globalmin)
    }
}
