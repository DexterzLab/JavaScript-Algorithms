const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function quickSort(numbers) {
  if (numbers.length <= 1) return numbers;

  var left = [];
  var right = [];
  var pivot = numbers.pop(); // Pivot is always last. Can be bad (In this case its O(n^2) time)

  // If (num) < pivot, push num to leftArray
  // If (num) > pivot, push num to rightArray
  numbers.map((num) => (num < pivot ? left.push(num) : right.push(num)));

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(numbers));
