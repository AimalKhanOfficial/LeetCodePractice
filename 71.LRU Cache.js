/**
 * @param {number} capacity
 */
let LRCCacheKeeper = null;
let capacityCopy = null;
let LRUKeySequence = [];
var LRUCache = function (capacity) {
    LRCCacheKeeper = new Map();
    capacityCopy = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!LRCCacheKeeper.has(key)) return -1;

    let index = LRUKeySequence.indexOf(key);
    LRUKeySequence.splice(index, 1);
    LRUKeySequence.push(key);

    return LRCCacheKeeper.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    //there are still spaces left
    if (LRCCacheKeeper.size >= capacityCopy) {
        //this isn't properly working - need to review
        //console.log('>> about to delete', LRUKeySequence.shift())
        LRCCacheKeeper.delete(LRUKeySequence.shift());
    }
    LRCCacheKeeper.set(key, value);
    if (!LRUKeySequence.includes(key)) {
        LRUKeySequence.push(key);
    } else {
        let index = LRUKeySequence.indexOf(key);
        LRUKeySequence.splice(index, 1);
        LRUKeySequence.push(key);
    }
    //console.log('>> put done', LRCCacheKeeper, LRCCacheKeeper.size, capacityCopy)
};

//failing on ["LRUCache","put", "put", "get",  "put",  "get",  "put",  "get",  "get",  "get"]
//values     [[2],       [1,0], [2,2],  [1],   [3,3],   [2],   [4,4],   [1],    [3],    [4]]
//expected = [null,      null,null,0,null,-1,null,-1,3,4]
//output   = [null,      null,null,0,null,2,null,0,3,4]


let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log('should returns 1', lRUCache.get(1));    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log('should returns -1 (not found)', lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log('should returns -1 (not found)', lRUCache.get(1));    // return -1 (not found)
console.log('should returns 3', lRUCache.get(3));    // return 3
console.log('should returns 4', lRUCache.get(4));    // return 4
