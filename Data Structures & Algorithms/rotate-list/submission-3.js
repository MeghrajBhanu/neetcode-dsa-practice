/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
        if(!head || !head.next || k===0)return head
        let len=0
        let ref=head
        while(ref){
              len+=1
            ref=ref.next
          
        }
        k=k%len
        if(k===0) return head
        let fast=head
        let slow=head
        for(let i=0;i<k;i++){
            fast=fast.next

        }
        while(fast.next){
            fast=fast.next
            slow=slow.next
        }
        let newhead=slow.next
        slow.next=null
        fast.next=head
        return newhead
    }
}
