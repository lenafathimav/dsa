class Node{
     constructor(value){
         this.value=value
         this.next=null
     }
 }
 
 
 class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    append(value){
        const node = new Node(value);
        
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
   
     insert(index,value){
         if(index < 0 || index > this.size){
             return 
         }
         const node = new Node(value)
         if(index === 0){
            node.next=this.head
            this.head=node
         }else{
            
             
             let curr= this.head
             
             for(let i=0;i<index-1;i++){
                 curr=curr.next
             }
             
             node.next=curr.next
             curr.next=node
             this.size++
             
         }
     }
    


      deleteNode(index){
     
     if(  index < 0 || index >= this.size){
         return null
     }
     let remove
     if(index === 0){
          remove=this.head
         this.head=this.head.next
         
     }else{
         
         let curr=this.head
         for(let i=0;i<index-1 ;i++){
             curr=curr.next
         }
         remove=curr.next
         curr.next=remove.next
         
     }
     this.size--
    return remove.value
     
 }


  removeValue(value){
           if(this.isEmpty()){
               return null
           }
           if(this.head.value === value){
               this.head= this.head.next
               this.size--
               return value
           }else{            
               let prev= this.head
               while(prev.next && prev.next.value !== value){
                   prev=prev.next
               }
               if(prev.next){
                   let removeNode= prev.next
                   prev.next=removeNode.next        
                   this.size--
                   return value
               }
               return null
           }
       }
    
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr=this.head
            let listvalue=''
            while(curr){
                listvalue+=` ${curr.value}`
                curr=curr.next
            }
            console.log(listvalue)
        }
    }
}

const list=new Linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.insert(2,15)
list.print()



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
    
//     isEmpty(){
//         return this.size===0
        
//     }
    
//    prepend(value){
//        const node = new Node(value)
//        if(this.isEmpty()){
//            this.head=node
//        }else{
//            node.next=this.head
//            this.head=node
//        }
//        this.size++
//    }
   
//    append(value){
//        const node = new Node(value)
//        if(this.isEmpty()){
//            this.head=node
//        }else{
//            let prev=this.head
//            while(prev.next){
//                prev=prev.next
//            }
//            prev.next=node
//        }
//        this.size++
//    } 
     
//      insertAfter(x,value){
//          if(this.isEmpty()){
//              return 
//          }
         
//          let curr=this.head;
//          while(curr && curr.value !==x){
//              curr=curr.next
//          }
//          if(!curr){
//      console.log(`Value ${x} not found in list`);
//       return;
//          }
         
//          const node = new Node(value)
//          node.next=curr.next;
//          curr.next=node;
//          this.size++
//      }
     
//      insertBefore(x,value){
//          if(this.isEmpty()){
//              return 
//          }
         
//          if(this.head.value===x){
//              const node = new Node(value)
//              node.next=this.head
//              this.head=node
//              this.size++
//              return 
//          }
         
//      let prev = null;
//     let curr = this.head;
//     while (curr && curr.value !== x) {
//       prev = curr;
//       curr = curr.next;
//     }

//     if (!curr) {
//       console.log(`Value ${x} not found in list`);
//       return;
//     }

//     const node = new Node(value);
//     node.next = curr;
//     prev.next = node;
//     this.size++;
//   }
     
      
      
//    print(){
//        if(this.isEmpty()){
//            console.log("list is empty")
//        }else{
//            let curr=this.head
//            let listvalue=''
//            while(curr){
//                listvalue+=` ${curr.value}`
//                curr=curr.next
//            }
//            console.log(listvalue)
//        }
//    }
// }

// const list= new Linkedlist
// list.prepend(5)
// list.append(10)
// list.append(20)
// list.append(30)
// list.print()

// list.insertAfter(5,9)
// list.insertBefore(20,25)
// list.print()


// Print all elements by order & reverse by order
   
//    reverse(){
//            let prev=null;
//            let curr=this.head;
//            let next=null
           
//            while(curr){
//                next=curr.next
//                curr.next=prev
//                prev=curr
//                curr=next
//            }
//            this.head=prev
//        }
       
// Print all elements in reverse order (using recursion)
//   printReverse(node = this.head) {
//     if (node == null) {
//       return;
//     }
//     this.printReverse(node.next);
//     process.stdout.write(node.value + " "); // prints in reverse order
//   }
// }

// Find cycle
//    hasCycle(){
//        let slow=this.head
//        let fast= this.head
       
//        while(fast && fast.next){
//            slow=slow.next
//            fast=fast.next.next
           
           
//            if(slow === fast){
//                return true
//            }
//        }
       
