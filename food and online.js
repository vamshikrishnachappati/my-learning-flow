// FOOD ORDERNING
let foodData = {
  customer: {
    customerId: 101,
    name: "Sai",
    address: "Hyderabad",
    phone: "9876543210",
  },
  menu: [
    {
      foodId: 1,
      foodName: "Chicken Biryani",
      price: 250,
      category: "Main Course",
      available: true,
    },
    {
      foodId: 2,
      foodName: "Veg Biryani",
      price: 180,
      category: "Main Course",
      available: true,
    },
    {
      foodId: 3,
      foodName: "Pizza",
      price: 300,
      category: "Fast Food",
      available: true,
    },
    {
      foodId: 4,
      foodName: "Burger",
      price: 150,
      category: "Fast Food",
      available: true,
    },
    {
      foodId: 5,
      foodName: "Ice Cream",
      price: 100,
      category: "Dessert",
      available: true,
    },
  ],
  cart: [],
  coupon: {
    code: "FOOD10",
    discount: 10,
  },
  order: {
    orderId: 501,
    status: "Not Placed",
    paymentStatus: "Pending",
    totalAmount: 0,
    deliveryStatus: "Not Started",
  },
};
// 1.DISPLAY MENU
let displayMenu = () => {
  console.log("----- FOOD MENU -----");
  foodData.menu.forEach((food) => {
    if (food.available) {
      console.log("Food ID: " + food.foodId);
      console.log("Food Name: " + food.foodName);
      console.log("Price: ₹" + food.price);
      console.log("Category: " + food.category);
      console.log("--------------------");
    }
  });
};
displayMenu(); // Function Call
// 2.SELECT FOOD
let selectFood = (foodId) => {
  // ← Parameter
  let selectedFood = foodData.menu.find((food) => {
    return food.foodId === foodId;
  });
  if (selectedFood) {
    console.log("Food Selected Successfully");
    console.log("Food Name: " + selectedFood.foodName);
    console.log("Price: ₹" + selectedFood.price);
  } else {
    console.log("Food Item Not Found");
  }
};
selectFood(1); // ← Argument
// 3.ADD TO CART
let add = (foodId, quantity) => {
  // ← Parameters
  let add = (foodId, quantity) => {
    let selectedFood = foodData.menu.find((food) => {
      return food.foodId === foodId;
    });

    if (selectedFood && selectedFood.available && quantity > 0) {
      let cartItem = foodData.cart.find((item) => {
        return item.foodId === foodId;
      });

      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        foodData.cart.push({
          foodId: selectedFood.foodId,
          foodName: selectedFood.foodName,
          price: selectedFood.price,
          quantity: quantity,
        });
      }
      console.log("Food Added to Cart Successfully");
    } else {
      console.log("Invalid Food ID, Quantity or Unavailable Item");
    }
  };

  add(1, 2); // ← Arguments: Food ID = 1, Quantity = 2

  // 4.REMOVE ITEM
  let removeItem = (foodId) => {
    // ← Parameter
    let index = foodData.cart.findIndex((item) => {
      return item.foodId === foodId;
    });
    if (index !== -1) {
      foodData.cart.splice(index, 1);
      console.log("Food Item Removed Successfully");
    } else {
      console.log("Food Item Not Found in Cart");
    }
  };
  removeItem(1); // ← Argument: Food ID = 1
  // 5.CALCULATE BILL
  let calculateBill = () => {
    let totalAmount = 0;
    foodData.cart.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    foodData.order.totalAmount = totalAmount;
    console.log("----- BILL DETAILS -----");
    console.log("Total Amount: ₹" + totalAmount);
  };
  calculateBill(); // ← Function Call
  // 6.APPLY COUPN
  let applyCoupon = (code) => {
    // ← Parameter
    if (code === foodData.coupon.code) {
      let discountAmount =
        (foodData.order.totalAmount * foodData.coupon.discount) / 100;
      foodData.order.totalAmount -= discountAmount;
      console.log("Coupon Applied Successfully");
      console.log("Discount: ₹" + discountAmount);
      console.log("Final Bill: ₹" + foodData.order.totalAmount);
    } else {
      console.log("Invalid Coupon Code");
    }
  };

  applyCoupon("FOOD10"); // ← Argument
  // 7.MAKE PAYMENT
  let makePayment = (paymentMode) => {
    // ← Parameter
    if (foodData.order.totalAmount <= 0) {
      console.log("Invalid Payment Amount");
      return;

      foodData.order.paymentStatus = "Paid";
      foodData.order.status = "Confirmed";
      foodData.order.deliveryStatus = "Preparing";
      console.log("Payment Successful");
      console.log("Payment Mode: " + paymentMode);
      console.log("Amount Paid: ₹" + foodData.order.totalAmount);
      console.log("Order Confirmed");
    }

    makePayment("UPI"); // ← Argument
    // 8.TRACK ORDER
    let trackOrder = () => console.log("----- ORDER TRACKING -----");
    console.log("Order ID: " + foodData.order.orderId);
    console.log("Order Status: " + foodData.order.status);
    console.log("Payment Status: " + foodData.order.paymentStatus);
    console.log("Delivery Status: " + foodData.order.deliveryStatus);
  };
  trackOrder(); // ← Function Call
  // 9.CANCLE ORDER
  let cancelOrder = () => {
    if (foodData.order.status === "Confirmed") {
      foodData.order.status = "Cancelled";
      foodData.order.deliveryStatus = "Cancelled";
      foodData.order.paymentStatus = "Refund Pending";
      console.log("Order Cancelled Successfully");
    } else {
      console.log("Order Cannot Be Cancelled");
    }
  };

  cancelOrder(); // ← Function Call
};

