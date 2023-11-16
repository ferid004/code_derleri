// const arr=[1,3,5,7,2,4,6,9]

// arr.forEach((x,i)=> x%2===1 ? console.log(i):null)

//2

// const arr = [1, 2, 3, 5, 6, 6, 8, 4, 2, 6]
// arr.forEach((x, i) => x % 2 === 1 ? console.log(i) : null)


//3
// const arr = [1, 2, 3, 5, 6, 6, 8, 4, 2, 6,8]
// let narr=[]
// for (let i = 0; i < arr.length; i++) {
//     if (i%2===0) {
//         narr.push(arr[i])
        
//     }
// }
// console.log(narr);

// arr.forEach((x,i)=>i%2===0 ? console.log(x):null)


//4
// let arr = [1, 2, 3, 5, 6, 6, 8, 4, 2, 6,8]

// console.log(Math.max(...arr));


//32

const arr = [1, 2, 3, 5, 6, 6, 8, 4, 2, 6,8,9]
// let narr=[]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) {
//         narr.push(arr[i])
//     }
// }
// console.log(Math.max(...narr));

// arr.forEach((x, i) => x % 2 === 1 ? console.log(i) : null)

console.log(Math.max(...arr.filter(x=>x%2===0)));
// console.log(narr);

