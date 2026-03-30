class Solution:
    def twoSum(self, num: List[int], target: int) -> List[int]:
        start=0
        end=len(num)-1
        while start<end:
            ans=num[start]+num[end]
            if ans==target:
                return [start+1,end+1]
            elif ans>target:
                end-=1
            else: start+=1
        return [-1,-1]
