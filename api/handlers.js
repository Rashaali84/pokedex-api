const pokedex = require('../data/pokedex.json');

const logic = require('../logic');

const handlers = {
  home: (req, res) => {
    res.send('PokeDex API!');
  },
  all: (req, res) => {
    res.json(pokedex);
  },
  valuesForKey: (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.key;

    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));
      const result = logic.valuesForKey(data, key)
      console.log(result);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  evolutionsOf: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    console.log(req);
    const key = req.params.name;
    console.log(key);
    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));
      const result = await logic.evolutionsOf(data, key);
      console.log(result);

      // respond with the return value if there was no error
      await res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  typeStats: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.type;

    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));
      const result = await logic.typeStats(data, key);
      console.log(result);

      // respond with the return value if there was no error
      await res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findById: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = Number(req.params.id);

    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));

      const result = await logic.findBy.id(data, key);
      console.log(result);

      // respond with the return value if there was no error
      await res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByType: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.type;


    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));
      const result = await logic.findBy.type(data, key);
      console.log(result);

      // respond with the return value if there was no error
      await res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByWeakness: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.type;

    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));
      const result = await logic.findBy.weakness(data, key);
      console.log(result);

      // respond with the return value if there was no error
      await res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByValue: async (req, res) => {  // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.value;

    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));
      const result = await logic.findBy.value(data, key);
      console.log(result);

      // respond with the return value if there was no error
      await res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByKeyValue: async (req, res) => {   // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.key;
    const value = req.params.value;

    // use the logic you wrote to process the pokedex data
    try {
      const data = JSON.parse(JSON.stringify(pokedex.pokemon));
      const result = await logic.findBy.keyValue(data, key, value);
      console.log(result);

      // respond with the return value if there was no error
      await res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
}

module.exports = handlers;
