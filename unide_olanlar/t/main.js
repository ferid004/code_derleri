// class admin {
//     constructor(user, pasword) {
//         this.user = user
//         this.pasword = pasword
//     }

//     login(value1, value2) {
//         if (this.user === (value1) && this.pasword === (value2)) {
//             console.log('giris olundu');
//         } else {
//             console.log("username ve pasword sehvdir");
//         }
//     }
// }

// let myClass = new admin('ferid', '1234')
//     // myClass.login('erid', '1234')
// console.log(typeof(admin));
// // console.log(myClass);

// class admin {
//     constructor(user, pasword) {
//         this.user = user
//         this.pasword = pasword
//     }

//     login(value1, value2) {
//         if (this.user === (value1) && this.pasword === (value2)) {
//             console.log('giris olundu');
//         } else {
//             console.log("username ve pasword sehvdir");
//         }
//     }
// }

// let myClass = new admin('ferid', '1234')
// myClass.login('erid', '1234')
// console.log(myClass);

// class Human {
//   constructor(ad, soyad, yas) {
//     this.ad = ad;
//     this.soyad = soyad;
//     this.yas = yas;
//   }
// }

// class Ixtisas extends Human {
//   constructor(ad, soyad, yas, ixtisas) {
//     super(ad, soyad, yas);
//     this.ixtisas = ixtisas;
//   }
//   show() {
//     return this.ad + "^^" + this.soyad + "##" + this.ixtisas;
//   }
// }

// const myClass = new Ixtisas("emin", "bilmirem", 25, "mellim");

// console.log(myClass.show());

// function sum(a, b) {
//   a + b;
// }

const arr = [{
        id: 2,
        description: "Sweet and savory sauces relishes spreads and seasonings",
        name: "Condiments",
    },
    {
        id: 1,
        description: "Soft drinks coffees teas beers and ales",
        name: "Beverages",
    },
    {
        id: 3,
        description: "Desserts candies and sweet breads",
        name: "Confections",
    },
    {
        id: 4,
        description: "Cheeses",
        name: "Dairy Products",
    },
    {
        id: 5,
        description: "Breads crackers pasta and cereal",
        name: "Grains/Cereals",
    },
    {
        id: 6,
        description: "Prepared meats",
        name: "Meat/Poultry",
    },
    {
        id: 7,
        description: "Dried fruit and bean curd",
        name: "Produce",
    },
    {
        id: 8,
        description: "Seaweed and fish",
        name: "Seafood",
    },
];

// arr.sort(function(a, b) {
//     if (a.description > b.description) {
//         return 1;
//     }
//     if (a.description < b.description) {
//         return -1;
//     }
//     return 0;
// });
// console.table(arr);



function filterItems(arr, query) {
    return arr.filter((x) => x.description.toLowerCase().includes(query.toLowerCase()));
}
console.table(filterItems(arr, "al"))