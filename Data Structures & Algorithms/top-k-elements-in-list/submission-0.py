import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d={}
        for num in nums:
            if num in d:
                d[num]+=1
            else: d[num]=1
        myheap=[]
        heapq.heapify(myheap)
        for num in d.keys():
            heapq.heappush(myheap,(d[num],num))
            if len(myheap)>k:
                heapq.heappop(myheap)
        ans=[]
        for i in range(k):
            ans.append(heapq.heappop(myheap)[1])
        return ans



        

        