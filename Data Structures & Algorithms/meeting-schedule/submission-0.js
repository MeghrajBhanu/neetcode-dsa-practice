/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   } 
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length<=0)return true
        intervals.sort((a,b)=>a.start-b.start)
        let last_time=intervals[0].end
        for(let i=1;i<intervals.length;i++){
            if(intervals[i].start<last_time){
                return false
            }else{
                last_time=intervals[i].end
            }
        }

        return true
    }
}