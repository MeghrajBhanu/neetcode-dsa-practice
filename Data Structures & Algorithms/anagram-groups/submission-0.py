class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
       
        d={}
        for s in strs:
            count=[0]*26
            for i in s:
                count[ord(i)-ord("a")]+=1
            if tuple(count) in d.keys():
                d[tuple(count)].append(s)
            else: d[tuple(count)]=[s]
        return list(d.values())

