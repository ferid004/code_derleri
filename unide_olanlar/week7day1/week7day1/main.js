
// let buton = document.getElementById("but");
// let ad = document.getElementById("ad");
// let body = document.querySelector(".container");
// let arr = [];

// buton.addEventListener("click", () => {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     li.textContent = ad.value;
//     body.append(ul);
//     ul.append(li);
//     console.log(arr);
//     localStorage.setItem("data", JSON.stringify(arr));
//     arr = JSON.parse(localStorage.getItem("data"));

//     ad.value = "";
// });



// window.onload = () => {
//     arr = JSON.parse(localStorage.getItem("data"));
//     if (arr) {
//         arr.forEach((element) => {
//             let ul = document.createElement("ul");
//             let li = document.createElement("li");
//             let chek = document.createElement("input");
//             chek.type = "checkbox";
//             li.textContent = element;
//             body.append(ul);
//             ul.append(li);
//             li.append(chek);
          
//         });
//     }
// };


window.onload = () => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data) {
        arr = data;
        data.forEach((item) => {
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let edit = document.createElement("button")

            li.textContent = item;
            ul.appendChild(li);
            body.appendChild(ul);
            li.append(edit);

        });
    }
};



let buton = document.getElementById("but");
let ad = document.getElementById("ad");
let body = document.querySelector(".container");
let arr = [];

buton.addEventListener("click", () => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let edit = document.createElement("button")
        edit.textContent = "Edit"
    li.textContent = ad.value;
    body.append(ul);
    ul.append(li);



    li.append(edit);
    edit.onclick = () => {
        
        
    }



    arr.push(ad.value);

    localStorage.setItem("data", JSON.stringify(arr));


    

    ad.value = "";

    
});

let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    localStorage.removeItem("data");

    let ulElements = document.querySelectorAll(".container ul");

    ulElements.forEach((ul) => {
        ul.remove();
    });
});





