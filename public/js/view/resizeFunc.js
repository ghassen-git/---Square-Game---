export const resize = function (arr, n) {
  /* n *= 2;
  const length = arr[0].length;
  const newRow = Array(length + n).fill(0);

  const newArr = arr.map((row) => {
    const expandedRow = Array(n / 2)
      .fill(0)
      .concat(row, Array(n / 2).fill(0));
    return expandedRow;
  });

  for (let i = 0; i < n / 2; i++) {
    newArr.unshift([...newRow]);
    newArr.push([...newRow]);
  }
 */
  /* return newArr; */
  return arr;
};

export const decrease = function (arr, n) {
  arr.pop();
  arr.shift();

  for (let i = 0; i < arr.length; i++) {
    arr[i].shift();
    arr[i].pop();
  }

  return arr;
};
