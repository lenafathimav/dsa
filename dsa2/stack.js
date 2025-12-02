// class Stack{
//     constructor(){
//         this.stack=[]
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){

//         if(this.isEmpty()){
//             return "stack is empty"

//         }

//         return this.stack.pop()
//     }

//     peek(){
//          if(this.isEmpty()){
//             return "stack is empty"

//         }
//         return this.stack[this.stack.length-1]
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }

//     display(){

//         for(let i=this.stack.length-1;i>=0;i--){
//             console.log(this.stack[i])
//         }
//     }
// }

// const s= new Stack()

// s.push(10)
// s.push(20)
// s.push(30)
// s.pop()
// console.log(s.peek())
// s.display()




// class Node{
//   constructor(value){
//     this.value=value;
//     this.next=null
//   }

// }

// class Stack{
//     constructor(){
//         this.top=null
      
       
//     }

//     push(value){
//         const node = new Node(value)

//         node.next=this.top
//         this.top=node;

       


        
//     }

//     isEmpty(){
//         return this.top.length === 0
//     }

//     pop(){

//         if(this.isEmpty()){
//             return null
//         }

//         let remove= this.top
//         this.top.next=this.top

//         return this.top.value
//     }


//     peek(){

//         return this.top.value
//     }

//    print(){

//     let curr=this.top
//     let listvalue=""

//     while(curr){
//         listvalue+=` ${curr.value} `
//         curr=curr.next
//     }
//     console.log(listvalue)
//    }
// }

// const s = new Stack()

// s.push(10)
// s.push(20)
// s.push(30)
// s.print()




// stack using queue


// class Stack{
//     constructor(){
//         this.q1=[]
//         this.q2=[]
//     }


//     push(value){

//         this.q2.push(value)

//         while(this.q1.length > 0){
//             this.q2.push(this.q1.shift())
//         }

//         [this.q1,this.q2]=[this.q2,this.q1]
//     }

//     pop(){
//         return this.q1.shift()
//     }   

// }


// let s = new Stack();
// s.push(10);
// s.push(20);
// console.log(s.q1)




// revese stack
// class Stack {
//   constructor() {
//     this.stack = []
//   }

//   push(char) {
//     this.stack.push(char)
//   }
//   pop() {
//     return this.stack.pop()
//   }
//   isEmpty() {
//     return this.stack.length === 0
//   }
// }




// function reverse(str){
//   let stack= new Stack()


//   for(let char of str){
//     stack.push(char)
//   }

//   let rev=""
//   while(!stack.isEmpty()){
//     rev+=stack.pop()
//   }
//   return rev
// }


// let str="lena"
// console.log(reverse(str))



//     function insertBottam(stack,item){
//         if(stack.length === 0){
//             stack.push(item)
//             return 
//         }

//         let top=stack.pop()
//         insertBottam(stack,item)
//         stack.push(top)
//     }


//     function  reverse(stack){
//         if(stack.length === 0)return 
//         let top= stack.pop() 
//         reverse(stack)
//         insertBottam(stack,top)
//     }

// let stack=[5,2,1,6]
// console.log("Orginal",stack)
// reverse(stack)
// console.log("after",stack)


function isbalanced(str){

    let stack =[]

    for(let char of str){

        if(char === '(' || char === '{'|| char === '['){
            stack.push(char)
        }else{

            if(stack.length === 0)return false


            let last = stack.pop()

            if(char === ')' && last !=='(')return false
            if(char === '}' && last !=='{')return false
            if(char === ']' && last !=='[')return false
        }


    }


    return stack.length === 0
    
}

console.log(isbalanced("{}{}"))