// ONLINE SHOPPING
let shoppingData = {
  user: {
    userId: 101,
    name: "Sai",
    email: "sai@gmail.com",
    password: "sai123",
    address: "Hyderabad",
    loggedIn: false,
  },

  products: [
    {
      productId: 1,
      productName: "Laptop",
      price: 50000,
      category: "Electronics",
      stock: 10,
    },
    {
      productId: 2,
      productName: "Mobile",
      price: 20000,
      category: "Electronics",
      stock: 15,
    },
    {
      productId: 3,
      productName: "Headphones",
      price: 2000,
      category: "Accessories",
      stock: 20,
    },
    {
      productId: 4,
      productName: "Watch",
      price: 3000,
      category: "Accessories",
      stock: 12,
    },
    {
      productId: 5,
      productName: "Shoes",
      price: 2500,
      category: "Fashion",
      stock: 8,
    },
  ],

  cart: [],

  discount: {
    code: "SAVE10",
    percentage: 10,
  },

  gst: 18,

  order: {
    orderId: 501,
    totalAmount: 0,
    discountAmount: 0,
    gstAmount: 0,
    finalAmount: 0,
    paymentStatus: "Pending",
    deliveryStatus: "Not Started",
  },
};
// REGISTRATION (CREATING NEW ACCOUNT)
// 1. User Registration using Arrow Function

let registerUser = (userId, name, email, password, address) => {
  // ← Parameters

  shoppingData.user = {
    userId: userId,
    name: name,
    email: email,
    password: password,
    address: address,
    loggedIn: false,
  };

  console.log("Registration Successful");
  console.log("Welcome: " + shoppingData.user.name);
  console.log("Email: " + shoppingData.user.email);
};

registerUser(102, "Ravi", "ravi@gmail.com", "ravi123", "Hyderabad"); // ← Arguments
// USER LOGIN

let loginUser = (email, password) => {
  // ← Parameters

  if (
    shoppingData.user.email === email &&
    shoppingData.user.password === password
  ) {
    shoppingData.user.loggedIn = true; // ← Updates login status

    console.log("Login Successful");
    console.log("Welcome: " + shoppingData.user.name);
  } else {
    console.log("Invalid Email or Password");
  }
};

loginUser("ravi@gmail.com", "ravi123"); // ← Arguments
// DISPLAY PRODUCTS

let displayProducts = () => {
  console.log("----- AVAILABLE PRODUCTS -----");

  shoppingData.products.forEach((product) => {
    if (product.stock > 0) {
      console.log("Product ID: " + product.productId);
      console.log("Product Name: " + product.productName);
      console.log("Price: ₹" + product.price);
      console.log("Category: " + product.category);
      console.log("Available Stock: " + product.stock);
      console.log("-----------------------------");
    }
  });
};

displayProducts(); // ← Function Call
// SEARCH PRODUCTS