//        return false
//    }


// Write a program to remove duplicates in a sorted singly linked list
//   removeDuplicate(){
//        let curr=this.head
       
//        while(curr && curr.next){
//            if(curr.value === curr.next.value){
//                curr.next=curr.next.next
//            }else{
//                curr=curr.next
//            }
//        }
//    }
    


//  Linked List Palindrome Check.
//  ispal(){
     
//      let arr=[]
//      let curr=this.head
     
//      while(curr){
//          arr.push(curr.value)
//          curr=curr.next
//      }
     
//      let start=0
//      let end=arr.length-1
     
//      while(start<end){
//          if(arr[start]!==arr[end]){
//              return false
//          }
         
//          start++;
//          end--
//      }
     
//      return true
//  }
   



//     findmidremove(){
        
//         if(this.isEmpty()){
//             return null
//         }
        
//         if(!this.head.next){
//             const val=this.head.value
//             this.head=null
//             this.size--
//             return val
//         }
        
//         let slow=this.head
//         let fast=this.head
//         let prev=null
        
//         while(fast && fast.next){
//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }
        
//         prev.next=slow.next
        
//         this.sizee--
        
//         return slow.value
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("lisst is empty")
//         }else{
//             let curr=this.head
//             let listvalue=''
            
//             while(curr){
//                 listvalue+=` ${curr.value}`
//                 curr=curr.next
//             }
//             console.log(listvalue)
//         }
//     }
// }


// const list= new Linkedlist()

// list.append(20)
// list.append(10)
// list.append(10)
// list.findmidremove()
// list.print()

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         const node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//             return;
//         }
//         let curr = this.head;
//         while (curr.next) {
//             curr = curr.next;
//         }
//         curr.next = node;
//     }



//   findnthend(n){
        
//         let length=0
//         let prev=this.head
      
        
//         while(prev){
//             length++
//             prev=prev.next
//         }
      
        
//         if(n > length) return null        
        
//         prev=this.head;
//         for(let i=0;i<length-n;i++){
//             prev=prev.next
//         }
//         return  prev.value
// //     }    


// findnthenddelete(n){
        
//         let length=0
//         let prev=this.head
      
        
//         while(prev){
//             length++
//             prev=prev.next
//         }
      
//       let pos=length-n
//       if(pos < 0) return 
      
//       if(pos === 0){
//           this.head=this.head.next
//           return
//       }
      
//       prev=this.head
      
//       for(let i=0;i<pos-1;i++){
//           prev=prev.next
//       }
//       prev.next=prev.next.next
//     }


 removefromendnth(n){
        
        let dummy= new Node(0)
        dummy.next=this.head
        
        let fast=dummy
        let slow=dummy
        
        for(let i=0;i<=n;i++){
            if(fast){
                fast=fast.next
            }
        }
        
        while(fast){
            fast=fast.next
            slow=slow.next
        }
        
          slow.next=slow.next.next
    }



// removeDuplicatesUnsorted() {
//   if (!this.head) return;

//   let curr = this.head;
//   let prev = null;
//   const seen = new Set();

//   while (curr) {
//     if (seen.has(curr.value)) {
//       prev.next = curr.next; // skip duplicate
//     } else {
//       seen.add(curr.value);
//       prev = curr;
//     }
//     curr = curr.next;
//   }
// }




class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size === 0
    }
    
    
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            
        }else{
            let curr= this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            
        let curr=this.head
        let listvalue=''
        while(curr){
            listvalue+=` ${curr.value}`
            curr=curr.next
        }
        console.log(listvalue)
    }
}
}

    function merge(list1,list2){
        if(!list1.head)return list2
        if(!list2.head) return list1
        
        let curr=list1.head
        while(curr.next){
            curr=curr.next
            
        }
        curr.next =list2.head;
        
        return list1
    }

    let list1 = new LinkedList();
    list1.append(10);
    list1.append(30);
    list1.append(20);

    let list2 = new LinkedList();
    list2.append(15);
    list2.append(5);
    list2.append(25);
    let mergersort=merge(list1,list2)
    mergersort.print()




// deltele(value){
//     if(this.isEmpty()){
//         return
//     }
    
//     let curr=this.head
    
//     while(curr){
//         if(curr.value === value){
            
//             if(this.head === this.tail){
//                 this.head=null
//                 this.tail=null
//             }else if(curr === this.head){
//                 this.head=this.head.next
//                 this.head.prev=null
//             }else if(curr === this.tail){
//                 this.tail=this.tail.prev
//                 this.tail.next=null
//             }else{
//                 curr.prev.next=curr.next
//                 curr.next.prev=curr.prev
//             }
            
