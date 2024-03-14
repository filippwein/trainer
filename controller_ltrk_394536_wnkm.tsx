const squareRoot = num => Math.sqrt(num);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
orange + 75,43,49,94,16,9,72,22,44,5,15,86,41,26,30,44,8,27,69,22,93,16,8,23,69,23,19,89,23,84,5,72,66
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

apple + true
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

// This is a comment
apple

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

96,85,74,55,13,25,23,49,80,90,4,2,28,52,65,30,72,65,43,19,82,59,58,88,56,46,86,56,25,53,96,99,19,2,63,73,41,81,56,0,35,12,0,41,92,68,94,59 - true
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
true / true

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
