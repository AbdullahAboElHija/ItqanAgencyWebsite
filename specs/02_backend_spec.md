# Phase 2: Backend Implementation Specification

**Status:** Draft
**Phase:** 2 of 4
**Tech:** Node.js, Express, MongoDB, Mongoose

## 1. Project Initialization

### 1.1. Dependencies
We will initialize the `backend` folder with the following key packages:
*   `express`: Web framework.
*   `mongoose`: ODM for MongoDB.
*   `dotenv`: Environment variable management.
*   `cors`: Cross-Origin Resource Sharing (to allow React frontend).
*   `helmet`: Basic security headers.
*   `morgan`: HTTP request logger.
*   *(Dev)* `nodemon`: Auto-restart server during development.

### 1.2. Directory Structure
```text
backend/
├── src/
│   ├── config/
│   │   └── db.js          # Database connection
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── messageController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── messageRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js  # Protect admin routes
│   │   └── errorMiddleware.js # Global error handling
│   └── app.js             # Express app setup
├── server.js              # Entry point
├── .env                   # Secrets (MONGO_URI, JWT_SECRET)
└── package.json
```

---

## 2. Database Models (Mongoose)

### 2.1. Project Model (`models/Project.js`)
Crucial for the "Multilingual" aspect. `title` and `description` are Objects, not Strings.
```javascript
const projectSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
    he: { type: String, required: true }
  },
  description: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
    he: { type: String, required: true }
  },
  category: { type: String, required: true }, // e.g., "Web", "App"
  images: [{ type: String }], // Array of image URLs
  liveUrl: { type: String },
  githubUrl: { type: String },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });
```

### 2.2. Message Model (`models/Message.js`)
```javascript
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  service: { type: String }, // "Web Development", etc.
  content: { type: String, required: true },
  isRead: { type: Boolean, default: false }
}, { timestamps: true });
```

---

## 3. API Routes & Logic

### 3.1. Base Route
All routes prefixed with `/api/v1`.

### 3.2. Project Routes (`routes/projectRoutes.js`)
*   `GET /`: List all projects. Support query `?featured=true`.
*   `GET /:id`: Get one project.
*   `POST /`: **[Protected]** Create new project.
*   `PUT /:id`: **[Protected]** Update project.
*   `DELETE /:id`: **[Protected]** Delete project.

### 3.3. Message Routes (`routes/messageRoutes.js`)
*   `POST /`: Public. Submit contact form.
*   `GET /`: **[Protected]** Admin sees all messages.
*   `PATCH /:id/read`: **[Protected]** Mark message as read.

### 3.4. Security Strategy
*   **JWT (JSON Web Token)**: Used for Admin authentication.
*   **Middleware**: `protect` middleware will check for valid `Bearer token` in headers.

---

## 4. Next Steps (Execution)
1.  Run `npm init` in `/backend`.
2.  Install dependencies.
3.  Create the folder structure.
4.  Write `server.js` and `config/db.js` to test DB connection.
