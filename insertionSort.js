insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    for (var j = i - 1; j >= 0 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = value;
  }

  return array;
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
insertionSort(numbers)

// Big O for insertion sort is O(n^2) to scan through entire array.
// Values from outer loop is "inserted" into inner loop.
// Outer loop starts at index 1 while inner loop starts at i - 1;
// Inner loop loops backwards until reaching the start of the array or the previous number is less than current value for array[i];
// Values are shifted to the right by index + 1 so current value is replaced by previous index value and making room to insert current value into proper location.
// Inner loop will stop at location where current value can be inserted, indicating it is less than index + 1 value but greater than index - 1 value
// Need to offset by index + 1 since j-- at end of loop making it one index off.