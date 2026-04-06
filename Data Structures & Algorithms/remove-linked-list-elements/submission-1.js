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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
         let newhead=head;
    while(newhead && newhead.val==val){
        newhead=newhead.next
    }
     head=newhead;
     let prev=null;
    while(newhead){
        if(newhead.val==val){
            prev.next=newhead.next
            newhead=newhead.next
        }else{
        prev=newhead
        newhead=newhead.next
        }
    }
    return head;
    }
}
