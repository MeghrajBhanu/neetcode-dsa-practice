from collections import defaultdict
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d=defaultdict(int)
        for i in range(0,len(nums)):
            
            if target-nums[i] in d.keys():
                return [d[target-nums[i]],i]
            d[nums[i]]=i
            
        return [-1,-1]
