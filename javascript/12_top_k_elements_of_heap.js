// Find top k elements with heap

/*
JavaScript does not have any built in support - it is recommended
that you have another language ready in case you need to use a heap
*/

// However, here is an example of how you can build your own min heap class

class Heap {
    constructor() {
        this.data = [];
    }

    heapify(nums) {
        
        for (let num of nums) {
            this.push(num);
        }
    }

    length() {
        return this.data.length;
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i) {
        return i*2+1;
    }

    getRightChildIndex(i) {
        return i*2+2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(val) {
        this.data[this.data.length] = val;
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIdx = this.data.length-1;

        while (this.data[currentIdx] < this.data[this.getParentIndex(currentIdx)]) {
            this.swap(currentIdx, this.getParentIndex(currentIdx));
            currentIdx = this.getParentIndex(currentIdx);
        }
    }

    poll() {
        const maxValue = this.data[0];

        this.data[0] = this.data[this.data.length-1];
        this.data.length--;
        this.heapifyDown();
    
        return maxValue;
    }

    heapifyDown() {
        let currentIdx = 0;

        while (this.data[this.getLeftChildIndex(currentIdx)] != undefined) {
            let smallestChildIdx = this.getLeftChildIndex(currentIdx);

            if (this.data[this.getRightChildIndex(currentIdx)] != undefined && this.data[this.getRightChildIndex(currentIdx)] < this.data[this.getLeftChildIndex(currentIdx)])  {
                smallestChildIdx = this.getRightChildIndex(currentIdx);
            }

            if (this.data[currentIdx] > this.data[smallestChildIdx]) {
                this.swap(currentIdx, smallestChildIdx);
                currentIdx = smallestChildIdx;
            } else {
                return;
            }
        }
    }

}