/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (const idx in array) {
    myArray.push(appendString + idx);
  }

  return myArray;
}
