# Code Guide & Understanding the System

Welcome to the itqan Agency codebase! This guide will help you understand how the code is structured and how to navigate it as a developer.

## 🧠 Logic Flow: From User Click to Database

To understand how everything works together, follow this typical request flow:

1.  **Frontend (Action):** A user clicks a button or visits a page (e.g., `Home.jsx`).
2.  **Frontend (Service):** The component calls a function in `frontend/src/services/` (e.g., `api.js`).
3.  **Network:** Axios sends an HTTP request to the backend server (e.g., `POST /api/projects`).
4.  **Backend (Routing):** `backend/src/app.js` directs the request to a specific file in `backend/src/routes/`.
5.  **Backend (Controller):** Middleware (like `protect`) runs first, then the controller function in `backend/src/controllers/` executes the business logic.
6.  **Database:** The controller uses `backend/src/models/` (Mongoose) to talk to MongoDB.
7.  **Response:** The result is sent back as JSON, and the frontend updates the UI.

## 🛠 Styling Conventions

We use **Tailwind CSS**. Instead of writing large CSS files, styles are applied directly to HTML elements:
- `text-primary`: Custom Agency blue/dark color defined in `tailwind.config.js`.
- `text-secondary`: Custom Agency accent color.
- `backdrop-blur-md`: Used for the premium "glass" effect on the Navbar.

## 🌍 How Multi-Language Works

The file `frontend/src/context/LanguageContext.jsx` manages the current language.
- To add a new translation, update the `translations` object or the `links` objects in `Navbar.jsx`.
- Components use the `t()` helper function to get the text for the current language.

## 🎬 How Animations Work

We use **Framer Motion**. Look for `motion.div` instead of standard `div`.
- Entrance animations are often triggered by `whileInView` so they play as you scroll.
- Staggered children (where items appear one by one) are controlled via the `variants` property.

## 💡 Best Practices to Follow

- **DRY (Don't Repeat Yourself):** If you use a piece of UI more than twice, make it a Component in `frontend/src/components/`.
- **Async Handling:** Always wrap API calls in `try/catch` on the frontend and use `express-async-handler` on the backend.
- **Naming:** Components should be `PascalCase` (e.g., `HeroSection.jsx`), while functions and variables are `camelCase`.

---

*Use this guide as a map whenever you feel lost in the code!*
