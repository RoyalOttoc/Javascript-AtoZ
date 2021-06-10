export function evenOrOdd(num) {
  const parseNum = Number.parseInt(num);

  if (parseNum % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
