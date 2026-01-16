# Phase 4: Integration & Feature Completion

**Status:** Draft
**Phase:** 4 of 4
**Focus:** API Integration, Portfolio Page, Admin Dashboard

## 1. Backend Configuration
*   **CORS**: Ensure Backend allows requests from Frontend (localhost:5174/5173).
*   **Seeding**: Create a script to seed initial admin user and sample projects.

## 2. Public Features (Portfolio)
### 2.1. Portfolio Page (`pages/Portfolio.jsx`)
*   **Layout**: Grid view of projects.
*   **Fetching**: Use `useEffect` to call `api.get('/projects')`.
*   **Components**: `ProjectCard.jsx` to display individual project details (Image, Title, Category, Links).
*   **Filtering**: (Optional for V1) Filter by category.

### 2.2. Contact Form (`pages/Contact.jsx`)
*   Input fields: Name, Email, Service Type, Message.
*   Action: POST to `/api/v1/messages`.
*   Feedback: Show success/error notification.

---

## 3. Admin Features (Dashboard)
### 3.1. Dashboard Overview (`components/admin/Dashboard.jsx`)
*   **Top**: Stats (Total Projects, Unread Messages).
*   **Tabs**: "Projects" vs "Messages".

### 3.2. Project Management
*   **List View**: Table showing project name, category, featured status, actions (Edit/Delete).
*   **Add/Edit Form**: 
    *   Multilingual Fields: Title (EN/AR/HE), Description (EN/AR/HE).
    *   Tech Fields: Category, Live URL, GitHub URL, Image URL.
    *   Action: POST/PUT to `/api/v1/projects`.

### 3.3. Message Management
*   **List View**: Table of messages.
*   **Action**: Mark as Read button.

---

## 4. Execution Plan
1.  **Backend**: Verify CORS and Seed Data.
2.  **Frontend**: Create `Portfolio` page & `ProjectCard`.
3.  **Frontend**: Build `Contact` page logic.
4.  **Frontend**: Enhance `Dashboard` with Project Management UI.
5.  **Data Entry**: Add the "Grand Opening" projects via Dashboard.
