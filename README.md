# 🛒 FakeStore React App

A React-based e-commerce application implementing full CRUD functionality using FakeStoreAPI.

---

## 🚀 Project Overview

This project is a single-page e-commerce application built with React.  
It allows users to view products, see detailed information, and perform CRUD operations (Create, Read, Update, Delete).

---

## ✨ Features

### 🔹 Product Listing
- Fetch all products from FakeStoreAPI
- Display products using reusable card components

### 🔹 Product Details
- Dynamic routing using `useParams`
- Displays detailed product information

### 🔹 Add Product
- Controlled form inputs
- Sends POST request to API

### 🔹 Edit Product
- Pre-filled form with existing data
- Updates product using PUT request

### 🔹 Delete Product
- Confirmation prompt before deletion
- Sends DELETE request
- Redirects back to product list

---

## 🛠 Tech Stack

- **React**
- **React Router**
- **Axios**
- **React Bootstrap**
- **FakeStoreAPI**

---

## 📂 Project Structure
src
├─ components
│ ├─ AppNavbar.jsx
│ ├─ ProductCard.jsx
│
├─ pages
│ ├─ Home.jsx
│ ├─ Products.jsx
│ ├─ ProductDetails.jsx
│ ├─ AddProduct.jsx
│ ├─ EditProduct.jsx
│
├─ services
│ └─ api.js


---

## ⚙️ Installation & Run

```bash
npm install
npm run dev