//             this.size--
//             return
            
//         }
        
//         curr=curr.next
//     }
// }


 reverse(){
     if(this.isEmpty()){
         return 
     }
     
     let curr=this.head
     let temp=null
     
     while(curr){
         temp=curr.prev;
         curr.prev=curr.next
         curr.next=temp
         
         curr=curr.prev
     }
     
     if(temp){
         this.tail=this.head
         this.head=temp.prev
     }
 }

// removefindmid(){
    
    
//     if(this.size === 1){
//         const value= this.head.value
//         this.head=null
//         this.tail=null
//         this.size--
//         return value
//     }
    
//     let slow =this.head
//     let fast= this.head
    
//     while(fast && fast.next){
//         slow=slow.next
//         fast=fast.next.next
//     }
    
//     if(slow.prev) slow.prev.next=slow.next
//     if(slow.next) slow.next.prev=slow.prev
    
//     if(slow === this.head) this.head=slow.next
//     if(slow === this.tail) this.tail=slow.prev
    
//     this.size--
//     return slow.next
    
 
// }

const list= new DoubleLinkedlist()
list.append(10)
list.append(20)
list.prepend(30)
list.insert(1,15)
list.printF()
list.printB()













 deletefromfirst(){
        if(this.isEmpty()){
            return
        }
       
        if(this.size === 1){
            this.head=null
            this.tail=null
        }else{
            
            
            this.head=this.head.next
            this.head.prev=null
       
            
        }
           
            this.size--
            
           
        }



        deletefromlast(){
            if(this.isEmpty()){
                return
            }
            
            if(this.size === 1){
                this.head=null
                this.tail=null
            }else{
                
                this.tail=this.tail.prev
                this.tail.next=null
            }
            this.size--
            
            
            
        }




         deletelindex(index){
    if(this.isEmpty()){
        console.log("List is empty");
        return;
    }

    if(index < 0 || index >= this.size){
        console.log("Invalid index");
        return;
    }

    // delete first node
    if(index === 0){
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
    // delete last node
    else if(index === this.size - 1){
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    // delete middle node
    else {
        let curr = this.head;
        for(let i = 0; i < index; i++){
            curr = curr.next;
        }

        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
    }

    this.size--;
}



// removeprev(value){
    
    
//     if(this.head.next && this.head.next.value === value){
    
//        this.head=this.head.next
//        this.size--
//        return
//     }
//     let prevprev=null
//     let prev=this.head
//     let curr=this.head.next
//     while(curr && curr.value !== value){
//         prevprev=prev
//         prev=curr
//         curr=curr.next
//     }
    
//     if(!curr){
//         return
//     }
//     prevprev.next=curr
//     this.size--
    
    
// }





evennumber(){
    
    if(this.isEmpty()){
        return 
    }
    
    while(this.head && this.head.value % 2 ===0){
        this.head=this.head.next
    }
    
    let curr=this.head
    
    
    while(curr && curr.next){
        if(curr.next.value % 2=== 0){
            curr.next=curr.next.next
        }else{
            curr=curr.next
        }
    }
}


    
    removedup(){
        
        let curr=this.head
        
        while(curr){
            let runner=curr
            
            while(runner.next){
                if(runner.next.value === curr.value){
                    runner.next=runner.next.next
                    this.size--
                }else{
                    runner=runner.next
                }
            }
            curr=curr.next
        }
    }




    class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Linkedlist {
  constructor(){
    this.head = null
  }

  append(value){
    let node = new Node(value)
    if(!this.head){
      this.head = node
    } else {
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node
    }
  }

  print(){
    let curr = this.head
    let listvalue = ""
    while(curr){
      listvalue += `${curr.value}->`
      curr = curr.next
    }
    listvalue += "null"
    console.log(listvalue)
  }
}

function merge(l1, l2){
  let dummy = new Node(-1)
  let curr = dummy

  let head1 = l1.head
  let head2 = l2.head

  while(head1 && head2){
    if(head1.value <= head2.value){
      curr.next = head1
      head1 = head1.next
    } else {
      curr.next = head2
      head2 = head2.next
    }
    curr = curr.next
  }

  if(head1) curr.next = head1
  if(head2) curr.next = head2

  let mergedList = new Linkedlist()
  mergedList.head = dummy.next
  return mergedList
}

// -----------------------

const list1 = new Linkedlist()
list1.append(10)
list1.append(20)
list1.append(30)

const list2 = new Linkedlist()
list2.append(40)
list2.append(50)

const merged = merge(list1, list2)
merged.print()














