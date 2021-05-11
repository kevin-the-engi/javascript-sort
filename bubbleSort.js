let bubbleSort = (array) => {
  const innerFunction = (arr, isSorted) => {
    if (isSorted) {
      return arr;
    }

    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];

      if (current > next) {
        arr = swapNum(arr, i, i + 1);
        isSorted = false;
      }
    }
    return innerFunction(arr, isSorted);
  }

  return innerFunction(array, false);
}

let swapNum = (array, current, next) => {
  let temp = array[current];
  array[current] = array[next];
  array[next] = temp;

  return array;
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
bubbleSort(numbers)