const arrayOfDigits = [1, 2, 54, 666, 123, 66, 33, 12, 56, 678];

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  const newArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let smallestIndex = findSmallest(arr);
    newArr.push(arr.splice(smallestIndex, 1)[0]);
  }
  return newArr;
};

console.log(selectionSort(arrayOfDigits));
