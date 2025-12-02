// class Queue{
//     constructor(){
//         this.queue=[]
//     }

//     enqueue(value){
//         this.queue.push(value)
//     }


//     dequeue(){
//         if(this.isEmpty()){
//             return "queue is empty"
//         }

//         return this.queue.shift()
//     }

//     front(){
//         if(this.isEmpty()){
//             return "queue is empty"
//         }

//         return this.queue[0]
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }
     
//     dispaly(){
// console.log(this.queue)
//     }
    
// }

// const q= new Queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.dispaly()




// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//         this.size=0
//     }


//     enqueue(value){
//         let node= new Node(value)
       

//         if(this.rear === null){
//             this.front=node
//             this.rear=node
//         }else{
//             this.rear.next=node
//             this.rear= node
//         }
//         this.size++
//     }


//     dequeue(){
//         if(this.front===null)return null


//         let removed= this.front
//         this.front =this.front.next


//         if(this.front === null){
//             this.rear = null
//         }
//         this.size--
//         return removed.value
//     }

//     peek(){
//          if (this.front === null) return null;
//     return this.front.value;
//     }


//       isEmpty() {
//     return this.front === null;
//   }


//   print(){
//     let curr=this.front
//     let listvalue=""

//     while(curr){
//         listvalue+=` ${curr.value}`
//         curr=curr.next
//     }
//     console.log(listvalue)
//   }
  
// }

// let q = new Queue();

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.dequeue()
    
// q.print()


// class QueueUsingStacks {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

   
//     enqueue(value) {
//         this.stack1.push(value);
//     }

//     dequeue() {
        
//         if (this.stack1.length === 0 && this.stack2.length === 0) {
//             return null;
//         }

       
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }

     
//         return this.stack2.pop();
//     }


//     front() {
//         if (this.stack1.length === 0 && this.stack2.length === 0) return null;

//         if (this.stack2.length > 0) return this.stack2[this.stack2.length - 1];

//         return this.stack1[0]; 
//     }


//     isEmpty() {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }


//     size() {
//         return this.stack1.length + this.stack2.length;
//     }
// }


// let q = new QueueUsingStacks();

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// console.log(q.dequeue()); 
// console.log(q.front());   
// console.log(q.dequeue());
// console.log(q.dequeue()); 
// console.log(q.dequeue()); 


// class Queue{
//     constructor(){
//         this.queue=[]
//     }

//     enqueue(value){
//         this.queue.push(value)
//     }

//     dequeue(){
//         return this.queue.shift()
//     }

//     peek(){
//         return this.queue[0]
//     }

//     isEmpty(){
//         return this.queue.length===0
//     }

//     print(){
//         for(let i=0;i<this.queue.length;i++){
//             console.log(this.queue[i])
//         }
//     }



//     secondsmall(){
    

//         if(this.queue.length <2)return null



//         let small=Infinity
//         let second= Infinity


//         for(let num of this.queue){
//             if(num < small){
//                 second=small
//                 small=num
//             }else if(num < second && num!==small){
//                 second=num
//             }
//         }
//         return (second  === Infinity)?"no":second
//     }
// }


// let myQueue = new Queue();

// myQueue.enqueue(10)
// myQueue.enqueue(20)
// myQueue.enqueue(40)
// myQueue.enqueue(70)

// myQueue.print()
// console.log(myQueue.secondsmall())




// class dequeue{
//     constructor(){
//         this.item=[]
//     }
    
//     insertfront(value){
//         this.item.unshift(value)
//     }
//     insertrear(value){
//         this.item.push(value)
//     }
//     deletebegin(){
//         if(this.isEmpty())return "its empty"
//         this.item.shift()
//     }
//     deletelast(){
//         if(this.isEmpty())return "its empty"
//         this.item.pop()
//     }
//     getfront(){
//         return this.isEmpty?"its empty":this.item[0]
//     }
//     getrear(){
//         return this.isEmpty?"its empty":this.item[item.length-1]
//     }
//     isEmpty(){
//         return this.item.length===0
//     }
//     display(){
//         console.log(this.item.join("<-"))
//     }
// }


// let lt = new dequeue()
// lt.insertfront(10)
// lt.insertfront(20)
// lt.insertfront(30)
// lt.insertrear(40)
// lt.display()
// lt.deletelast()
// lt.deletebegin() 
// lt.display()











// class CircularQueue {
//   constructor(size) {
//     this.size = size;
//     this.queue = new Array(size);
//     this.front = -1;
//     this.rear = -1;
//   }

//   isEmpty() {
//     return this.front === -1;
//   }

//   isFull() {
//     return (this.rear + 1) % this.size === this.front;
//   }

//   enqueue(value) {
//     if (this.isFull()) {
//       console.log("Queue is full");
//       return;
//     }

//     if (this.isEmpty()) {
//       this.front = 0;
//     }

//     this.rear = (this.rear + 1) % this.size;
//     this.queue[this.rear] = value;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//       return;
//     }

//     let removed = this.queue[this.front];

//     if (this.front === this.rear) {
//       this.front = -1;
//       this.rear = -1;
//     } else {
//       this.front = (this.front + 1) % this.size;
//     }

//     return removed;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//       return;
//     }

//     let i = this.front;
//     let result = "";

//     while (true) {
//       result += this.queue[i] + " ";
//       if (i === this.rear) break;
//       i = (i + 1) % this.size;
//     }

//     console.log(result);
//   }
// }

// let cq = new CircularQueue(5);   

// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40)
// cq.enqueue(50)
// cq.dequeue()
// cq.enqueue(60)
// cq.print(); 









// class PriorityQueue{
//     constructor(){
//         this.queue=[]
//     }
//     enqueue(value,priority){
//         let newItem = {value,priority};
//         let added = false;
//         for(let i=0;i<this.queue.length;i++){
//             if(priority<this.queue[i].priority){
//                 this.queue.splice(i,0,newItem)
//                 added=true;
//                 break
//             }
//         }
//         if(!added)this.queue.push(newItem)
//     }
//     dequeue(){
//         if(this.isEmpty())return "its empty"
//         return this.queue.shift()
//     }
//     peek(){
//         return this.isEmpty()?"its over":this.queue[0]
//     }
//     display(){
//         console.log(this.queue.map(item=>`${item.value}(${item.priority}`))
//     }
// }

// let lt = new PriorityQueue(3)
// lt.enqueue("jobhi",2)
// lt.enqueue("amrith",1)
// lt.enqueue("aksa",3)
// lt.display()

