const evolutionOf = (pokeArray, name) => {
  var expected = [];
  pokeArray.map((item) => {
    if (item.name === name) {
      expected.push({ num: item.num, name: item.name });
      if (item.next_evolution)
        item.next_evolution.map((el) => expected.push(el));
      if (item.prev_evolution)
        item.prev_evolution.map((el) => expected.push(el));
    }
  });

  if (expected.length === 0)
    return null;
  else { const res = expected.sort((a, b) => (a.num > b.num) ? 1 : -1); return res; }
};

module.exports = evolutionOf;


/*
  return an array with all evolutions of a pokemon, including itself:

    [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]

  if a pokemon does not exist in the pokeArray, return null

    null

  read the ./spec.js file & study the data samples for a better understanding
*/
