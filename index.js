
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = []; // Array to store ShoppingCartItem instances
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get the total number of items in the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Method to display all items in the cart
    displayCartItems() {
      if (this.items.length === 0) {
        console.log('The cart is empty.');
      } else {
        this.items.forEach(item => {
          console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.calculateTotalPrice().toFixed(2)}`);
        });
      }
    }
  
    // Method to calculate the total price of all items in the cart
    calculateCartTotal() {
      return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
  }

// Create some products
const product1 = new Product(1, 'Laptop', 1200);
const product2 = new Product(2, 'Phone', 800);
const product3 = new Product(3, 'Headphones', 150);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display cart items
console.log('Cart items:');
cart.displayCartItems();

// Display total number of items in the cart
console.log(`Total number of items in the cart: ${cart.getTotalItems()}`);

// Display the total price of all items in the cart
console.log(`Total price of all items in the cart: $${cart.calculateCartTotal().toFixed(2)}`);

// Remove an item from the cart
cart.removeItem(2); // Remove the product with ID 2 (Phone)

// Display cart items after removal
console.log('\nCart items after removal:');
cart.displayCartItems();

// Display total number of items in the cart after removal
console.log(`Total number of items in the cart after removal: ${cart.getTotalItems()}`);

// Display the total price of all items in the cart after removal
console.log(`Total price of all items in the cart after removal: $${cart.calculateCartTotal().toFixed(2)}`);
