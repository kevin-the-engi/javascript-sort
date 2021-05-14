quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(lesser).concat([pivot]).concat(quickSort(greater));
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
quickSort(numbers)