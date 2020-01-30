const Menus = require('./index.js');
const db = require('./menu.js');
const faker = require('faker');

const seedScript = {

  generateRestaurants: function (num) {
    var data = [];
    for (var i = 1; i <= num; i++) {
      var rest = {
        restaurantID: i,
        restaurantName: faker.company.companyName(),
        menuNames: [],
        menus: null
      }
      var numMenus = Math.floor(Math.random() * 3) + 1;
      for (var j = 0; j < numMenus; j++) {
        rest.menuNames.push(faker.lorem.word());
      }
      rest.menus = seedScript.generateMenus(rest.menuNames);
      data.push(rest);
    }
    return data;
  },

  generateMenus: function (arr) {
    var menus = [];
    for (var i = 1; i <= arr.length; i++) {
      var menu = {
        menuID: i,
        menuName: arr[i - 1],
        categories: null,
        items: null
      }
      var cats = Math.floor(Math.random() * 4) + 2;
      menu.categories = seedScript.generateCategories(cats);
      menu.items = seedScript.generateItems(menu.categories);
      menus.push(menu);
    }
    return menus;
  },

  generateCategories: function (num) {
    var categories = [];
    for (var i = 1; i <= num; i++) {
      categories.push(faker.lorem.word());
    }
    return categories;
  },

  generateItems: function (array) {
    var items = [];
    for (var i = 0; i < array.length; i++) {
      var num = Math.floor(Math.random() * 5) + 6;
      for (var j = 1; j <= num; j++) {
        var item = {
          itemID: JSON.stringify(i) + JSON.stringify(j),
          category: array[i],
          itemName: faker.lorem.word(),
          description: faker.lorem.words(),
          price: '$' + faker.commerce.price()
        }
        items.push(item);
      }
    }
    return items;
  },

  seedWithMongoDB: function (num) {
    Menus.create(seedScript.generateRestaurants(num), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Database seeded.');
      }
    })
  },

  exampleJSON: [
    {
      "_id": "5e07bbbda05d4b139115b3c5",
      "menuNames": [
        "quam"
      ],
      "restaurantID": 29,
      "restaurantName": "Hills and Sons",
      "menus": [
        {
          "categories": [
            "pariatur",
            "soluta",
            "modi",
            "ut",
            "temporibus"
          ],
          "_id": "5e07bbbda05d4b139115b3c6",
          "menuID": 1,
          "menuName": "quam",
          "items": [
            {
              "_id": "5e07bbbda05d4b139115b3f2",
              "itemID": "01",
              "category": "pariatur",
              "itemName": "sed",
              "description": "nesciunt consequatur ad",
              "price": "$63.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3f1",
              "itemID": "02",
              "category": "pariatur",
              "itemName": "doloribus",
              "description": "doloremque et laboriosam",
              "price": "$744.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3f0",
              "itemID": "03",
              "category": "pariatur",
              "itemName": "vel",
              "description": "voluptatem aut placeat",
              "price": "$690.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3ef",
              "itemID": "04",
              "category": "pariatur",
              "itemName": "consequatur",
              "description": "praesentium aut corrupti",
              "price": "$702.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3ee",
              "itemID": "05",
              "category": "pariatur",
              "itemName": "incidunt",
              "description": "earum inventore repudiandae",
              "price": "$371.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3ed",
              "itemID": "06",
              "category": "pariatur",
              "itemName": "adipisci",
              "description": "et ut dolorem",
              "price": "$282.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3ec",
              "itemID": "07",
              "category": "pariatur",
              "itemName": "et",
              "description": "quo numquam rerum",
              "price": "$623.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3eb",
              "itemID": "08",
              "category": "pariatur",
              "itemName": "quod",
              "description": "ducimus est qui",
              "price": "$966.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3ea",
              "itemID": "09",
              "category": "pariatur",
              "itemName": "inventore",
              "description": "facere quibusdam necessitatibus",
              "price": "$138.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e9",
              "itemID": "010",
              "category": "pariatur",
              "itemName": "consequatur",
              "description": "molestias id laborum",
              "price": "$92.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e8",
              "itemID": "11",
              "category": "soluta",
              "itemName": "quis",
              "description": "fugiat itaque cum",
              "price": "$205.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e7",
              "itemID": "12",
              "category": "soluta",
              "itemName": "vitae",
              "description": "similique quo accusantium",
              "price": "$279.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e6",
              "itemID": "13",
              "category": "soluta",
              "itemName": "facilis",
              "description": "incidunt est et",
              "price": "$180.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e5",
              "itemID": "14",
              "category": "soluta",
              "itemName": "sed",
              "description": "nostrum explicabo ex",
              "price": "$457.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e4",
              "itemID": "15",
              "category": "soluta",
              "itemName": "quis",
              "description": "debitis ab voluptates",
              "price": "$4.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e3",
              "itemID": "16",
              "category": "soluta",
              "itemName": "veritatis",
              "description": "rerum quia accusantium",
              "price": "$39.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e2",
              "itemID": "17",
              "category": "soluta",
              "itemName": "quae",
              "description": "at ut repellat",
              "price": "$1.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e1",
              "itemID": "18",
              "category": "soluta",
              "itemName": "sed",
              "description": "at sunt est",
              "price": "$173.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3e0",
              "itemID": "19",
              "category": "soluta",
              "itemName": "distinctio",
              "description": "dolores voluptas non",
              "price": "$650.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3df",
              "itemID": "110",
              "category": "soluta",
              "itemName": "nemo",
              "description": "nisi cumque rerum",
              "price": "$560.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3de",
              "itemID": "21",
              "category": "modi",
              "itemName": "aliquam",
              "description": "est consectetur aliquid",
              "price": "$31.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3dd",
              "itemID": "22",
              "category": "modi",
              "itemName": "ut",
              "description": "sed aut incidunt",
              "price": "$507.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3dc",
              "itemID": "23",
              "category": "modi",
              "itemName": "alias",
              "description": "explicabo velit repudiandae",
              "price": "$666.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3db",
              "itemID": "24",
              "category": "modi",
              "itemName": "repudiandae",
              "description": "officia fugit ut",
              "price": "$36.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3da",
              "itemID": "25",
              "category": "modi",
              "itemName": "consequuntur",
              "description": "dolorum voluptatum laborum",
              "price": "$797.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d9",
              "itemID": "26",
              "category": "modi",
              "itemName": "sit",
              "description": "similique corporis eius",
              "price": "$833.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d8",
              "itemID": "27",
              "category": "modi",
              "itemName": "quaerat",
              "description": "doloremque est sunt",
              "price": "$714.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d7",
              "itemID": "28",
              "category": "modi",
              "itemName": "eaque",
              "description": "hic quia consequatur",
              "price": "$637.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d6",
              "itemID": "29",
              "category": "modi",
              "itemName": "voluptas",
              "description": "consectetur eos facere",
              "price": "$569.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d5",
              "itemID": "31",
              "category": "ut",
              "itemName": "nihil",
              "description": "facere rem vero",
              "price": "$119.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d4",
              "itemID": "32",
              "category": "ut",
              "itemName": "sint",
              "description": "ratione libero ratione",
              "price": "$878.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d3",
              "itemID": "33",
              "category": "ut",
              "itemName": "dolore",
              "description": "totam voluptas eius",
              "price": "$148.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d2",
              "itemID": "34",
              "category": "ut",
              "itemName": "dignissimos",
              "description": "consectetur tempora labore",
              "price": "$938.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d1",
              "itemID": "35",
              "category": "ut",
              "itemName": "sapiente",
              "description": "error ratione excepturi",
              "price": "$172.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3d0",
              "itemID": "36",
              "category": "ut",
              "itemName": "non",
              "description": "dolorem itaque esse",
              "price": "$419.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3cf",
              "itemID": "41",
              "category": "temporibus",
              "itemName": "inventore",
              "description": "dolorum enim corporis",
              "price": "$373.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3ce",
              "itemID": "42",
              "category": "temporibus",
              "itemName": "ea",
              "description": "voluptatem tempora voluptatibus",
              "price": "$837.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3cd",
              "itemID": "43",
              "category": "temporibus",
              "itemName": "tenetur",
              "description": "rerum officia tempora",
              "price": "$83.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3cc",
              "itemID": "44",
              "category": "temporibus",
              "itemName": "magnam",
              "description": "non ut a",
              "price": "$297.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3cb",
              "itemID": "45",
              "category": "temporibus",
              "itemName": "dolorem",
              "description": "sit architecto tenetur",
              "price": "$519.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3ca",
              "itemID": "46",
              "category": "temporibus",
              "itemName": "quia",
              "description": "fuga rem adipisci",
              "price": "$490.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3c9",
              "itemID": "47",
              "category": "temporibus",
              "itemName": "molestias",
              "description": "dicta aut quos",
              "price": "$846.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3c8",
              "itemID": "48",
              "category": "temporibus",
              "itemName": "eius",
              "description": "ad impedit placeat",
              "price": "$965.00"
            },
            {
              "_id": "5e07bbbda05d4b139115b3c7",
              "itemID": "49",
              "category": "temporibus",
              "itemName": "mollitia",
              "description": "unde earum beatae",
              "price": "$849.00"
            }
          ]
        }
      ],
      "__v": 0
    }
  ]
}

module.exports = seedScript;