class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d={}
        for mystr in strs:
            count=[0]*26
            for i in mystr:
                count[ord(i)-ord("a")]+=1
            if tuple(count) in d.keys():
                d[tuple(count)].append(mystr);
            else: d[tuple(count)]=[mystr]
        return list(d.values())
        
        