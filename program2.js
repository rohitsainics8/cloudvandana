const numbers = [5, 2, 9, 1, 5, 6];

// Sort the array in descending order
numbers.sort(function(a, b) {
  return b - a; // Compare in reverse order (b - a for descending)
});

console.log(numbers); // [9, 6, 5, 5, 2, 1]

or
  //without using sort
function bubbleSortDescending(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        // Swap arr[i] and arr[i + 1]
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = bubbleSortDescending(numbers);

console.log(sortedNumbers); // [9, 6, 5, 5, 2, 1]
