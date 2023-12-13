function deleteItem(storageKey, itemKey) {
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    let items = JSON.parse(storedData);

    // Identify the item to delete
    const itemIndex = findItemIndex(items, itemKey);

    if (itemIndex !== -1) {
      // Remove the item from the array
      items.splice(itemIndex, 1);

      // Update local storage
      localStorage.setItem(storageKey, JSON.stringify(items));

      console.log(`Deleted ${itemKey} successfully.`);
    } else {
      console.error(`${itemKey} not found in the array.`);
    }
  } else {
    console.error(`No data found for ${storageKey} in local storage.`);
  }
}

function findItemIndex(items, itemKey) {
  return items.findIndex((item) => item.name === itemKey);
}
