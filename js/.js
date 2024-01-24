function checkStorage(storage, item) {
  let itemNormalize = item.toLowerCase();
  if (storage.includes(itemNormalize)) {
    return `${itemNormalize} is available to order!`;
  } else {
    return 'Sorry! We are out of stock!';
  }
}

console.log(checkStorage(['apple', 'peach', 'pear', 'banana']));
