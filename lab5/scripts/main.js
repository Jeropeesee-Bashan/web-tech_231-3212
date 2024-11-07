import dishes from "./dishes.js";

const dish_types = {
    fish: "рыбный",
    meat: "мясной",
    veg: "вегетерианский",
    hot: "горячий",
    cold: "холодный",
    small: "малая порция",
    medium: "средняя порция",
    big: "большая порция"
}

const categories = {
    soup: {
        names: ["Суп", "Супы"],
        types: ["fish", "meat", "veg"]
    },
    main: {
        names: ["Главное блюдо", "Главные блюда"],
        types: ["fish", "meat", "veg"]
    },
    drink: {
        names: ["Напиток", "Напитки"],
        types: ["hot", "cold"]
    },
    starter: {
        names: ["Салат/Стартер", "Салаты/Стартеры"],
        types: ["fish", "meat", "veg"]
    },
    dessert: {
        names: ["Десерт", "Десерты"],
        types: ["small", "medium", "big"]
    }
};

function count_price() {
    let result = 0;

    for (const category in categories) {
        if (categories[category].dish === null)
            continue;

        const price = categories[category].dish.price;

        if (typeof(price) !== "number")
            continue;

        result += price;
    }

    return result;
}

function create_filter(category) {
    const result = document.createElement("div");
    const types = categories[category].types;

    result.classList.add("type-filter");

    types.forEach(type => {
        const button = document.createElement("button");
        button.classList.add("type-filter-chip");
        button.textContent = dish_types[type];

        button.onclick = () => {
            const chips = result.getElementsByClassName("type-filter-chip");
            const toggled = button.classList.toggle("type-filter-chip-active");
            const dishes = categories[category].menu.getElementsByClassName("dish");

            for (const chip of chips) {
                if (button === chip)
                    continue;
                chip.classList.remove("type-filter-chip-active");
            }

            for (const dish of dishes) {
                const kind = dish.getAttribute("data-kind");
                dish.style.display = (kind === type || !toggled) ? "flex" : "none";
            }
        };

        result.appendChild(button);
    });

    return result;
}

function create_section(category) {
    const result = document.createElement("section");
    const heading_m = document.createElement("h3");
    const menu = document.createElement("div");
    const filter = create_filter(category);
    const name = document.createTextNode(categories[category].names[1]);

    result.setAttribute("class", "dish-section");
    menu.setAttribute("class", "dish-menu");

    heading_m.appendChild(name);
    result.appendChild(heading_m);
    result.appendChild(filter);
    result.appendChild(menu);

    categories[category].menu = menu;
    return result;
}

function create_dish(dish) {
    const result = document.createElement("div");
    const image = document.createElement("img");
    const price = document.createElement("p");
    const name = document.createElement("p");
    const amount = document.createElement("p");
    const add_button = document.createElement("button");
    const symbol = typeof(dish.price) === "string" ? '' : ' ₽';
    const path = "images/" + dish.category + '/' + dish.keyword + ".jpg";

    result.setAttribute("class", "dish");
    result.setAttribute("data-dish", dish.keyword);
    result.setAttribute("data-kind", dish.kind);
    result.style.display = "flex";
    image.setAttribute("src", path);
    image.setAttribute("alt", dish.name);
    price.setAttribute("class", "dish-price");
    name.setAttribute("class", "dish-name");
    amount.setAttribute("class", "dish-amount");

    result.style["background-color"] = "white";

    price.appendChild(document.createTextNode(dish.price + symbol));
    name.appendChild(document.createTextNode(dish.name));
    amount.appendChild(document.createTextNode(dish.count));
    add_button.appendChild(document.createTextNode("Добавить"));

    result.appendChild(image);
    result.appendChild(price);
    result.appendChild(name);
    result.appendChild(amount);
    result.appendChild(add_button);

    result.addEventListener("click", event => update_info(dish));

    return result;
}

function no_dish(category) {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("Не выбрано."));

    return p;
}

function dish_info(dish) {
    const p = document.createElement("p");
    const symbol = typeof(dish.price) === "string" ? '' : ' ₽';
    const info = document.createTextNode(dish.name + ' ' + dish.price + symbol);

    p.appendChild(info);

    return p;
}

function update_info(dish) {
    info_block.innerHTML = "";

    if (dish === null) {
        const p = document.createElement("p");

        for (const category in categories) {
            categories[category].dish = null;
        }

        p.appendChild(document.createTextNode("Ничего не добавлено."));
        info_block.appendChild(p);

        return;
    }

    const heading = document.createElement("h3");
    const overall = document.createElement("p");

    categories[dish.category].dish = dish;

    for (const category in categories) {
        const dish = categories[category].dish;
        const menu = categories[category].menu;
        const heading = document.createElement("h3");
        const name = categories[category].names[0];

        for (const card of menu.getElementsByClassName("dish")) {
            card.style["background-color"] = "white";
        }

        heading.appendChild(document.createTextNode(name));
        info_block.appendChild(heading);

        if (dish === null) {
            info_block.appendChild(no_dish(category));
        } else {
            const selector = "div[data-dish=" + dish.keyword + "]";
            info_block.appendChild(dish_info(dish));
            menu.querySelector(selector).style["background-color"] = "grey";
        }
    }

    heading.appendChild(document.createTextNode("Стоимость заказа"));
    overall.setAttribute("class", "overall-price");
    overall.appendChild(document.createTextNode(count_price() + ' ₽'));
    info_block.appendChild(heading);
    info_block.appendChild(overall);
}

const main_block = document.getElementById("dishes");
const info_block = document.getElementById("dish-order-info");
const reset_button = document.getElementById("order-reset");

reset_button.addEventListener("click", event => update_info(null));

for (const category in categories) {
    main_block.appendChild(create_section(category));
}

for (const dish of dishes) {
    categories[dish.category].menu.appendChild(create_dish(dish));
}

update_info(null);
