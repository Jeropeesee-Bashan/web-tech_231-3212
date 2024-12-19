const req = new XMLHttpRequest();

req.open("GET", "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes", false);
req.send();

const dishes = JSON.parse(req.response);

dishes.sort((a, b) => {
    return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
});

export default dishes;
