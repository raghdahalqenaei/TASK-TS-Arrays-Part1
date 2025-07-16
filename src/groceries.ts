// Step 1:
// Write a createGroceries function that returns an array with 6 groceries items (each item is a string)
function createGroceries(): string[] {
  return ["Milk", "Carrots", "Eggs", "Cheese", "Apples", "Tomatoes"];
}

// Step 2:
// Write a getSecondGroceryItem function that returns the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries: string[]): string {
  return groceries[1];
}

// Step 3:
// Write a getGroceriesCount that returns the length of the `groceries` argument
function getGroceriesCount(groceries: string[]): number {
  return groceries.length;
}

// Step 4:
// Write a getLastGroceryItem function that returns the last grocery item from `groceries` argument
function getLastGroceryItem(groceries: string[]): string {
  return groceries[groceries.length - 1];
}

// Step 5:
// Write a removeLastGroceryItem function that removes the last grocery item and return it
function removeLastGroceryItem(groceries: string[]): string {
  return groceries.pop()!;
}

// Step 6:
// Write a addNewGroceries function that adds two new and different grocery items to the end of the groceries argument
// and returns the modified array
function addNewGroceries(
  groceries: string[],
  itemOne: string,
  itemTwo: string
): string[] {
  groceries.push(itemOne, itemTwo);
  return groceries;
}

// Step 7:
// Write a getFirstThreeGroceryItems function that returns a new array that contains the first three grocery items
function getFirstThreeGroceryItems(groceries: string[]): string[] {
  return groceries.slice(0, 3);
}

export {
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
};
