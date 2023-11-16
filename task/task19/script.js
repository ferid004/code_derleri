// let topla=0
// let cix=0
// let vur=0
// let bol=0

function topla(...numbers) {
    return numbers.reduce((topla,number)=>topla+number,0);
}

function cix(...numbers) {
    return numbers.reduce((cix,number)=>cix-number,0);
}

function vur(...numbers) {
    return numbers.reduce((vur,number)=>vur*number,1);
}

function bol(...numbers) {
    return numbers.reduce((bol,number)=>bol/number,);
}

function output(callback,...num) {
    return callback(...num)
}
console.log(output(topla,100,2,5));



