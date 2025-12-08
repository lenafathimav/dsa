
// class HashTable{
//     constructor(size){
//         this.table= new Array(size)
//         this.size = size
//     }
    
    
//     hash(key){
//         let total=0
        
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
    
//     }
//     set(key,value){
//         const index = this.hash(key);
//         this.table[index] = value
    
//     }
    
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index]=undefined
//     }
    
//     display(){
//         for(let i=0 ;i < this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
    
// }

// const table= new HashTable(50)


// table.set("name","lena")
// table.get("name","fidu")
// table.display()




// class Hashtable{
//   constructor(size){
//     this.table= new Array(size)
//     this.size=size
//   }
  
//   hash(key){
//     let total=0
    
//     for(let i=0;i<key.length;i++){
//       total+=key.charCodeAt(i)
//     }
//     return total % this.size
//   }
  
//   set(key,value){
//     let index = this.hash(key)
    
//     if(!this.table[index]){
//       this.table[index]=[]
//     }
    
//     this.table[index].push([key,value])
//   }
  
  
//   get(key){
//     const index = this.hash(key)
    
//     if(this.table[index]){
//       for(let pair of this.table[index]){
//         if(pair[0] === key){
//           return pair[1]
//         }
//       }
//     }
//     return undefined
//   }
  
//   remove(key){
//     const index = this.hash(key)
    
//     if(this.table[index]){
//       this.table[index]=this.table[index].filter(pair =>pair !== key)
//     }
//   }
  
//   display(){
//     for(let i=0; i<this.size;i++){
//       if(this.table[i]){
//         console.log(i,this.table[i])
//       }
//     }
//   }
// }

// const ht= new Hashtable(10)

// ht.set("name","lena")
// ht.set("age",18)
// ht.display()
// console.log(ht.get("name"))
// console.log(ht.get("age"))








// class Node{
//   constructor(key,value){
//     this.key=key
//     this.value=value
//     this.next=null
//   }
  
  
// }

// class Hashtable{
//   constructor(size){
//     this.size=size
//     this.table=new Array(size).fill(null)
    
//   }
  
//   hash(key){
//     let total=0
//     for(let i=0;i<key.length;i++){
//       total+=key.charCodeAt(i)
      
//     }
//     return total %this.size
//   }
  
//   insert(key,value){
//     let index= this.hash(key)
//     let  node=new Node(key,value)
    
//     if(this.table[index]===null){
//       this.table[index]=node
//     }else{
//       let curr=this.table[index];
      
//       while(curr.next!==null){
//         if(curr.key === key){
//           curr.value=value;
//         }
//         curr=curr.next
//       }
//       curr.next=node
//     }
//   }
  
//   get(key){
//     let index= this.hash(key)
//     let curr=this.table[index]
    
//     while(curr.next!==null){
//       if(curr.key === key) return curr.value
//       curr=curr.next
//     }
//     return undefined
//   }
  
//   remove(key){
//     let index=this.hash(key)
    
//     let curr=this.table[index]
//     let prev=null
    
//     while(curr.next!==null){
//       if(curr.key === key){
//         if(prev === null){
//           this.table[index]=curr.next
//         }else{
//           prev.next=curr.next
//         }
//         return
//       }
//       prev=curr
//       curr=curr.next
//     }
//   }
  
//   display(){
    
//     for(let i=0;i<this.size;i++){
//       let curr=this.table[i]
//       let res=""
      
//       while(curr){
//         res+=`${curr.key}:${curr.value}-`
//         curr=curr.next
//       }
//      res+= "null"
//       console.log(i,res)
//     }
//   }
// }

// const ht = new Hashtable(5);

// ht.insert("name", "Lena");
// ht.insert("age", 22);
// ht.insert("color", "blue");
// ht.insert("food", "biryani");

// ht.display();






// class DoubleHashTable {
//   constructor(size = 10) {
//     this.size = size;
//     this.table = new Array(size).fill(null);
//   }

 
//   hash1(key) {
//     let sum = 0;
//     for (let char of key) {
//       sum += char.charCodeAt(0);
//     }
//     return sum % this.size;
//   }

  
//   hash2(key) {
//     let prime = 7;
//     return prime - (key.length % prime);
//   }

//   set(key, value) {
//     let index = this.hash1(key);
//     let step = this.hash2(key);

