export const arrayIntoSectionsOfTwo = (elements) => {
  const arrayInTwo = [];
  elements.forEach((element, index) => {
    if (index % 2 === 0) {
      arrayInTwo.push([]);
    }
    arrayInTwo[arrayInTwo.length - 1].push(element)
  });
  return arrayInTwo
};