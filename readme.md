# API Documentation

## Overview

API yang telah dibuat bertujuan untuk menyediakan fungsi CRUD database Shopping Cart pada shopping cart di webserver. API ini memungkinkan pengguna untuk mengelola daftar belanja dengan mudah melalui panggilan HTTP yang disediakan.

## Base URL

https://shopping-cart-web-server.vercel.app

## Endpoints

### **GET** /api/products

#### Description

Mendapatkkan data seluruh produk

#### Response

```json
[
  {
    "code": "123",
    "name": "Black Wallet",
    "price": 60,
    "description": "Lorem ipsum dolor sit amet, consectetur...",
    "imageUrl": "/img/photo-1.jpg",
    "averageRating": 5,
    "id": "6640954bba84345685c1fe4f"
  },
  {
    "code": "234",
    "name": "iPhone Black",
    "price": 120,
    "description": "Lorem ipsum dolor sit amet, consectetur...",
    "imageUrl": "/img/photo-2.jpg",
    "averageRating": 5,
    "id": "6640954bba84345685c1fe50"
  }
  ...
]
```

### **GET** /api/products/:code

#### Description

Mendapatkan 1 data produk berdasarkan kode produk

#### Response

```json
{
  "code": "234",
  "name": "iPhone Black",
  "price": 120,
  "description": "Lorem ipsum dolor sit amet, consectetur ...",
  "imageUrl": "/img/photo-2.jpg",
  "averageRating": 5,
  "id": "6640954bba84345685c1fe50"
}
```

### **GET** /api/orders/users/:id

#### Description

mendapatkan data orders atau keranjang belanja dari database, :id dapat diberikan nilai default 1 karena webserver ini tidak memiliki autentikasi

#### Request Parameters

- id = 1

#### Response

```json
[
  {
    "_id": "664095c6ba84345685c1fe5b",
    "user_id": 1,
    "cart_items": ["undefined", "123"],
    "products": [
      {
        "_id": "6640954bba84345685c1fe4f",
        "code": "123",
        "name": "Black Wallet",
        "price": "60.00",
        "description": "Lorem ipsum dolor sit amet, consectetur ...",
        "imageUrl": "/img/photo-1.jpg",
        "averageRating": "5.0"
      }
    ]
  }
]
```

### **POST** /api/orders/users/:id/add

#### Description

Menyimpan data kekeranjang/cart kedalam table orders

#### Request Parameters

- id : 1

### Request Body

- **code** as string

#### Response

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### **DELETE** /api/orders/users/:id/remove/:code

#### Description

menghapus data produk dari cart/keranjang pengguna dari tabel orders

#### Request Parameters

- id : 1
- **code** as string

#### Response

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```
