const id = (pokeData, id) => {
    const foundItem = pokeData.find((item) => { return item.id === id });
    if (foundItem) return foundItem;
    else return null;
}
module.exports = id;

