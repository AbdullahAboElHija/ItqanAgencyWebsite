# Backend Architecture - Itqan Agency

The backend of the Itqan Agency website is built using **Node.js** and **Express.js**, following a robust and scalable MVC (Model-View-Controller) pattern. It serves as the RESTful API for the frontend application.

## 🚀 Technology Stack

- **Server Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) (ODM)
- **Encryption:** [Bcryptjs](https://www.npmjs.com/package/bcryptjs) for secure password hashing.
- **Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/) for stateless user sessions.
- **Security:** [Helmet](https://helmetjs.github.io/) for setting various HTTP headers.
- **File Handling:** [Multer](https://github.com/expressjs/multer) for managing image/file uploads.
- **Logging:** [Morgan](https://github.com/expressjs/morgan) for HTTP request logging.

## 📂 Directory Structure

```text
backend/
├── src/
│   ├── config/       # Database connection setttings
│   ├── controllers/  # Business logic for API endpoints
│   ├── middleware/   # Authentication and error handling logic
│   ├── models/       # Mongoose schemas (e.g., User, Project)
│   ├── routes/       # API route definitions
│   └── app.js        # Express app configuration
├── server.js         # Entry point (Starts the server)
└── seeder.js         # Initial data population script
```

## 🛠 Key Features

1.  **RESTful API Development:** Clean separation of concerns between routes and logic.
2.  **Authentication Flow:** Secure signup/login with JWT stored in HTTP-only cookies or local headers.
3.  **Error Management:** Centralized error handling middleware using `express-async-handler`.
4.  **Database Seeding:** A custom `seeder.js` script to populate the database with initial agency data and user profiles.
5.  **Environment Configuration:** Highly configurable using `.env` files.

---

*This document serves as the primary technical reference for the Backend infrastructure.*
