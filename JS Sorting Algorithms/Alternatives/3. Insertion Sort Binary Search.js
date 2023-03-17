const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  if (!Array.isArray(arr)) return;

  // Loop through whole array
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let current = arr[i];
    let low = 0;
    let high = j - 1;
    // Binary search to find the correct position for current element
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] > current) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Move elements to make room for current element
    for (let k = j - 1; k >= low; k--) {
      arr[k + 1] = arr[k];
    }
    // Insert current element in correct position
    arr[low] = current;
  }
  return arr;
}

console.log(insertionSort(numbers));
