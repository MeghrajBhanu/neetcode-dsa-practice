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
     * @return {boolean}
     */
    isPalindrome(head) {
        let fast=head,slow=head;
        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        let reversehead=slow
        
        let prev=null
        while(reversehead){
            let nextt=reversehead.next
            reversehead.next=prev
            prev=reversehead
            reversehead=nextt
        }
        let curr=head
        while(curr && prev){
            if(curr.val!==prev.val)return false
            curr=curr.next
            prev=prev.next
        }
        return true

    }
}
