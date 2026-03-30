class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subsets=[]
        function getsubsets(i,current){
            if(i>=nums.length){
                subsets.push([...current])
                return;
            }
            //pick
            current.push(nums[i])
            getsubsets(i+1,current)

            //notpick
            current.pop()
            getsubsets(i+1,current)

        }
        getsubsets(0,[])
        return subsets
    }
}
