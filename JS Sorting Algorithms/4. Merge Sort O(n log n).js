/**
 ** Merge Sort
 ** - Time Complexity - O(n log n)
 ** - Space Complexity - O(n)
 ** - Stable

 *  Made up of 2 functions
 ** Recursive mergeSort(arr, arr2) - Divide and Conquer
 ** Iterative merge(arr)

 ** O(n log(n))
 ** Split Array from 8 -> 4 -> 2 -> 1 (Log(8))
 ** Merge Arrays; Check each element (loop / O(n))
 */

const numbers = [8, 6, 4, 2, 1, 3, 7, 5];

function mergeSort(arr) {
  debugger;
  if (!Array.isArray(arr)) return;

  // Base Case / Worst Case Scenario
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2); // Get half the array
  const left = []; // Store half of arr in here
  const right = []; // Store the other half here

  // Start at 0, go up to mid (4)
  for (let i = 0; i < mid; i++) {
    left[i] = arr[i]; // Add the first half (8, 6, 4, 2)
    // left[i].push(arr[i])
  }

  // Start at mid (4), go up to length
  // [j - mid] because otherwise we'll insert at index 4 (and then have empty spaces)
  for (let j = mid; j < arr.length; j++) {
    right[j - mid] = arr[j]; // Add the other half (1, 3, 7, 5)
    // right[j].push(arr[j])
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // If (!Array.isArray(left) || !Array.isArray(right)) return;
  const result = []; // Store final array
  let leftIndex = 0; // Keep track of left pointer
  let rightIndex = 0; // Keep track of right pointer

  // If leftIndex < left.length, it means there are still elements in the array, so keep looping
  while (leftIndex < left.length && rightIndex < right.length) {
    // if left[0] < right[0]
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]); // Add left first (because it has to be sorted in order)
      leftIndex++; // Now check left[1]
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // In cases where there are still elements in the list, those will be sorted so just add them
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

console.log(mergeSort(numbers));
