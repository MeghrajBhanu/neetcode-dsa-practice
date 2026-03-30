class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prod=1
        zeros=0

        for i in nums:
            if i:prod=prod*i
            else: zeros+=1
        if zeros>1: return [0]*len(nums)
        res=[0]*len(nums)
        for i,c in enumerate(nums):
           
            if zeros:
                res[i] = 0 if c else prod
            else:res[i] = prod//c
                
                
            
        return res