//     let i = 0;

//     while (
//       this.table[index] !== null &&
//       this.table[index] !== "DELETE" &&
//       this.table[index][0] !== key
//     ) {
//       i++;
//       index = (index + step) % this.size; 
//     }

//     this.table[index] = [key, value];
//   }

//   get(key) {
//     let index = this.hash1(key);
//     let step = this.hash2(key);

//     let i = 0;

//     while (this.table[index] !== null) {
//       if (this.table[index] !== "DELETE" && this.table[index][0] === key) {
//         return this.table[index][1];
//       }
//       i++;
//       index = (index + step) % this.size;
//     }
//     return null;
//   }


//   remove(key) {
//     let index = this.hash1(key);
//     let step = this.hash2(key);

//     let i = 0;

//     while (this.table[index] !== null) {
//       if (this.table[index] !== "DELETE" && this.table[index][0] === key) {
//         this.table[index] = "DELETE";
//         return;
//       }
//       i++;
//       index = (index + step) % this.size;
//     }
//   }
// }

// let h = new DoubleHashTable(10);

// h.set("akhil", "shamil");
// h.set("likha", "shamil");
// h.set("khila", "shamil");
// h.set("hkila", "shamil");

// h.remove("likha");
// console.log("After remove:", h.table);

// h.set("likha", "hemdan");
// console.log("After reinsert:", h.table);

// console.log("Get likha:", h.get("likha"));




// class Hashtable{
//   constructor(size){
//     this.size=size;
//     this.table=new Array(size).fill(null)
//   }
  
  
//   hash(key){
//     let total=0
//     for(let i=0;i<key.length;i++){
//       total+=key.charCodeAt(i)
//     }
    
//     return total % this.size
//   }
  
//   set(key,value){
//     let index=this.hash(key)
    
//     let i=1;
    
//     while(this.table[index] !==null && this.table[index]!=="DELETE" && this.table[index][0]!==key){
      
//       index=(index + i*i)% this.table.length;
//       i++
//     }
    
//     this.table[index]=[key,value]
//   }
  
//   get(key){
    
//     let index= this.hash(key)
//     let i=0;
//     while(this.table[index]!==null){
//       if(this.table[index]!=="DELETE" && this.table[index][0]===key){
//         return this.table[index][1]
//       }
      
//       i++;
//       index=(index + i*i)% this.size
//     }
//     return undefined
//   }
  
  
//   remove(key){
//     let index= this.hash(key)
//     let i=0;
    
//     while(this.table[index]!==null){
//       if(this.table[index]!=="DELETE" && this.table[index][0]===key){
//         return this.table[index]="DELETE"
//       }
//        i++;
//       index=(index + i*i)% this.size
    
//   }
//   }
// }

// let h=new Hashtable(10)
// h.set("akhil", "A");
// h.set("likha", "L");
// h.set("khila", "K");
// h.set("hkila", "H")
// console.log(h.table)







// class Hashtable {
//   constructor(size = 4) {  
//     this.size = size;
//     this.table = new Array(size).fill(null);
//     this.count = 0;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   loadFactor() {
//     return this.count / this.size;
//   }

//   rehash() {
//     let oldtable = this.table;
//     this.size = this.size * 2;
//     this.table = new Array(this.size).fill(null);
//     this.count = 0;

//     for (let item of oldtable) {
//       if (item) {
//         this.set(item[0], item[1]);
//       }
//     }
//   }

//   set(key, value) {
//     if (this.loadFactor() > 0.7) {
//       this.rehash();
//     }

//     let index = this.hash(key);

//     while (this.table[index] !== null) {
//       if (this.table[index][0] === key) {
//         this.table[index][1] = value;
//         return;   // FIXED
//       }
//       index = (index + 1) % this.size;
//     }

//     this.table[index] = [key, value];
//     this.count++;
//   }

//   get(key) {
//     let index = this.hash(key);

//     while (this.table[index] !== null) {
//       if (this.table[index][0] === key) {
//         return this.table[index][1];
//       }
//       index = (index + 1) % this.size;
//     }
//     return null;
//   }
// }

// let h = new Hashtable(); 

// h.set("akhil", "A");
// h.set("amal", "AM");
// h.set("achu", "AC");
// h.set("arun", "AR"); 

// console.log(h.table);
