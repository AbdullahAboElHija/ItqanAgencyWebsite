# Phase 1: System Design & Stack Configuration

**Status:** Draft
**Version:** 1.0
**Author:** Lead Solutions Architect (Antigravity)

## 1. Technology Stack Selection

Based on the requirements and scalability needs, we have selected the **MERN Stack** with specific modern tooling.

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | **React.js** (via Vite) | Fast development, huge ecosystem, excellent for interactive UIs. |
| **Styling** | **Tailwind CSS** | Utility-first, rapid UI building, easy RTL support for Arabic/Hebrew. |
| **Backend** | **Node.js + Express.js** | Non-blocking I/O, unified JavaScript language across stack, vast middleware ecosystem. |
| **Database** | **MongoDB** (NoSQL) | Flexible schema for portfolio items, JSON-native, scalable. |
| **ODM** | **Mongoose** | Schema validation and rigid data modeling for MongoDB. |
| **Deploy** | **Vercel** (FE) + **Render** (BE) | Best-in-class free/hobby tiers with easy CI/CD. |

---

## 2. High-Level Architecture

```mermaid
graph TD
    User((User/Visitor))
    Admin((Admin))
    
    subgraph Frontend [React Client (Vercel)]
        UI[Public UI]
        Dashboard[Admin Dashboard]
        API_Layer[Axios API Service]
    end
    
    subgraph Backend [Express Server (Render)]
        Router[API Router]
        Auth[Auth Middleware]
        Controllers[Controllers]
    end
    
    subgraph Database [MongoDB Atlas]
        DB[(Data Store)]
    end

    User -->|Views Portfolio/Contact| UI
    Admin -->|Manages Content| Dashboard
    UI -->|HTTP Requests| Router
    Dashboard -->|Secured Requests| Router
    Router --> Auth
    Auth --> Controllers
    Controllers -->|Read/Write| DB
```

---

## 3. Database Schema Design (MongoDB)

We will use 3 primary collections.

### 3.1. Users (Admins)
*Since this is an agency site, we likely only need admin users.*
*   `_id`: ObjectId
*   `username`: String (Unique)
*   `password`: String (Hashed - bcrypt)
*   `role`: String (Default: 'admin')
*   `createdAt`: Date

### 3.2. Projects (Portfolio)
*   `_id`: ObjectId
*   `title`: Map/Object (Multilingual: en, ar, he)
*   `description`: Map/Object (Multilingual: en, ar, he)
*   `category`: String (e.g., "Web Dev", "Marketing")
*   `images`: Array[String] (URLs)
*   `liveUrl`: String
*   `githubUrl`: String
*   `featured`: Boolean (For "Hero" or top display)
*   `createdAt`: Date

### 3.3. Messages (Contact Form)
*   `_id`: ObjectId
*   `name`: String
*   `email`: String
*   `phone`: String
*   `serviceType`: String (Dropdown selection)
*   `content`: String
*   `status`: String (enum: 'new', 'read', 'contacted')
*   `createdAt`: Date

---

## 4. API Endpoints Architecture (RESTful)

Base URL: `/api/v1`

### 4.1. Authentication
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/auth/login` | Admin login, returns JWT | Public |
| POST | `/auth/register` | Create first admin (protected or seeded) | System |

### 4.2. Projects
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/projects` | Get all projects (with filtering) | Public |
| GET | `/projects/:id` | Get single project details | Public |
| POST | `/projects` | Create a new project | **Admin** |
| PUT | `/projects/:id` | Update project | **Admin** |
| DELETE | `/projects/:id` | Delete project | **Admin** |

### 4.3. Messages
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/messages` | Submit contact form | Public |
| GET | `/messages` | View all inquiries | **Admin** |
| PATCH | `/messages/:id` | Mark as read/contacted | **Admin** |

---

## 5. Folder Structure Plan

We will keep the Frontend and Backend separate for clarity but can house them in a single repository (root).

```text
/
├── backend/          # Express API
│   ├── src/
│   │   ├── config/   # DB connection
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   ├── .env
│   └── package.json
│
├── frontend/         # React App
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/  # Language Context
│   │   └── services/ # API calls
│   └── package.json
│
└── specs/            # Architecture Docs
    └── 01_stack_spec.md
```
