const typeStats = (pokeArray, type) => {
    let weaknessCount = 0;
    let itemCount = 0;
    pokeArray.map((item) => {

        if (item.type.includes(type))
            itemCount++;
        if (item.weaknesses.includes(type))
            weaknessCount++;
    });
    const expected = {
        typeCount: itemCount,
        typeName: type,
        weaknessCount: weaknessCount
    }

    return expected;
};

module.exports = typeStats;
