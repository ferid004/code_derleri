// const obj={
//     name:'ferid',
//     age:19,
// }
// console.log(obj.name);
// console.log (obj["name"]);



let arr = [
    {
        "id": 4,
        "supplierId": 2,
        "categoryId": 3,
        "quantityPerUnit": "48 - 6 oz jars",
        "unitPrice": 22,
        "unitsInStock": 53,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Chef Anton's Cajun Seasoning",
        "supplier": {
            "id": 2,
            "companyName": "New Orleans Cajun Delights",
            "contactName": "Shelley Burke",
            "contactTitle": "Order Administrator",
            "address": {
                "street": "P.O. Box 78934",
                "city": "New Orleans",
                "region": "LA",
                "postalCode": 70117,
                "country": "USA",
                "phone": "(100) 555-4822"
            }
        },
        "category": {
            "id": 3,
            "description": "Desserts candies and sweet breads",
            "name": "Confections"
        }
    },
    {
        "id": 5,
        "supplierId": 2,
        "categoryId": 2,
        "quantityPerUnit": "36 boxes",
        "unitPrice": 21.35,
        "unitsInStock": 0,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Chef Anton's Gumbo Mix"
    },
    {
        "id": 6,
        "supplierId": 3,
        "categoryId": 2,
        "quantityPerUnit": "12 - 8 oz jars",
        "unitPrice": 25,
        "unitsInStock": 120,
        "unitsOnOrder": 0,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Grandma's Boysenberry Spread"
    },
    {
        "id": 7,
        "supplierId": 3,
        "categoryId": 7,
        "quantityPerUnit": "12 - 1 lb pkgs.",
        "unitPrice": 30,
        "unitsInStock": 15,
        "unitsOnOrder": 0,
        "reorderLevel": 10,
        "discontinued": false,
        "name": "Uncle Bob's Organic Dried Pears"
    },
    {
        "id": 8,
        "supplierId": 3,
        "categoryId": 2,
        "quantityPerUnit": "12 - 12 oz jars",
        "unitPrice": 40,
        "unitsInStock": 6,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Northwoods Cranberry Sauce"
    },
    {
        "id": 9,
        "supplierId": 4,
        "categoryId": 6,
        "quantityPerUnit": "18 - 500 g pkgs.",
        "unitPrice": 97,
        "unitsInStock": 29,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Mishi Kobe Niku"
    },
    {
        "id": 10,
        "supplierId": 4,
        "categoryId": 8,
        "quantityPerUnit": "12 - 200 ml jars",
        "unitPrice": 31,
        "unitsInStock": 31,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Ikura"
    },
    {
        "id": 2,
        "supplierId": 1,
        "categoryId": 1,
        "quantityPerUnit": "24 - 12 oz bottles",
        "unitPrice": 19,
        "unitsInStock": 17,
        "unitsOnOrder": 40,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Chang"
    },
    {
        "id": 3,
        "supplierId": 1,
        "categoryId": 2,
        "quantityPerUnit": "12 - 550 ml bottles",
        "unitPrice": 10,
        "unitsInStock": 13,
        "unitsOnOrder": 70,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Aniseed Syrup"
    },
    {
        "id": 11,
        "supplierId": 5,
        "categoryId": 2,
        "quantityPerUnit": "1 kg pkg.",
        "unitPrice": 21,
        "unitsInStock": 22,
        "unitsOnOrder": 30,
        "reorderLevel": 30,
        "discontinued": false,
        "name": "Queso Cabrales 2",
        "supplier": {
            "id": 5,
            "companyName": "Cooperativa de Quesos 'Las Cabras'",
            "contactName": "Antonio del Valle Saavedra",
            "contactTitle": "Export Administrator",
            "address": {
                "street": "Calle del Rosal 4",
                "city": "Oviedo",
                "region": "Asturias",
                "postalCode": 33007,
                "country": "Spain",
                "phone": "(98) 598 76 54"
            }
        },
        "category": {
            "id": 4,
            "description": "Cheeses",
            "name": "Dairy Products"
        }
    },
    {
        "id": 12,
        "supplierId": 5,
        "categoryId": 4,
        "quantityPerUnit": "10 - 500 g pkgs.",
        "unitPrice": 38,
        "unitsInStock": 86,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Queso Manchego La Pastora"
    },
    {
        "id": 13,
        "supplierId": 6,
        "categoryId": 8,
        "quantityPerUnit": "2 kg box",
        "unitPrice": 6,
        "unitsInStock": 24,
        "unitsOnOrder": 0,
        "reorderLevel": 5,
        "discontinued": false,
        "name": "Konbu"
    },
    {
        "id": 14,
        "supplierId": 6,
        "categoryId": 7,
        "quantityPerUnit": "40 - 100 g pkgs.",
        "unitPrice": 23.25,
        "unitsInStock": 35,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Tofu"
    },
    {
        "id": 15,
        "supplierId": 6,
        "categoryId": 2,
        "quantityPerUnit": "24 - 250 ml bottles",
        "unitPrice": 15.5,
        "unitsInStock": 39,
        "unitsOnOrder": 0,
        "reorderLevel": 5,
        "discontinued": false,
        "name": "Genen Shouyu"
    },
    {
        "id": 1,
        "supplierId": 1,
        "categoryId": 1,
        "quantityPerUnit": "10 boxes x 20 bags",
        "unitPrice": 18,
        "unitsInStock": 39,
        "unitsOnOrder": 0,
        "reorderLevel": 10,
        "discontinued": false,
        "name": "Chai"
    },
    {
        "id": 16,
        "supplierId": 7,
        "categoryId": 3,
        "quantityPerUnit": "32 - 500 g boxes",
        "unitPrice": 17.45,
        "unitsInStock": 29,
        "unitsOnOrder": 0,
        "reorderLevel": 10,
        "discontinued": false,
        "name": "Pavlova"
    },
    {
        "id": 17,
        "supplierId": 7,
        "categoryId": 6,
        "quantityPerUnit": "20 - 1 kg tins",
        "unitPrice": 39,
        "unitsInStock": 0,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Alice Mutton"
    },
    {
        "id": 18,
        "supplierId": 7,
        "categoryId": 8,
        "quantityPerUnit": "16 kg pkg.",
        "unitPrice": 62.5,
        "unitsInStock": 42,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Carnarvon Tigers"
    },
    {
        "id": 19,
        "supplierId": 8,
        "categoryId": 3,
        "quantityPerUnit": "10 boxes x 12 pieces",
        "unitPrice": 9.2,
        "unitsInStock": 25,
        "unitsOnOrder": 0,
        "reorderLevel": 5,
        "discontinued": false,
        "name": "Teatime Chocolate Biscuits"
    },
    {
        "id": 20,
        "supplierId": 8,
        "categoryId": 3,
        "quantityPerUnit": "30 gift boxes",
        "unitPrice": 81,
        "unitsInStock": 40,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Sir Rodney's Marmalade"
    },
    {
        "id": 24,
        "supplierId": 10,
        "categoryId": 1,
        "quantityPerUnit": "12 - 355 ml cans",
        "unitPrice": 4.5,
        "unitsInStock": 20,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Guaraná Fantástica"
    },
    {
        "id": 25,
        "supplierId": 11,
        "categoryId": 3,
        "quantityPerUnit": "20 - 450 g glasses",
        "unitPrice": 14,
        "unitsInStock": 76,
        "unitsOnOrder": 0,
        "reorderLevel": 30,
        "discontinued": false,
        "name": "NuNuCa Nuß-Nougat-Creme"
    },
    {
        "id": 26,
        "supplierId": 11,
        "categoryId": 3,
        "quantityPerUnit": "100 - 250 g bags",
        "unitPrice": 31.23,
        "unitsInStock": 15,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Gumbär Gummibärchen"
    },
    {
        "id": 27,
        "supplierId": 11,
        "categoryId": 3,
        "quantityPerUnit": "100 - 100 g pieces",
        "unitPrice": 43.9,
        "unitsInStock": 49,
        "unitsOnOrder": 0,
        "reorderLevel": 30,
        "discontinued": false,
        "name": "Schoggi Schokolade"
    },
    {
        "id": 28,
        "supplierId": 12,
        "categoryId": 7,
        "quantityPerUnit": "25 - 825 g cans",
        "unitPrice": 45.6,
        "unitsInStock": 26,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Rössle Sauerkraut"
    },
    {
        "id": 29,
        "supplierId": 12,
        "categoryId": 6,
        "quantityPerUnit": "50 bags x 30 sausgs.",
        "unitPrice": 123.79,
        "unitsInStock": 0,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Thüringer Rostbratwurst"
    },
    {
        "id": 30,
        "supplierId": 13,
        "categoryId": 8,
        "quantityPerUnit": "10 - 200 g glasses",
        "unitPrice": 25.89,
        "unitsInStock": 10,
        "unitsOnOrder": 0,
        "reorderLevel": 15,
        "discontinued": false,
        "name": "Nord-Ost Matjeshering"
    },
    {
        "id": 31,
        "supplierId": 14,
        "categoryId": 4,
        "quantityPerUnit": "12 - 100 g pkgs",
        "unitPrice": 12.5,
        "unitsInStock": 0,
        "unitsOnOrder": 70,
        "reorderLevel": 20,
        "discontinued": false,
        "name": "Gorgonzola Telino"
    },
    {
        "id": 32,
        "supplierId": 14,
        "categoryId": 4,
        "quantityPerUnit": "24 - 200 g pkgs.",
        "unitPrice": 32,
        "unitsInStock": 9,
        "unitsOnOrder": 40,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Mascarpone Fabioli"
    },
    {
        "id": 33,
        "supplierId": 15,
        "categoryId": 4,
        "quantityPerUnit": "500 g",
        "unitPrice": 2.5,
        "unitsInStock": 112,
        "unitsOnOrder": 0,
        "reorderLevel": 20,
        "discontinued": false,
        "name": "Geitost"
    },
    {
        "id": 34,
        "supplierId": 16,
        "categoryId": 1,
        "quantityPerUnit": "24 - 12 oz bottles",
        "unitPrice": 14,
        "unitsInStock": 111,
        "unitsOnOrder": 0,
        "reorderLevel": 15,
        "discontinued": false,
        "name": "Sasquatch Ale"
    },
    {
        "id": 22,
        "supplierId": 9,
        "categoryId": 5,
        "quantityPerUnit": "24 - 500 g pkgs.",
        "unitPrice": 21,
        "unitsInStock": 104,
        "unitsOnOrder": 0,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Gustaf's Knäckebröd"
    },
    {
        "id": 21,
        "supplierId": 8,
        "categoryId": 3,
        "quantityPerUnit": "24 pkgs. x 4 pieces",
        "unitPrice": 10,
        "unitsInStock": 3,
        "unitsOnOrder": 40,
        "reorderLevel": 5,
        "discontinued": false,
        "name": "Sir Rodney's Scones"
    },
    {
        "id": 35,
        "supplierId": 16,
        "categoryId": 1,
        "quantityPerUnit": "24 - 12 oz bottles",
        "unitPrice": 18,
        "unitsInStock": 20,
        "unitsOnOrder": 0,
        "reorderLevel": 15,
        "discontinued": false,
        "name": "Steeleye Stout"
    },
    {
        "id": 23,
        "supplierId": 9,
        "categoryId": 5,
        "quantityPerUnit": "12 - 250 g pkgs.",
        "unitPrice": 9,
        "unitsInStock": 61,
        "unitsOnOrder": 0,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Tunnbröd"
    },
    {
        "id": 37,
        "supplierId": 17,
        "categoryId": 8,
        "quantityPerUnit": "12 - 500 g pkgs.",
        "unitPrice": 26,
        "unitsInStock": 11,
        "unitsOnOrder": 50,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Gravad lax"
    },
    {
        "id": 40,
        "supplierId": 19,
        "categoryId": 8,
        "quantityPerUnit": "24 - 4 oz tins",
        "unitPrice": 18.4,
        "unitsInStock": 123,
        "unitsOnOrder": 0,
        "reorderLevel": 30,
        "discontinued": false,
        "name": "Boston Crab Meat"
    },
    {
        "id": 38,
        "supplierId": 18,
        "categoryId": 1,
        "quantityPerUnit": "12 - 75 cl bottles",
        "unitPrice": 263.5,
        "unitsInStock": 17,
        "unitsOnOrder": 0,
        "reorderLevel": 15,
        "discontinued": false,
        "name": "Côte de Blaye"
    },
    {
        "id": 36,
        "supplierId": 17,
        "categoryId": 8,
        "quantityPerUnit": "24 - 250 g jars",
        "unitPrice": 19,
        "unitsInStock": 112,
        "unitsOnOrder": 0,
        "reorderLevel": 20,
        "discontinued": false,
        "name": "Inlagd Sill"
    },
    {
        "id": 41,
        "supplierId": 19,
        "categoryId": 8,
        "quantityPerUnit": "12 - 12 oz cans",
        "unitPrice": 9.65,
        "unitsInStock": 85,
        "unitsOnOrder": 0,
        "reorderLevel": 10,
        "discontinued": false,
        "name": "Jack's New England Clam Chowder"
    },
    {
        "id": 43,
        "supplierId": 20,
        "categoryId": 1,
        "quantityPerUnit": "16 - 500 g tins",
        "unitPrice": 46,
        "unitsInStock": 17,
        "unitsOnOrder": 10,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Ipoh Coffee"
    },
    {
        "id": 42,
        "supplierId": 20,
        "categoryId": 5,
        "quantityPerUnit": "32 - 1 kg pkgs.",
        "unitPrice": 14,
        "unitsInStock": 26,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Singaporean Hokkien Fried Mee"
    },
    {
        "id": 46,
        "supplierId": 21,
        "categoryId": 8,
        "quantityPerUnit": "4 - 450 g glasses",
        "unitPrice": 12,
        "unitsInStock": 95,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Spegesild"
    },
]

// let obj = arr.filter(o => o.unitPrice > 20  && o.unitPrice<50);
// console.log(obj);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]['name']==='Spegesild') {
//         console.log(arr[i]);
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     const element = array[i];

    
// }

// function salamlar(name='merhaba'){

//     console.log('ferid '+name)
// }
// salamlar()

// function sum(a,b) {
    
// }


// //function decleration 
// function adsoyad(ad,soyad) {
//     return ad+soyad
// }
// let result = adsoyad('ferid ','aqamaliyev')
// console.log(result);

// //function expresson

// const adsoyad =function (ad,soyad) {
//     return ad+soyad
// }
// let result = adsoyad('ferid ','aqamaliyev')
// console.log(result);

// //function arrow

// const adsoyad=(ad,soyad)=>ad+soyad
// let result = adsoyad('ferid ','aqamaliyev')
// console.log(result);