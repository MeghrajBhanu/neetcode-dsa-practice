class Solution:

    def encode(self, strs: List[str]) -> str:
        res=""
        for s in strs:
            res+=s+" # ";
       
        return res

    def decode(self, s: str) -> List[str]:
        res=[]
        i=0;
        d=s.split(" # ")
        print(d)
        for i in range(0,len(d)-1):
            res.append(d[i])
        return res




























            
