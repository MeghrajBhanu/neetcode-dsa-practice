class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let map= new Map()
        let ans=[]
        function getAll(curr){
            if(curr.length===nums.length){
                ans.push([...curr])
                return
            }
            for(let i=0;i<nums.length;i++){
                if(!map.get(i)){
                    map.set(i,true)
                    curr.push(nums[i])
                    getAll(curr)
                    map.set(i,false)
                    curr.pop()
                }
            }

        }
        getAll([])
        return ans;
    }
}
