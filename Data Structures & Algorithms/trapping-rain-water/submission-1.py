class Solution:
    def trap(self, height: List[int]) -> int:
        pre=[0]*len(height)
        suff=[0]*len(height)
        pre[0] = height[0]
        for i in range(1,len(height)):
            pre[i]=max(pre[i-1],height[i])
        suff[len(height) - 1] = height[len(height) - 1]
        for i in range(len(height)-2,-1,-1):
            suff[i]=max(suff[i+1],height[i])
        print(pre,suff)
        water=0
        for i in range(len(height)):
            water+=min(pre[i], suff[i]) - height[i]
        return water