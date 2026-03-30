class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums)==0:return 0
        if len(nums)==1: return 1
        nums.sort()
        maxx=1
        currmax=1
        prev=nums[0]
        for i in range(1,len(nums)):
            if nums[i]==prev+1:
                maxx+=1
                currmax=max(maxx,currmax)
            elif nums[i]==prev:
                continue
            else: 
                currmax=max(maxx,currmax)
                maxx=1
            prev=nums[i]
        return currmax




        
