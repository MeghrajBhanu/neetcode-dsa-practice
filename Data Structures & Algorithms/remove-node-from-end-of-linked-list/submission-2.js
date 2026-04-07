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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let first=head,second=head
        while(n-- && first){
            first=first.next
        }
        if(!first)return head.next
        let prev=null
        while(first){
            prev=second
            second=second.next
            first=first.next
        }
        prev.next=second.next
        return head

    }
}
