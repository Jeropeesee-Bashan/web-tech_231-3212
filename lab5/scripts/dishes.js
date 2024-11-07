const dishes = [
    // Супы
    {
        keyword: "tom-yam",
        name: "Том ям с креветками",
        price: 365,
        category: "soup",
        count: "400 мл",
        kind: "fish"
    },
    {
        keyword: "norway-soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "350 мл",
        kind: "fish"
    },
    {
        keyword: "borscht",
        name: "Борщ с мясом",
        price: 300,
        category: "soup",
        count: "400 мл",
        kind: "meat"
    },
    {
        keyword: "chicken-soup",
        name: "Куриный суп с лапшой",
        price: 250,
        category: "soup",
        count: "350 мл",
        kind: "meat"
    },
    {
        keyword: "vegetable-soup",
        name: "Овощной суп",
        price: 220,
        category: "soup",
        count: "300 мл",
        kind: "veg"
    },
    {
        keyword: "lentil-soup",
        name: "Суп из чечевицы",
        price: 240,
        category: "soup",
        count: "350 мл",
        kind: "veg"
    },

    // Главные блюда
    {
        keyword: "pelmeni",
        name: "Пельмени русские настоящие",
        price: 250,
        category: "main",
        count: "250 г",
        kind: "meat"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main",
        count: "300 г",
        kind: "meat"
    },
    {
        keyword: "cutlets-potatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main",
        count: "320 г",
        kind: "meat"
    },
    {
        keyword: "grilled-salmon",
        name: "Лосось на гриле",
        price: 450,
        category: "main",
        count: "250 г",
        kind: "fish"
    },
    {
        keyword: "fish-and-chips",
        name: "Рыба с картофелем фри",
        price: 340,
        category: "main",
        count: "300 г",
        kind: "fish"
    },
    {
        keyword: "veggie-bowl",
        name: "Овощной боул",
        price: 280,
        category: "main",
        count: "250 г",
        kind: "veg"
    },
    {
        keyword: "roast-potato",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main",
        count: "200 г",
        kind: "veg"
    },

    // Стартеры и салаты
    {
        keyword: "salmon-salad",
        name: "Салат с лососем",
        price: 290,
        category: "starter",
        count: "200 г",
        kind: "fish"
    },
    {
        keyword: "caesar-salad",
        name: "Цезарь с курицей",
        price: 250,
        category: "starter",
        count: "250 г",
        kind: "meat"
    },
    {
        keyword: "greek-salad",
        name: "Греческий салат",
        price: 180,
        category: "starter",
        count: "200 г",
        kind: "veg"
    },
    {
        keyword: "vegetable-salad",
        name: "Овощной салат",
        price: 160,
        category: "starter",
        count: "200 г",
        kind: "veg"
    },
    {
        keyword: "hummus",
        name: "Хумус с овощами",
        price: 200,
        category: "starter",
        count: "150 г",
        kind: "veg"
    },
    {
        keyword: "bruschetta",
        name: "Брускетта с томатами и базиликом",
        price: 120,
        category: "starter",
        count: "100 г",
        kind: "veg"
    },

    // Напитки
    {
        keyword: "kompot",
        name: "Компот",
        price: 80,
        category: "drink",
        count: "300 мл",
        kind: "cold"
    },
    {
        keyword: "lemonade",
        name: "Лимонад",
        price: 100,
        category: "drink",
        count: "300 мл",
        kind: "cold"
    },
    {
        keyword: "iced-tea",
        name: "Холодный чай",
        price: 90,
        category: "drink",
        count: "300 мл",
        kind: "cold"
    },
    {
        keyword: "coffee",
        name: "Кофе",
        price: 120,
        category: "drink",
        count: "200 мл",
        kind: "hot"
    },
    {
        keyword: "tea",
        name: "Чай",
        price: 70,
        category: "drink",
        count: "200 мл",
        kind: "hot"
    },
    {
        keyword: "hot-chocolate",
        name: "Горячий шоколад",
        price: 150,
        category: "drink",
        count: "250 мл",
        kind: "hot"
    },

    // Десерты
    {
        keyword: "macarons",
        name: "Макароны",
        price: 120,
        category: "dessert",
        count: "80 г",
        kind: "small"
    },
    {
        keyword: "chocolate-cake",
        name: "Шоколадный торт",
        price: 220,
        category: "dessert",
        count: "150 г",
        kind: "medium"
    },
    {
        keyword: "cheesecake",
        name: "Чизкейк",
        price: 200,
        category: "dessert",
        count: "150 г",
        kind: "medium"
    },
    {
        keyword: "ice-cream",
        name: "Мороженое",
        price: 90,
        category: "dessert",
        count: "100 г",
        kind: "small"
    },
    {
        keyword: "fruit-salad",
        name: "Фруктовый салат",
        price: 150,
        category: "dessert",
        count: "200 г",
        kind: "small"
    },
    {
        keyword: "big-cake",
        name: "Большой торт",
        price: 500,
        category: "dessert",
        count: "500 г",
        kind: "big"
    }
];

dishes.sort((a, b) => {
    return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
});

export default dishes;
