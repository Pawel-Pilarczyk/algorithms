const array = [];

for (let i = 1; i <= 100; i++) {
  array.push(i);
}

const binarySearch = (searchedNumber, array) => {
  let tries = 1;
  let min = 0;
  let max = array.length - 1;

  do {
    console.log(min, max);
    const mid = Math.round((max + min) / 2);
    if (searchedNumber === array[mid]) {
      return { indexOfElement: mid, howManyTries: tries };
    }
    if (searchedNumber > array[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    tries++;
  } while (min <= max);
  return null;
};

console.log(binarySearch(1, array));
