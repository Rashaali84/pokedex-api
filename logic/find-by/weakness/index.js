const weakness = (pokeArray, type) => {
    let foundedItems = pokeArray.filter((item) => {
        if (item.weaknesses.includes(type))
            return item;
    });

    let expected = [];
    foundedItems.map((item) => expected.push({ name: item.name, num: item.num }));

    if (expected.length === 0)
        return null;
    else
        return expected;
};


module.exports = weakness;
