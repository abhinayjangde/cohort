// video = https://youtu.be/7_WxOdeCv9k?si=YRnrzdqXhue9cR6W

class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.length = 0
        this.map = new Map() // <key> : <node address>
        this.head = null
        this.tail = null // LRU node
    }

    #removeNode(node){

        if(!node){
            return
        }
        if(node.prev){
            node.prev.next = node.next
        }
        if(node.next){
            node.next.prev = node.prev
        }
        if(node === this.head){
            this.head = node.next
        }
        if(node === this.tail){
            this.tail = node.prev
        }
    }
    get(key){
        if(!this.map.has(key)) return null
        const node = this.map.get(key)
        this.#removeNode(node)
        node.prev = null
        node.next = this.head
        if(this.head != null){
            this.head.prev = node
        }
        this.head = node
        return node.value
    }
    put(key,value){
        // check if we have capacity
        if(this.length === this.capacity){
            if(!this.map.has(key)){
                this.#removeNode(this.tail)
                this.length -= 1
            }
        }

        // Case : If the key is alredy in cache store
        if(this.map.has(key)){
            // remove the older node
            this.#removeNode(this.map.get(key))
        }
        const node = {
            next: this.head,
            prev: null,
            key,
            value,
        }
        this.map.set(key, node)
        if(this.head != null){

            this.head.prev = node
        }
            this.head = node;

        if(this.tail === null){
            this.tail = node
        }
        this.length += 1

    }
    debug(){
        let current = this.head
        const arr = []
        while(current != null){
            arr.push(current)
            current = current.next
        }
        return arr.reduce((acc,curr)=>acc.concat(`-->[ [${curr.key}] : [${curr.value}]]-->`),'')
    }
}

const cache = new LRUCache(3)
cache.put(1,1)
cache.put(2,4)
cache.put(3,9)
// cache.put(4,16)
// cache.put(5,25)
// cache.put(512,25)



console.log(cache.debug())
console.log(cache.get(2))
console.log(cache.debug())
cache.put(9,90)
console.log(cache.debug())
