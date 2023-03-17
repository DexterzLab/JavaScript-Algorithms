/**
 ** Bubble Sort
 ** - Time Complexity - O(n^2)
 ** - Space Complexity - O(1)
 ** - Stable

 ** - n*(n - 1) / 2: 
 *!   - (n - 1) because the last element will be in place at the end
 *!   - / 2 because we compare 0th and 1st, then 1st and 2nd then 2nd and 3rd and so on. So we compare double the amount we actually need to (so / 2)
 ** - 1^2 (121) Comparisons Total - 11 Elements
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
  if (!Array.isArray(arr)) return "Please enter an array";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // If 99(j = 0) > 44 (j = 1)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // temp = 99
        arr[j] = arr[j + 1]; // 99 -> 44 (j + 1 )
        arr[j + 1] = temp; // 44 -> 99 (j / temp)
      }
    }
  }

  return arr;
}

console.log(bubbleSort(numbers));
