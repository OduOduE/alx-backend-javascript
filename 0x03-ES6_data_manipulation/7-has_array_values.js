/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, array) {
  let verdict = false;
  array.map((x) => {
    if (set.has(x)) {
      verdict = true;
    }
  });
  return verdict;
}
