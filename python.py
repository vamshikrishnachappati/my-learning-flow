
# SHOPPING DATA

shopping_data = {
    "users": [],
    "current_user": None,

    "products": [
        {"id": 1, "name": "Laptop", "price": 50000, "stock": 5},
        {"id": 2, "name": "Mobile", "price": 20000, "stock": 10},
        {"id": 3, "name": "Watch", "price": 3000, "stock": 8},
        {"id": 4, "name": "Headphones", "price": 2000, "stock": 6}
    ],

    "cart": [],
    "total_amount": 0,
    "discount": 10,
    "gst": 18,
    "final_amount": 0,
    "payment_status": "Pending",
    "delivery_status": "Not Started"
}


# 1. USER REGISTRATION
def register_user(name, email, password):

    for user in shopping_data["users"]:
        if user["email"] == email:
            print("User Already Exists")
            return
    new_user = {
        "name": name,
        "email": email,
        "password": password
    }
    shopping_data["users"].append(new_user)

    print("Registration Successful")

register_user("Ravi", "ravi@gmail.com", "12345")

# 2. USER LOGIN
def login_user(email, password):
    for user in shopping_data["users"]:
        if user["email"] == email and user["password"] == password:
            shopping_data["current_user"] = user
            print("Login Successful. Welcome", user["name"])
            return
    print("Invalid Email or Password")
login_user("ravi@gmail.com", "12345")
# 3. DISPLAY PRODUCTS
def display_products():
    print("\nAvailable Products")
    for product in shopping_data["products"]:
        if product["stock"] > 0:
            print(
                product["id"],
                product["name"],
                "₹", product["price"],
                "Stock:", product["stock"]
            )
display_products()
# 4. SEARCH PRODUCT
def search_product(product_name):
    for product in shopping_data["products"]:
        if product["name"].lower() == product_name.lower():
            if product["stock"] > 0:
                print("Product Found:", product["name"])
                return
    print("Product Not Found")
search_product("Laptop")
# 5. ADD TO CART
def add_to_cart(product_id, quantity):
    if shopping_data["current_user"] is None:
        print("Please Login First")
        return
    for product in shopping_data["products"]:
        if product["id"] == product_id:
            if quantity <= 0 or product["stock"] < quantity:
                print("Insufficient Stock")
                return
            found = False
            for item in shopping_data["cart"]:
                if item["id"] == product_id:
                    item["quantity"] += quantity
                    found = True
                    break
            if not found:
                cart_item = {
                    "id": product["id"],
                    "name": product["name"],
                    "price": product["price"],
                    "quantity": quantity
                }
                shopping_data["cart"].append(cart_item)
            product["stock"] -= quantity
            print("Product Added to Cart")
            return
    print("Product Not Found")
add_to_cart(1, 2)
add_to_cart(2, 1)
# 6. CALCULATE PRICE
def calculate_price():

    total = 0

    for item in shopping_data["cart"]:

        total = total + item["price"] * item["quantity"]

    shopping_data["total_amount"] = total

    print("Total Amount: ₹", total)


calculate_price()

# 7. APPLY DISCOUNT
def apply_discount(code):
    if code == "SAVE10":
        discount_amount = (
            shopping_data["total_amount"] *
            shopping_data["discount"] / 100
        )
        shopping_data["total_amount"] -= discount_amount
        print("Discount Applied: ₹", discount_amount)
        print("After Discount: ₹", shopping_data["total_amount"])
    else:
        print("Invalid Coupon Code")
apply_discount("SAVE10")
# 8. CALCULATE GST
def calculate_gst():
    gst_amount = (
        shopping_data["total_amount"] *
        shopping_data["gst"] / 100
    )
    shopping_data["final_amount"] = (
        shopping_data["total_amount"] + gst_amount
    )
    print("GST Amount: ₹", gst_amount)
    print("Final Amount: ₹", shopping_data["final_amount"])


calculate_gst()


# 9. PAYMENT

def make_payment(payment_mode):

    if shopping_data["current_user"] is None:
        print("Please Login First")
        return

    if len(shopping_data["cart"]) == 0:
        print("Your Cart is Empty")
        return

    if shopping_data["payment_status"] == "Paid":
        print("Payment Already Completed")
        return

    shopping_data["payment_status"] = "Paid"
    shopping_data["delivery_status"] = "Order Confirmed"

    print("Payment Successful")
    print("Payment Mode:", payment_mode)
    print("Paid Amount: ₹", shopping_data["final_amount"])


make_payment("UPI")

# 10. ORDER TRACKING

def track_order():
    print("\nOrder Tracking Details")
    print("Customer:", shopping_data["current_user"]["name"])
    print("Payment:", shopping_data["payment_status"])
    print("Delivery:", shopping_data["delivery_status"])
    print("Final Amount: ₹", shopping_data["final_amount"])
track_order()
