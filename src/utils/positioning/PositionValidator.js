export default (orientation, size, columnStart, rowStart) => {
  const sizeToCheck = size - 1;
  return (
    (orientation === 'vertical' && columnStart - sizeToCheck >= 0) ||
    (orientation === 'horizontal' && rowStart + sizeToCheck <= 9)
  );
};
