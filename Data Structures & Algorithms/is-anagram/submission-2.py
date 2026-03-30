from collections import defaultdict
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!=len(t):
            return False
        c=defaultdict(int)
        for ch in s:
            c[ch]+=1
        for ch in t:
            c[ch]-=1
        for v in c.values():
            if v!=0:
                return False
        return True