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