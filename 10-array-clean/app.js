function filterArray(numbers, shouldRemove) {
  const result = [];
  for (const number of numbers) {
    if (!shouldRemove(number)) {
      result.push(number);
    }
  }
  return result;
}d