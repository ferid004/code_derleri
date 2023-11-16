// const arr = [1, 2,3, 4,5, 6,7, 8,9];
// const x = 9;
// function ternarySearch(arr, left, right, x) {
//     if (right >= left) {
//         const mid1 = left + Math.floor((right - left) / 3);
//         const mid2 = mid1 + Math.floor((right - left) / 3);
//         if (arr[mid1] === x) {
//             return mid1;
//         }
//         if (arr[mid2] === x) {
//             return mid2;
//         }
//         if (x < arr[mid1]) {
//             return ternarySearch(arr, left, mid1 - 1, x);
//         }
//         if (x > arr[mid2]) {
//             return ternarySearch(arr, mid2 + 1, right, x);
//         }
//         return ternarySearch(arr, mid1 + 1, mid2 - 1, x);
//     }
//     return -1;
// }

// const result = ternarySearch(arr, 0, arr.length - 1, x);
// if (result === -1) {
//     console.log("bu elelmet yoxdur");
// } else {
//     console.log(`elemet var və indexsi: ${result}`);
// }




const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function radixSort(arr) {
    const maxNum = findMax(arr);
    const maxDigits = maxNum.toString().length;
    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            const num = arr[j];
            const digit = Math.floor(num / Math.pow(10, i)) % 10;
            buckets[digit].push(num);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}
console.log("Sıralanmış Dizi: ", sortedArr);
