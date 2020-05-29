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

/* https://lodash.com/docs/4.17.15#isEqual

  isEqual is a function to compare objects and arrays.

  it will come in handy on this challenge

*/

/*  arrayWithKey = pokeArray.map(item => { return item[key] });
  //arrayWithKey.splice(0, arrayWithKey.length, ...(new Set(arrayWithKey)));
  const setArray = new Set(arrayWithKey.map(x => JSON.stringify(x)))
  let uniqArray = [];
  if (!['prev_evolution', 'next_evolution'].includes(key))
    uniqArray = [...setArray].map(x => JSON.parse(x))


  let expected = [];
  expected = _.without(uniqArray, undefined);

  if (['prev_evolution', 'next_evolution'].includes(key)) {
    let diff_expected = [...setArray];
    diff_expected = _.without(diff_expected, undefined);
    let uniqArray = diff_expected.map(x => JSON.parse(x))

    return uniqArray;
  }
  else {
    return expected;
  }*/