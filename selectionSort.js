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
