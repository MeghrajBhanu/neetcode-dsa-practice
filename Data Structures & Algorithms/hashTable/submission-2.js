class Node{
    constructor(key,val){
        this.key=key;
        this.val=val;
        this.next=null
    }
}
class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity=capacity;
        this.map=Array(this.capacity).fill(null);
        this.size=0;
    }
    hash(key){
        return key % this.capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let index=this.hash(key)
        let head=this.map[index]
        if(!head){
            this.map[index]=new Node(key,value)
            this.size+=1

        }else{
            while(head.next){
                if(head.key==key){
                    head.val=value;
                    return;
                }
                head=head.next;
            }
            if (head.key === key) {
    head.val = value;
    return;
}
            head.next=new Node(key,value)
            this.size+=1
        }
        if(this.size/this.capacity >=0.5){
            this.resize()
        }

    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let hash=this.hash(key)
        let head=this.map[hash] 
        while(head){
            if(head.key==key)return head.val
            head=head.next
        }
        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let hash=this.hash(key)
        let head=this.map[hash] 
        let prev=null
        while (head){
            if(head.key==key){
                if (prev === null) {
                    this.map[hash] = head.next;
                } else {
                    prev.next = head.next;
                }
                this.size--;
                return true;
            }
            prev=head
            head=head.next
        }
        return false
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }

    /**
     * @return {void}
     */
    resize() {
        const oldMap = this.map;
        this.capacity *= 2;
        this.map = Array(this.capacity).fill(null);
        this.size = 0;

        for (let node of oldMap) {
            while (node) {
                this.insert(node.key, node.val);
                node = node.next;
            }
        }
    }
}
