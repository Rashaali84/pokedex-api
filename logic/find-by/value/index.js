// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {
    let foundedItems = [];
    pokeArray.map((record) => {
        for (let [key, valueIn] of Object.entries(record)) {
            if (String(valueIn) === value)
                foundedItems.push(record);
        }
    });
    let expected = [];
    foundedItems.map((item) => expected.push({ name: item.name, num: item.num }));

    if (expected.length === 0)
        return null;
    else
        return expected;
};


module.exports = value;
