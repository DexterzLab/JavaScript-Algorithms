/**
 ** Quick Sort
 ** - Time Complexity - O(n log n)
 ** - Space Complexity - O(log n)
 ** - Unstable

 *  Made up of 2 functions
 ** Recursive mergeSort(arr, arr2)
 ** Iterative merge(arr)

 ** O(n log(n))
 ** Split Array from 8 -> 4 -> 2 -> 1 (Log(8))
 ** Merge Arrays; Check each element (loop / O(n))
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(arr) {
  if (arr.length <= 1) return arr; // Base Case

  let randomIndex = Math.floor(Math.random() * arr.length); // So its not always last index
  let pivot = arr[randomIndex]; // Less than pivot = left, More than pivot = right
  let leftArray = []; // Store less than pivot values
  let rightArray = []; // Store greater than pivot

  // Check each element to see if its less than or greater than pivot
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) continue; // Pivot doesn't go in either left or right
    if (arr[i] < pivot) {
      leftArray.push(arr[i]); // Values < pivot go in left array
    } else {
      rightArray.push(arr[i]); // Values > pivot go in the right array
    }
  }
  // Recursively quickSort left, spread those elements, add pivot, then do the same for right
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort(numbers));
