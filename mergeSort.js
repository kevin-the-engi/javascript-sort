divide = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let smallOne = divide(array.slice(0, mid));
  let smallTwo = divide(array.slice(mid));

  return sort(smallOne, smallTwo);
}

sort = (smallOne, smallTwo) => {
  let sorted = [];

  while(smallOne.length > 0 && smallTwo.length > 0) {
    if (smallOne[0] < smallTwo[0]) {
      sorted.push(smallOne.shift());
    } else {
      sorted.push(smallTwo.shift());
    }
  }

  return sorted.concat(smallOne).concat(smallTwo);
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
console.log(divide(numbers))

// Divide-and-conquer approach. Big O(n log n)
// First divide the array into two recursively until they are single element arrays.
// [8] [5] [6] [9] [3] [1] [4] [2] [7] [10]
// Then pass both into sort function.
// Create output array to store result. Loop while arrays have greater than length 0, for uneven array inputs
// Then check which element is lower, store the lower element in result and remove it from respective array.
// Once one array is empty, concatenate remaining array to the end.
// [8] [5] => [5, 8]
// [6] [9][3] => [6] [3, 9] => [3, 6] + [9] => [3, 6, 9]
// [5, 8] [3, 6, 9] => [5, 8] [6, 9] => [8] [6, 9] => [8] [9] => [9]
// result = [3] => [3, 5] => [3, 5, 6] => [3, 5, 6, 8] => [3, 5, 6, 8, 9]