let searchProduct = (productName) => {
  // ← Parameter

  let result = shoppingData.products.find((product) => {
    return product.productName.toLowerCase() === productName.toLowerCase();
  });

  if (result && result.stock > 0) {
    console.log("Product Found Successfully");
    console.log("Product ID: " + result.productId);
    console.log("Product Name: " + result.productName);
    console.log("Price: ₹" + result.price);
    console.log("Category: " + result.category);
  } else {
    console.log("Product Not Found or Out of Stock");
  }
};

searchProduct("Laptop"); // ← Argument
// ADD TO CART

let addToCart = (productId, quantity) => {
  // ← Parameters

  let selectedProduct = shoppingData.products.find((product) => {
    return product.productId === productId;
  });

  if (selectedProduct && quantity > 0 && selectedProduct.stock >= quantity) {
    let cartItem = shoppingData.cart.find((item) => {
      return item.productId === productId;
    });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      shoppingData.cart.push({
        productId: selectedProduct.productId,
        productName: selectedProduct.productName,
        price: selectedProduct.price,
        quantity: quantity,
      });
    }

    selectedProduct.stock -= quantity; // ← Updates available stock

    console.log("Product Added to Cart Successfully");
    console.log("Product: " + selectedProduct.productName);
    console.log("Quantity: " + quantity);
  } else {
    console.log("Invalid Product ID, Quantity or Insufficient Stock");
  }
};

addToCart(1, 2); // ← Arguments: Product ID = 1, Quantity = 2
// CALCULATE PRICE

let calculatePrice = () => {
  let totalAmount = 0; // ← Initial amount

  shoppingData.cart.forEach((item) => {
    totalAmount += item.price * item.quantity; // ← Price × Quantity
  });

  shoppingData.order.totalAmount = totalAmount; // ← Stores total amount

  console.log("----- BILL DETAILS -----");
  console.log("Total Amount: ₹" + totalAmount);
};

calculatePrice(); // ← Function Call
// APPLYING DISCOUNT

let applyDiscount = (code) => {
  // ← Parameter

  if (code === shoppingData.discount.code) {
    let discountAmount =
      (shoppingData.order.totalAmount * shoppingData.discount.percentage) / 100;

    shoppingData.order.discountAmount = discountAmount;

    shoppingData.order.totalAmount -= discountAmount;

    console.log("Discount Applied Successfully");
    console.log("Discount Amount: ₹" + discountAmount);
    console.log("Final Price: ₹" + shoppingData.order.totalAmount);
  } else {
    console.log("Invalid Coupon Code");
  }
};

applyDiscount("SAVE10"); // ← Argument
// CALCULATE DISCOUNT

let calculateGST = () => {
  let gstAmount = (shoppingData.order.totalAmount * shoppingData.gst) / 100; // ← Calculates GST

  shoppingData.order.gstAmount = gstAmount;

  shoppingData.order.finalAmount = shoppingData.order.totalAmount + gstAmount; // ← Adds GST

  console.log("----- GST DETAILS -----");

  console.log("Product Amount: ₹" + shoppingData.order.totalAmount);

  console.log("GST Percentage: " + shoppingData.gst + "%");

  console.log("GST Amount: ₹" + gstAmount);

  console.log("Final Amount: ₹" + shoppingData.order.finalAmount);
};

calculateGST(); // ← Function Call
// PAYMENT

let payment = (paymentMode) => {
  // ← Parameter

  if (shoppingData.order.finalAmount <= 0) {
    console.log("Invalid Payment Amount");
    return;
  }

  shoppingData.order.paymentStatus = "Paid";

  shoppingData.order.deliveryStatus = "Order Confirmed";

  console.log("----- PAYMENT DETAILS -----");

  console.log("Payment Successful");
  console.log("Payment Mode: " + paymentMode);
  console.log("Amount Paid: ₹" + shoppingData.order.finalAmount);
  console.log("Order Confirmed");
};

payment("UPI"); // ← Argument
// ORDER TRACKING

let trackOrder = () => {
  console.log("----- ORDER TRACKING -----");

  console.log("Order ID: " + shoppingData.order.orderId);

  console.log("Payment Status: " + shoppingData.order.paymentStatus);

  console.log("Delivery Status: " + shoppingData.order.deliveryStatus);

  console.log("Final Amount: ₹" + shoppingData.order.finalAmount);
};

trackOrder(); // ← Function Call
