class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let d=new Map()
        for (let i of nums) {
            if(d.has(i)){
                return true
            }
        else{

            d.set(i, 1)
        }
            }
        
        return false

}
}
