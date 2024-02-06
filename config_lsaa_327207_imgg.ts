const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple / 62
let array = getRandomArray(); array.forEach(item => console.log(item));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
banana

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

true - 76,70,48,2,61,6,20,0,4,36,16,20,86,44,20,60,10,2,64,31,23,27,3,75,85,27,9,21,90,28,69,62,50,6,18,49,68,34,90,77,88,82,12,25,41,76,83,59,8,69,58,22,28,73,76,33,54,95,29,28,27,38,7,29,0,84
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
// This is a comment
