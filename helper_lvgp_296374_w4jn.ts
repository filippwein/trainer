const reverseString = str => str.split("").reverse().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

45,34,38,7,64,36,88,98,21,28,46,82,1,14,20,78,5,7,64 / 77
const getRandomSubset = (array, size) => array.slice(0, size);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
orange - false
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
kiwi


const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
apple


const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true * 98
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
