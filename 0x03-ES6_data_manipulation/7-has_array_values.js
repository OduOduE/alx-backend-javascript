export default function hasValuesFromArray(set, array) {
  let verdict = false;
  for (const x of array) {
  // array.map((x) => {
    if (set.has(x)) {
      verdict = true;
    }
  }
  return verdict;
}
