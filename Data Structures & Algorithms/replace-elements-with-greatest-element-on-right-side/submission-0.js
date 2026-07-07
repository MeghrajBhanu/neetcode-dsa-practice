class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max=-1;
        let n=arr.length;
        let nums=new Array(n);
        for(let i=n-1;i>=0;i--){
            nums[i]=max;
            max=Math.max(max,arr[i])
        }
        return nums
    }
}
