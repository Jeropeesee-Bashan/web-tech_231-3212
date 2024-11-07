const dishes = [
    {
        keyword: "tom-yam",
        name: "Том ям с креветками",
        price: 365,
        category: "soup",
        count: "400 мл"
    },
    {
        keyword: "norway-soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "350 мл"
    },
    {
        keyword: "pelmeni",
        name: "Пельмени русские настоящие",
        price: 350,
        category: "main",
        count: "250 г"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main",
        count: "300 г"
    },
    {
        keyword: "cutlets-potatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main",
        count: "320 г"
    },
    {
        keyword: "roast-potato",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main",
        count: "200 г",
    },
    {
        keyword: "kompot",
        name: "Компот",
        price: 80,
        category: "drink",
        count: "300 мл",
    },
    {
        keyword: "lemonade",
        name: "Лимонад",
        price: 100,
        category: "drink",
        count: "300 мл",
    }
];

dishes.sort((a, b) => {
    return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
});

export default dishes;
