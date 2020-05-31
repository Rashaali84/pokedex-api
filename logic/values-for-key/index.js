const isEqual = require('lodash').isEqual;
const _ = require('lodash');


const valuesForKey = (pokeArray, key) => {

  let arrayWithKey = pokeArray.map(item => { return item[key] });
  const setArray = new Set(arrayWithKey.map(x => JSON.stringify(x)))
  let diff_expected = [...setArray];
  diff_expected = _.without(diff_expected, undefined);
  let uniqArray = diff_expected.map(x => JSON.parse(x))
  return uniqArray;

};


module.exports = valuesForKey;

