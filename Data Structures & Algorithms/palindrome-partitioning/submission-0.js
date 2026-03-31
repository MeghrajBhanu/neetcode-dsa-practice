class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
     
    partition(s) {
        let all=[]
        function isPalindrome(start,end,strr){
        while(start<=end){
            if(strr[start]!==strr[end])return false
            start++;
            end--;
        }
        return true

    }
        function getAll(i,stru){
            if(i===s.length){
                all.push([...stru]);
                return;

            }
            for(let idx=i;idx<s.length;idx++){
                if(isPalindrome(i,idx, s)){
                    stru.push(s.slice(i,idx+1))
                    getAll(idx+1,stru)
                    stru.pop()
                }
            }

        }
        getAll(0,[])
        return all
    }
}
