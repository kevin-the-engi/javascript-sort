quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let index = findMiddle(array);
  let pivot = array[index];
  let lesser = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      continue;
    }

    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(lesser).concat([pivot]).concat(quickSort(greater));
}

findMiddle = (array) => {
  let start = 0,
      end = array.length - 1,
      mid = Math.floor(array.length / 2);

  if ((array[start] < array[mid] && array[mid] < array[end]) || (array[start] > array[mid] && array[mid] > array[end])) {
    return mid;
  } else if ((array[mid] < array[start] && array[start] < array[end]) || (array[mid] > array[start] && array[start] > array[end])) {
    return start;
  } else {
    return end;
  }
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
quickSort(numbers)

// Divide and conquer algo. Time complexity of O(n log n). Space complexity of O(n)
// First find a pivot, can be start or end, or chosen from middle of three for best results
// [8]
// Iterate through array, any item lesser than pivot value is placed in one array and items greater placed in a separate array
// [5, 6, 3, 1, 4, 2, 7] [9, 10]
// Once finished iterating, recurse both arrays while also concatenating lesser + pivot + greater
// quickSort([5, 6, 3, 1, 4, 2, 7]) + [8] + quickSort([9, 10])
// Recursion ends once base case is reached. Since arrays are growing smaller, will end once array size is 1 or 0