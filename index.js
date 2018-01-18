// Add your doToElementsInArray() function here:
function doToElementsInArray(items, callback) {
  items.forEach(callback);
  return items;
};

// Add your changeCompletely() function here:
function changeCompletely(items) {
  items.forEach((item) => {
    item = 'antelope';
  });
};
