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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l1=list1
        let l2=list2
        let dummy=new ListNode(0)
        let tail=dummy
        while(l1 && l2){
            if(l1.val<=l2.val){
                tail.next=l1
                tail=tail.next
                l1=l1.next;

            }else if(l1.val>l2.val){
                tail.next=l2
                tail=tail.next
                l2=l2.next;
            }
        }
        if(l1)tail.next=l1
        if(l2)tail.next=l2
        return dummy.next
    }
}
