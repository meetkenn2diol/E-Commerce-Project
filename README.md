# 🛒 React E-Commerce Lite

A lightweight, responsive e-commerce application built with **React**. This project allows users to browse a product catalog, manage a shopping cart, and simulate a checkout process using dynamic data.

## 🚀 Features

* **Product Listing:** Dynamically renders products sourced from a local `JSON` file.
* **Selection & Details:** Click on products to view more details or select them for purchase.
* **Shopping Cart:** Add products to a cart with real-time state updates.
* **Checkout:** A simulated checkout flow to finalize selections.
* **Reset Functionality:** Quickly clear the cart or reset the product list state with a single click.
* **Responsive Design:** Styled with CSS to work on both desktop and mobile devices.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Data Handling:** JSON, Fetch API / Local Imports
* **Styling:** CSS3 (Custom modules or global stylesheets)
* **Assets:** Optimized local images

---

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/your-repo-name.git

```


2. **Navigate into the directory:**
```bash
cd your-repo-name

```


3. **Install dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
npm start

```



---

## 📂 Project Structure

```text
src/
├── assets/             # Product images and icons
├── components/         # Cart, ProductCard, and Navbar components
├── data/               # products.json (your database)
├── App.js              # Main logic and state management
├── index.css           # Global styles and layout
└── ...

```

---

## 📝 Data Format (JSON)

The app consumes data in the following format from your `.json` files:

```json
[
  {
    "id": 1,
    "name": "Classic T-Shirt",
    "price": 25.00,
    "image": "./assets/tshirt.jpg",
    "description": "100% Cotton, comfortable fit."
  }
]

```

---

## 💡 Usage

* **Adding to Cart:** Click the "Add to Cart" button on any product card.
* **Checking Out:** Navigate to the cart section and click "Checkout" to see your total.
* **Resetting:** Use the "Reset" button in the header or cart to clear all current selections.

---
