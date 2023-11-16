// 1.1den 100e qeder ededler icerisinde 5e ve 3e bolunenlerin toplamin tapan algoritm

// not let yerinə const yazanda işləmədi

// let toplam = 0;

// for ( i = 1; i <= 100; i++) {
//     if (i%3===0 ||  i % 5 === 0) {
//         toplam += i;
//     }
// }

// console.log(toplam);


//2.Verilen ededin 2nin quvveti olub olmadigini bildiren algoritm

// let num=2
// internetdən tapdığım
// if ((Math.log(num) / Math.log(2)) % 1 === 0) {
//     console.log("bu eded 2 nin quvwridir");
// }
// else{
//     console.log("quvvet deyildir");
// }


// let number=18
// if (number<1) {
//     console.log("quvvet ola bilmez");;
// }
// else if (number===1) {
//     console.log(" 1 istenilen ededin quvetidi");
// }
// else if (number>1) {
//     while(number %2 ==0){
//         console.log("2 nin quetidir");
//         number=number/2
        
//     }
//     if(number>1){
//     console.log("quvveti deyil");
//     }
// }
// yaza bilmirəm

var number = 9; // Kontrol edilecek sayı

if (number < 1) {
    console.log("quvvet ola bilmez");
} 
else {
    while (number > 1) {
        if (number % 2 !== 0) {
            console.log(" 2'nin quvveti deyil.");
            break;
        }
        number = number / 2;
    }
    if (number === 1) {
        console.log(" 2'nin quvvetidir.");
    }
}
