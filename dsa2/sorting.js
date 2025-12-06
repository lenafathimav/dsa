// bubble sort 

// const arr = [ 0,  1,  5,  6, 12, 22, 33, 44];
// function bubblesort(arr){
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]

//         }
//     }

//     return arr
// }
// }

// console.log(bubblesort(arr))


function inserction(arr){
    for(let i=1;i<arr.length ;i++){
        let temp= arr[i]
       let j=0
       while(j>=0 && arr[j]>temp){
        arr[j+1]=arr[j]
       }
    }
    arr[j+1]=temp
}

// function selectionSort(arr){

//     for(let i=0;i<arr.length;i++){
//         let min =i

//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] >arr[min]){
//                 min = j
//             }

//             [arr[j],arr[min]]=[arr[min],arr[j]]
//         }
        
//     }
//     return arr
// }
// console.log(selectionSort([29, -10, 0, 14, -3, 37, 12])) 




// const arr = [1,22,42,53,23,656,2,0]


// function  quicksort(arr){

//     if(arr.length <=1){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]

//     for(let i=1;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//          }
//     }

//     return [...quicksort(left),pivot,...quicksort(right)]
// }

// console.log(quicksort(arr))



function mergesort(arr){
    if(arr.length <= 1)return arr

    let mid= Math.floor(arr.length/2)

    let left = mergesort(arr.slice(0,mid))
    let right = mergesort(arr.slice(mid))

    return merge(left,right)
}



function merge(left,right){

    let merged=[]
    let i=0;
    let j=0

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            merged.push(left[i])
            i++
        }else{
            merged.push(right[j])
            j++
        }
    }

    return [...merged,...left.slice(i),...right.slice(j)]
}

console.log(mergesort([8,3,5,4,7,6,1,2]))








