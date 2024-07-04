function QuickSort(list) {
  if (list.length <= 1) {
    return list;
  }

  const pivot = list[list.length - 1];
  const leftList = [];
  const rightList = [];

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < pivot) {
      leftList.push(list[i]);
    } else {
      rightList.push(list[i]);
    }
  }

  return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
}
