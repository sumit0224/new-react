# 🚀 Blog Platform Backend (Node.js/Express)

A robust, secure, and production-ready backend for a blog/article publishing platform. Built with Node.js, Express, and MongoDB.

## 📋 Table of Contents
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
  - [Authentication](#authentication)
  - [Posts](#posts)
- [Error Handling](#-error-handling-format)
- [Security Features](#-security-features-implemented)

---

## 🛠 Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js (v5.0+)
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: 
  - `helmet` (Security Headers)
  - `express-rate-limit` (DDoS prevention)
  - `bcrypt` (Password hashing)
  - `cors` (Cross-Origin Resource Sharing)

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables)).

4. **Start the server**:
   ```bash
   # Development mode (with nodemon)
   npm start
   ```

---

## 🔐 Environment Variables

Create a `.env` file in the `server` directory and add the following:

```env
PORT=5000
MONGO_URI=mongodb+srv://your_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
```

---

## 🌐 API Base URL
```
http://localhost:5000/api
```

---

## 📖 API Documentation

### Authentication

#### 1. User Signup
- **Endpoint**: `/user/signup`
- **Method**: `POST`
- **Description**: Register a new user account.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "strongpassword123"
  }
  ```
- **Response (201 Success)**:
  ```json
  {
    "message": "Signup successful",
    "token": "eyJhbGci...",
    "user": { "id": "...", "name": "John Doe", "email": "john@example.com" }
  }
  ```
- **Auth Required**: No

#### 2. User Login
- **Endpoint**: `/user/login`
- **Method**: `POST`
- **Description**: Authenticate user and receive a JWT.
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "strongpassword123"
  }
  ```
- **Response (200 Success)**:
  ```json
  {
    "message": "Login successful",
    "token": "eyJhbGci...",
    "user": { "id": "...", "name": "John Doe", "email": "john@example.com" }
  }
  ```
- **Auth Required**: No

---

### Posts

#### 1. Create Post
- **Endpoint**: `/post`
- **Method**: `POST`
- **Description**: Create a new blog post.
- **Auth Required**: **Yes** (Bearer Token)
- **Request Body**:
  ```json
  {
    "title": "My First Blog",
    "content": ["Part 1 of content", "Part 2 of content"],
    "category": "Tech",
    "tags": ["nodejs", "express"],
    "isPublished": true
  }
  ```

#### 2. Get All Posts (Paginated)
- **Endpoint**: `/post`
- **Method**: `GET`
- **Description**: Retrieve a paginated list of published posts.
- **Query Params**: `?page=1`
- **Auth Required**: No

#### 3. Get Single Post
- **Endpoint**: `/post/:id`
- **Method**: `GET`
- **Description**: Fetch details of a single post by its ID. It also increments the view count.
- **Auth Required**: No

#### 4. Update Post
- **Endpoint**: `/post/:id`
- **Method**: `PUT`
- **Description**: Update an existing post (Ownership required).
- **Auth Required**: **Yes** (Bearer Token)
- **Request Body (Partial Update)**:
  ```json
  {
    "title": "Updated Title",
    "isPublished": false
  }
  ```

#### 5. Delete Post
- **Endpoint**: `/post/:id`
- **Method**: `DELETE`
- **Description**: Permanently remove a post (Ownership required).
- **Auth Required**: **Yes** (Bearer Token)

---

## 🚨 Error Handling Format

All error responses follow this consistent structure:

```json
{
  "success": false,
  "message": "Description of the error"
}
```

Common HTTP status codes used:
- `400`: Bad Request (Invalid input/ValidationError)
- `401`: Unauthorized (Missing or invalid token)
- `403`: Forbidden (Ownership check failed)
- `404`: Not Found (Route or resource doesn't exist)
- `500`: Internal Server Error

---

## 🛡 Security Features Implemented

1.  **JWT Authentication**: Stateless authentication using JSON Web Tokens.
2.  **Password Hashing**: Industry-standard `bcrypt` (12 salt rounds).
3.  **Strict Rate Limiting**: Prevents brute-force and DDoS attacks (20 requests per 15 minutes).
4.  **Security Headers**: Uses `helmet.js` to set various security-related HTTP headers.
5.  **CORS Restriction**: Prevents unauthorized domains from accessing the API.
6.  **Safe Field Updates**: Prevents "Over-posting" vulnerabilities by restricting which fields can be updated via the API.
7.  **Input Validation**: Enforces valid email formats and minimum password lengths.
8.  **Ownership Protection**: Ensures users can only modify their own content.
