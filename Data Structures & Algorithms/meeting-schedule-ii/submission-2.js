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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length===0)return 0
        if(intervals.length==1)return 1
        intervals.sort((a,b)=>a.start-b.start);
        let minheap=new MinPriorityQueue();
        minheap.enqueue(intervals[0].end)

        for(let i=1;i<intervals.length;i++){
            if(intervals[i].start>=minheap.front()){
               minheap.dequeue()
            }
            minheap.enqueue(intervals[i].end)
        }
        return minheap.size();
    }
}
