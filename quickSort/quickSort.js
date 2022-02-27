const qSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr.shift();
  const lowerArr = arr.filter((item) => item <= pivot);
  const largerArr = arr.filter((item) => item > pivot);

  console.log(lowerArr, largerArr);
  return [...qSort(lowerArr), pivot, ...qSort(largerArr)];
};

const testArr = [12, 1, 2, 122, 45, 67, -2, 12, 44, -123];

console.log(qSort(testArr));
