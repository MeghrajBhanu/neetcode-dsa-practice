class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l,r=0,len(heights)-1
        maxx=0

        while l<r:
            water = abs(r-l)*min(heights[l],heights[r])
            maxx=max(maxx,water)
            if heights[l]>heights[r]:
                r-=1
            else:
                l+=1 
        return maxx