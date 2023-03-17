/**
 ** Counting Sort
 ** - Time Complexity - O(n+k) - 
 ** - Space Complexity - O(k) - 
 ** - Stable
 ** - Non-comparison
 ** - Paralellizable 
 ** - Strings + Integers
 ** - SMALL Integers KNOWN Range (Othewise use Radix)

 ** "n" - Where n is the amount of elements in the array
 ** "k" - Where k is range of values (use an Object/Hashtable) Otherwise it can increase
 *! Positive Whole Numbers Only
 */

const numbers = [10, 6, 2, 5, 3, 1, 8, 7, 4, 9, 10];

function countingSort(arr) {
  if (!Array.isArray(arr)) return;

  //   Force all numbers, and no decimals
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number")
      return "Counting Sort only works with numbers.";
    if (arr[i] % 1 !== 0) return "All numbers must be positive, whole numbers";
  }

  const count = {}; // Count how many times each number appears

  // Calculate the count of each element
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++; // If number exists, increment
    } else {
      count[arr[i]] = 1; // If number doesn't exist, set it to equal 1
    }
  }

  const sorted = []; // Create a new sorted array

  // Loop over every key-value pair in Count Object
  for (let number in count) {
    if (count.hasOwnProperty(number)) {
      // Loop until j = number of times that number occured
      for (let j = 0; j < count[number]; j++) {
        sorted.push(parseInt(number)); // Convert key to number, then push to array
      }
    }
  }
  return sorted;
}

console.log(countingSort(numbers));
