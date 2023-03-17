/**
 ** Selection Sort
 ** - Time Complexity - O(n^2)
 ** - Space Complexity - O(1)
 ** - Unstable

 ** - n*(n - 1) / 2: 
 *!   - The outer loop runs n times, where n is the length of the array
 * !  - The inner loop runs n-i-1 times. Therefore, the total number of iterations of the inner loop is:
 * !  - n(n-1)/2
 ** - 1^2 (121) Comparisons Total - 11 Elements
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    let min = i; // Set current index as minimum
    // i + 1 - because we shouldn't count ourself
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // Smallest is 0 (index 10)
      }
    }
    if (min != i) {
      let temp = arr[i]; // Store temp var for i
      arr[i] = arr[min]; // 0 for first loop (min = 10 so index 10) arr[i] = arr[10]
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(numbers));
