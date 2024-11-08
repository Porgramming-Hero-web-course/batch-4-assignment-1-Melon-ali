function removeDuplicates(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

console.log(
  JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
