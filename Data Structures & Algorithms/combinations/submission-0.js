class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let arr=[]
        function getcombinations(i,current){
            if(current.length===k){
                arr.push([...current])
                return;
            }
            for(let idx=i;idx<=n;idx++){
                current.push(idx)
                getcombinations(idx+1,current)
                current.pop()
            }

        }
        getcombinations(1,[])
        return arr;
    }
}
