const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i,
        minValue = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (minValue > array[j]) {
        minIndex = j;
        minValue = array[j];
      }
    }

    array = swapNum(array, i, minIndex);
  }

  return array;
}

const swapNum = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  return array;
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
selectionSort(numbers);

// Selection sort is an O(n^2) sorting algo
// It uses nested loops, with the outer loop starting at 0 index and the inner loop searching for the minimum value.
// A minimum index and value is tracked, starting with 0 index/value
// Within the inner loop, it compares the values with value of array[i] to see if it is lesser. If so, then both minimum index and value are updated.
// This continues until inner loop reaches the end and the minimum value/index is found.
// Once inner loop is complete, the array[i] value is swapped with minimum value using i and minIndex.