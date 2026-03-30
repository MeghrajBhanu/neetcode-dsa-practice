class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mymap=new Map()
        for(let str of strs){
            let count=new Array(26).fill(0);
            for(let j of str){
                count[j.charCodeAt(0)-'a'.charCodeAt(0)]+=1
            }
            const key=count.join(",")
            if(!mymap[key])mymap[key]=[str]
            else{
                mymap[key].push(str)
            }
        }
        return Object.values(mymap);
    }
}
