class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    //[1,2],[3,5],[9,10]
    //[6,7]
    insert(intervals, newInterval) {
        let n=intervals.length;
        let i=0
        let output=[]
        while(i<n && newInterval[0]>intervals[i][1]){
            output.push(intervals[i])
            i++;
        }
        while(i<n && newInterval[1]>=intervals[i][0]){
            newInterval[0]=Math.min(newInterval[0],intervals[i][0])
            newInterval[1]=Math.max(newInterval[1],intervals[i][1])
            i++;
        }
        output.push(newInterval)
        while(i<n){
            output.push(intervals[i])
            i++;
        }
        return output

    }
}
