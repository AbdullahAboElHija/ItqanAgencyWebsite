# Frontend Architecture - Itqan Agency

The frontend is a modern, high-performance SPA (Single Page Application) built with **React** and **Vite**. It is designed with a "High-End Tech" aesthetic, focusing on smooth user experience and interactive visuals.

## 🎨 Technology Stack

- **Core Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first responsive design.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for premium, physics-based transitions.
- **Routing:** [React Router Dom](https://reactrouter.com/) for client-side navigation.
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Feather, FontAwesome, etc.).
- **HTTP Client:** [Axios](https://axios-http.com/) for making API calls to the backend.

## 📂 Directory Structure

```text
frontend/
├── src/
│   ├── assets/       # Static assets (Images, SVGs, Logos)
│   ├── components/   # Reusable UI components (Shared, Layout, Admin)
│   ├── context/      # React Context (e.g., Language, Theme)
│   ├── pages/        # Full-page views (Home, Portfolio, Login)
│   ├── services/     # API abstraction layer
│   ├── index.css     # Global styles and Tailwind directives
│   └── App.jsx       # Main application routing and entry
└── tailwind.config.js # Custom Design System (colors, fonts, animations)
```

## ✨ Key Features

1.  **Multi-Language Support (I18n):** Support for Arabic (RTL), Hebrew (RTL), and English (LTR) using a custom `LanguageContext`.
2.  **Premium Aesthetics:** Use of "Glassmorphism", custom gradients, and smooth scroll reveals.
3.  **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
4.  **Admin Dashboard:** A dedicated interface for managing agency projects and leads.
5.  **Interactive Cards:** Staggered entrance animations and hover effects on all service grid items.

---

*This document serves as the primary technical reference for the Frontend web application.*
