// let body = document.querySelector('form')
// let buton = document.getElementById('but')
// let n = document.getElementById('name')
// let p = document.getElementById('password')




// buton.addEventListener('click', () => {
//     const obj = {
//         name: n.value,
//         password: p.value,
//     }
//     localStorage.setItem("data", JSON.stringify(obj))


// })
// window.onload = () => {
//     let data12 = JSON.parse(localStorage.getItem('data'))
//     console.log(data12);
//     if (data12) {
//         n.value = data12.name
//         p.value = data12.password
//     }
// }

let body = document.querySelector('form');
let buton = document.getElementById('but');
let n = document.getElementById('name');
let p = document.getElementById('password');

let data=[]
buton.addEventListener('click', () => {
    const existingData = JSON.parse(localStorage.getItem('data')) || []; // Daha önceki verileri al
    const newData = {
        name: n.value,
        password: p.value,
    };
    existingData.push(newData); // Yeni veriyi daha öncekilerin arkasına ekle
    localStorage.setItem('data', JSON.stringify(existingData));
    n.value = ""; // İnput alanlarını temizle
    p.value = ""; // İnput alanlarını temizle
});



let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    localStorage.removeItem("data");
    // İnput alanlarını da temizle, eğer gerekirse
    n.value = "";
    p.value = "";
});

// window.onload = () => {
//     let data = JSON.parse(localStorage.getItem('data'));
//     if (data) {
//         // Verileri döngü ile işleyerek gösterebilirsiniz.
//         data.forEach((item, index) => {
//             console.log(`Veri ${index + 1}:`);
//             console.log(`Kullanıcı adı: ${item.name}`);
//             console.log(`Şifre: ${item.password}`);
//             console.log('------------------------');
//         });
//     }
// }
