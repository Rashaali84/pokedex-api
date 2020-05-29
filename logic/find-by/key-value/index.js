// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {

    let foundedItems = pokeArray.filter((item) => {
        value = Number(value) ? Number(value) : value;
        if (item[key] === value)
            return item;
    });

    let expected = [];
    foundedItems.map((item) => expected.push({ "name": item.name, "num": item.num }));

    if (expected.length === 0)
        return null;
    else
        return expected;
}


module.exports = keyValue;
