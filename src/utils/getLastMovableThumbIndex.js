function getLastMovableThumbIndex(array, selectedIndex) {
  const maxIndex = array.length - 5;

  if (array.length <= 5) return 0;

  if (selectedIndex <= maxIndex) return selectedIndex;
  else return maxIndex;
}
export default getLastMovableThumbIndex;
