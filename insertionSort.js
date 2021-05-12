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