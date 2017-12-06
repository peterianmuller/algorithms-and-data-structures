// Queue is a linear data structure that has a size, oldestIndex and newestIndex properties.
// It also has a enqueue method that adds new values and a dequeue method that removes the
// most distantly added properties

class Queue {
	constructor(){
		this.oldestIndex = 0;
		this.newestIndex = 0;
		this.storage = {};
	}
	size(){
		return this.newestIndex - this.oldestIndex;
	}
	enqueue(x){
		this.storage[this.newestIndex] = x;
		this.newestIndex++;
	}
	dequeue(){
		if (!this.size()) {
		  return null;   	
		}
		let oldestAdded = this.storage[this.oldestIndex];
		delete this.storage[this.oldestIndex];
		this.oldestIndex++;
		return oldestAdded;
	}

}