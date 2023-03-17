/**
 ** Radix Sort
 ** - Time Complexity - O(nk) or O(d*(n + k)) - If k is not relatively close to n
 ** - Space Complexity - O(n+k)
 ** - Stable
 ** - Non-comparison
 ** - Paralellizable 
 ** - Strings + Integers

 ** "n" - How many ELEMENTS are in the array
 ** "k" - How many DIGITS are in the LARGEST number in the array: 1000 means "k" = 4
 ** - LARGE Integers Large Range (Othewise use Radix)
 */

const numbers = [6, 5, 2, 1, 8, 7, 3, 4];

function radixSort(arr, radix) {
  if (!Array.isArray(arr)) return "Input must be an array.";

  if (arr.length <= 1) return arr;

  // Radix Validation; Has to be a number, >= 2 and a whole number
  if (typeof radix !== "number" || radix < 2 || radix % 1 !== 0) return;

  // Element Validation; Each element has to be a number, whole and >= 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return "Elements must be numbers.";
    if (arr[i] % 1 !== 0) return "Numbers must be whole.";
    if (arr[i] < 0) return "Numbers must be 0 or greater.";
  }

  const base = radix; // Number of buckets
  let divider = 1; // Start at the least sigificant digit (rightmost)
  let maxVal = arr[0]; // We need to know the maxVal in the array to determine how many full loops to do (4 digits = 4 iterations)

  // If Divider > maxVal, it means no more loops need to be performed and the sorting is done
  while (divider <= maxVal) {
    // Create an array that holds an array for each bucket with a length according to the base (base 10 = length of 10)
    const buckets = Array.from({ length: base }, () => []);

    // Loop through each element
    for (let i = 0; i < arr.length; i++) {
      let digits = Math.floor((arr[i] / divider) % base); // Get the remainder of the calculation
      buckets[digits].push(arr[i]); // Add the remainder to the correct bucket (if it was 8, put it into bucket 8)

      // Check if current index > max val; if it is, maxVal = current index
      // The length of maxVal is used to determine how many iterations the while loop undergoes
      if (arr[i] > maxVal) maxVal = arr[i];
    }

    arr.length = 0; // Clear the array

    // Loop through each array in buckets
    for (let j = 0; j < buckets.length; j++) {
      arr.push(...buckets[j]); // Spread the array at currentIndex
    }
    divider *= base; // Move to the next significant digit (1s -> 10s -> 100s -> 1000s)
  }
  return arr;
}

console.log(radixSort(numbers, 10));
