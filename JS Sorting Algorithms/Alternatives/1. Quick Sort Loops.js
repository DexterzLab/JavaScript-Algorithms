function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let randomIndex = Math.floor(Math.random() * arr.length);
  let pivot = arr[randomIndex];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) continue;
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  let leftSorted = quickSort(leftArray);
  let rightSorted = quickSort(rightArray);
  let sortedArray = [];

  for (let i = 0; i < leftSorted.length; i++) {
    sortedArray.push(leftSorted[i]);
  }
  sortedArray.push(pivot);
  for (let j = 0; j < rightSorted.length; j++) {
    sortedArray.push(rightSorted[j]);
  }
  return sortedArray;
}
