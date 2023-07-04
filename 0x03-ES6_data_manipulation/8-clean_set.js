export default function cleanSet(set, string) {
  // if (val[0] in set === '${stringString}') {
  if (string === undefined || string.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(string) : ''))
    .map((str) => (str !== undefined ? str.slice(string.length) : ''))
    .join('-');
}
// const filterdVals = Array.from(set).filter(value => value.startsWith(startString));
// return filterdVals.join('-');
