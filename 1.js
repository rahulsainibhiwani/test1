// // Q-1 Find an index of element in a given array?
// let arr=[23,7,1,2,4,6];
// const find=(num)=>{
//     let result=[];
//     for(let a=0;a<arr.length-1;a++){
//         for(let b=1;b<arr.length;b++){
//             if(arr[a]+arr[b]===num){
//                 result.push(a)
//                 result.push(b)
//                 return result;
//             }
//         }
//     }
//     // return result;
// }
// console.log(find(27))

//Q-2
const star=(num)=>{
    for(let a=0;a<num;a++){
        for(let b=0;b<=a;b++){
            document.write("*")
        }
        document.write("<br>")
    }
}
//Q-3
const star2=(num)=>{
    let x=num-1;
    for(let a=0;a<num;a++){
        for(let b=0;b<num;b++){
            if(b<x){
                document.write("-")
            }
            else{
                document.write("*")
            }
        }
        x--;
        document.write("<br>")
    }
}
// star2(4)

//Q-4  Sort array without sort method
const sort=(arr)=>{
    for(let a=0;a<arr.length-1;a++){
        for(let b=a+1;b<arr.length;b++){
           if(arr[a]<arr[b]){
            let temp=arr[a]
            arr[a]=arr[b]
            arr[b]=temp
           }
        }
    }
    return arr;
}
let result=sort([3,5,2,4,1]);
console.log(result)

//Q-5  Reverse the array
const reverse=(arr)=>{
    let str=arr.reverse()
    console.log(str)
}
// reverse([3,5,2,4,1])

//Q-6  find Duplicate elements in Array
const duplicate=(arr)=>{
    let result=[];
    for(let a=0;a<arr.length-1;a++){
        for(let b=a+1;b<arr.length;b++){
            if(arr[a]===arr[b]) result.push(arr[a])
        }
    }
    return result;
}
// console.log(duplicate([2,3,1,2,3]))