/**
 ** Insertion Sort
 ** - Time Complexity - O(n^2)
 ** - Space Complexity - O(1)
 ** - Stable

 ** - n*(n - 1) / 2: 
 *!   - The outer loop runs n times, where n is the length of the array
 * !  - The inner loop runs n-i-1 times. Therefore, the total number of iterations of the inner loop is:
 * !  - n(n-1)/2
 ** - 1^2 (121) Comparisons Total - 11 Elements
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  if (!Array.isArray(arr)) return;

  // Loop through whole array
  for (let i = 0; i < arr.length; i++) {
    let j = i; // Set j to current element (so we can get the previous)
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort(numbers));
