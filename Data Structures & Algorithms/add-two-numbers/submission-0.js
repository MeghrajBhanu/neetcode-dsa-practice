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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
    
   
    let head=new ListNode(0)
    let carry=0
    let newhead=head

    while(l1 || l2){
        let sum=carry
        if(l1){
            sum+=l1.val
            l1=l1.next
        }
        if(l2){
            sum+=l2.val
            l2=l2.next
        }
       
        carry=Math.floor(sum/10)
        sum=sum%10;
         console.log("sum",sum,carry)
        head.next=new ListNode(sum)
        head=head.next
        
    }
    if(carry!==0){
        head.next= new ListNode(carry)
    }
    return newhead.next;
    
};
    }

