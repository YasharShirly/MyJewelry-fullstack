# MyJewelry - Fullstack E-Commerce Application

A full-stack web application for managing and ordering products, built with React, Node.js, Express, and MySQL.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), JavaScript (ES6+), HTML5, CSS3
- **Backend:** Node.js, Express.js, RESTful API architecture
- **Database:** MySQL
- **Tools & Version Control:** Git, GitHub

---

## ✨ Key Features & Architecture

- **Full-Stack Integration:** Complete end-to-end functionality connecting a dynamic client UI to a custom REST API and relational database.
- **Backend Architecture:** Modular project structure with dedicated controllers, routes, database modules, and input validation.
- **Database Schema:** Structured MySQL relational database handling users, product categories, inventory, orders, and order items.
- **Order Processing & Inventory:** End-to-end flow for browsing products, managing orders, and inventory validation.

---

## 📁 Repository Structure

```text
├── Jewelry - node/           # Backend (Node.js & Express)
│   ├── controller/           # Request handlers and business logic
│   ├── db/                   # Database connection configuration
│   ├── router/               # API endpoints setup
│   ├── utils/                # Helper utilities and validators
│   ├── app.js                # Server entry point
│   └── ValidationHelper.js   # Input validation rules
│
├── Jewelry - react/          # Frontend (React + Vite)
│   ├── src/                  # React components, pages, and assets
│   └── vite.config.js        # Vite bundler configuration
│
└── mysql/                    # Database SQL scripts & schemas
    ├── jewelry_category.sql
    ├── jewelry_orders.sql
    ├── jewelry_prodfororder.sql
    ├── jewelry_products.sql
    └── jewelry_users.sql
