# Phase 3: Frontend Implementation Specification

**Status:** Draft
**Phase:** 3 of 4
**Tech:** React (Vite), Tailwind CSS, Axios, React Router

## 1. Project Initialization

### 1.1. Dependencies
We will initialize the `frontend` folder using Vite.
*   **Core**: `react`, `react-dom`
*   **Routing**: `react-router-dom`
*   **Styling**: `tailwindcss`, `postcss`, `autoprefixer`
*   **HTTP Client**: `axios`
*   **Icons**: `react-icons` (or `lucide-react`)
*   **Animations**: `framer-motion` (for the "WOW" factor)
*   **Utils**: `clsx`, `tailwind-merge` (for dynamic classes)

### 1.2. Directory Structure
```text
frontend/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/        # Buttons, Inputs, Loaders
│   │   ├── layout/        # Navbar, Footer, LayoutWrapper
│   │   └── home/          # Hero, Featured, etc.
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx      # Admin Login
│   │   └── Dashboard.jsx  # Admin Panel
│   ├── context/
│   │   └── LanguageContext.jsx # Manage 'en', 'ar', 'he'
│   ├── hooks/
│   │   └── useAuth.js
│   ├── services/
│   │   └── api.js         # Axios instance & endpoints
│   ├── styles/
│   │   └── index.css      # Tailwind imports
│   ├── App.jsx
│   └── main.jsx
├── .env                   # VITE_API_URL
├── tailwind.config.js
└── vite.config.js
```

---

## 2. Design System & Global Styles

### 2.1. Tailwind Configuration
*   **Colors**: Define a primary brand color (e.g., Deep Royal Blue or Emerald) and a dark mode palette.
*   **Fonts**: Use `Inter` or `Outfit` from Google Fonts.
*   **rtl/ltr**: crucial for Arabic/Hebrew support. Use `dir="rtl"` in HTML when appropriate and Tailwind's logical properties (e.g., `ms-4` instead of `ml-4`) where possible.

### 2.2. Animations
*   Use `framer-motion` for page transitions and scroll reveals.
*   Hover effects on project cards.

---

## 3. Core Features Implementation

### 3.1. Navigation & Routing
*   `/` - Home (Hero, Services, Featured Work)
*   `/portfolio` - All Projects (Filterable)
*   `/contact` - Contact Form
*   `/admin` - **Hidden Route**. Entry point. Shows Login form if not logged in, otherwise shows Dashboard.


### 3.2. Multilingual Support
*   `LanguageContext` will store current language.
*   Update `document.dir` and `document.lang` on change.
*   Text content stored in a translation object or strictly from API for dynamic content.

### 3.3. API Integration (`services/api.js`)
*   `api.get('/projects')`
*   `api.post('/auth/login')`
*   `api.post('/messages')`
*   Interceptor to attach JWT token for admin requests.

---

## 4. Next Steps (Execution)
1.  Initialize Vite app: `npm create vite@latest frontend -- --template react`
2.  Install Tailwind & Config.
3.  Setup Router & Context.
4.  Build Layout (Navbar/Footer).
5.  Develop Home Page (Hero).
