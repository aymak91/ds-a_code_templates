// Build a trie

// note: using a class is only necessary if you want to store data at each node.
// otherwise, you can implement a trie using only hash maps.
class TrieNode {
    constructor() {
        // you can store data at nodes if you wish
        this.data = null;
        this.children = new Map();
    }
}

let fn = words => {
    let root = new TrieNode();
    for (const word of words) {
        let curr = root;
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
        }

        // at this point, you have a full word at curr
        // you can perform more logic here to give curr an attribute if you want
    }

    return root;
}