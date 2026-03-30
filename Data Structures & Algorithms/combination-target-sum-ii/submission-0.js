class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
        let n=nums.length
        nums.sort((a,b)=>a-b)
        let all=[]
        function getcombinations(i,sum,current){
            //base case
            if(sum===target){
                all.push([...current])
                return
            }
            if(i>=n || sum > target) return

            //take
            current.push(nums[i])
            getcombinations(i+1,sum+nums[i],current)

            //not take
            current.pop()

            while(i+1<nums.length && nums[i]===nums[i+1]){
                i+=1
            }
            getcombinations(i+1,sum,current)
            
           
        }
        getcombinations(0,0,[])
        return all
    }
}
