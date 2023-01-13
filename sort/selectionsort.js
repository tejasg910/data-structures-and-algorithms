//selection sort algorithm (ascending order)

//find the smallest element in the array
//replace the pair

const arr = [3, 54, 2, 6, 12, 745, 86, 34];
console.log(arr);

arr.forEach((value, index) => {
  let min = index;
  console.log(min);
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  let temp = arr[min];
  arr[min] = value;
  arr[index] = temp;
});

console.log(arr);
