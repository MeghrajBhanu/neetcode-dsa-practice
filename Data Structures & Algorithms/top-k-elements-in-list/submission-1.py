import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d={}
        freq=[[] for i in range(len(nums)+1)]
        for num in nums:
            if num in d:
                d[num]+=1
            else: d[num]=1
        for num,c in d.items():
            freq[c].append(num)
        res=[]
        for i in range(len(freq)-1,0,-1):
            for num in freq[i]:
                res.append(num)
                if len(res)==k:
                    return res

        


        

        