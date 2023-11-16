///1 
/*
#############################################
callback i harda istifadə etməliyəm tam olara bilmədim
#############################################
*/
//herbir elementi 2 bolub cemliyerem 
// ve ya cemliyib onun sayina bolerem

// function ededi_orta(...arr) {
//     const result = [...arr];
//     let sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         sum += result[i];
//     }

//      return sum / result.length;
// }


// console.log(ededi_orta(3,5,5,3,14));


//2

// function cem(...arr) {
//     const result = [...arr];
//     let sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         if (result[i]%2===0) {
//              sum+=result[i]
//         }
//     }
//     return sum
// }

// console.log(cem(2,5,5,3,14));


//3

// function cem(...arr) {
//     const result = [...arr];
//     let sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         if (result[i]%2!==0) {
//              sum+=result[i]
//         }
//     }
//     return sum
// }

// console.log(cem(2,5,5,3,14));



//4

function cut_vur_tek(arr) {
    
    let sumcut = 0;
    let sumtek = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i]%2===0) {
             sumcut+=arr[i]
        }
        if (arr[i]%2!==0) {
             sumtek+=arr[i]
        }
    }
    return sumcut*sumtek
}
function show(a,callback) {
    
    console.log(callback(a));
}
show([1,2,4],cut_vur_tek)


