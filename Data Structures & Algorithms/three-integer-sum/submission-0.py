from collections import defaultdict
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        s=defaultdict()
        for i in range(len(nums)):
            j=i+1
            k=len(nums)-1
            while j<k:

                summ=nums[j]+nums[k]
                if summ==-nums[i]:
                    if (nums[i],nums[j],nums[k]) not in s.keys():
                        s[(nums[i],nums[j],nums[k])]=1
                    j+=1
                    k-=1
                elif summ > -nums[i]:
                     k-=1
                else:
                    j+=1
        res=[]
        for i in s.keys():
            res.append(list(i))
        return res



