# Chatbot System Architecture & Workflow

This document explains how the **Itqan Bot** (AI Assistant) is implemented, its architecture, and the workflow of a typical chat interaction.

## 1. Overview
The Itqan Bot is a custom AI-driven sales representative integrated into the Itqan Agency website. It is designed to provide instant answers about the agency's services, team, and offers while driving users toward conversion (booking a call or emailing).

---

## 2. System Architecture

The chatbot follows a classic Client-Server architecture with an integrated LLM (Large Language Model) provider.

### A. Frontend (React)
- **Component**: `ChatWidget.jsx`
- **Responsibilities**:
    - Manage the UI state (expansion, loading states, message list).
    - Handle user input and validation.
    - Provide a smooth, animated interface using **Framer Motion**.
    - Implement **RTL (Right-to-Left)** support for Arabic and Hebrew text.
    - Maintain a rolling window of history (last 5 messages) for context.

### B. Backend (Node.js/Express)
- **Endpoint**: `POST /api/chat`
- **Controller**: `chatController.js`
- **Responsibilities**:
    - **Knowledge Retrieval**: Dynamically reads the agency's knowledge base from `backend/knowledge.md` on every request to ensure up-to-date information.
    - **Prompt Engineering**: Constructs a "System Prompt" that defines the bot's persona, tone, and strict rules (source of truth).
    - **OpenAI Integration**: Communicates with the OpenAI API using the `gpt-4o-mini` model.
    - **Security**: Protects the API Key on the server-side.

### C. Source of Truth (Knowledge Base)
- **File**: `backend/knowledge.md`
- Contains all relevant information about the agency:
    - Services (AI Automation, Full-stack Web/App Dev, MVP Strategy).
    - Team structure (The "Hybrid Advantage").
    - Contact details and call-to-action links.
    - Current promotions (e.g., 75% OFF offer).

---

## 3. Core Features

### Multilingual Support
The bot automatically detects the user's language (English, Arabic, or Hebrew) and replies in the same language. The UI also adjusts text direction (LTR/RTL) accordingly.

### Context Awareness
The bot sends the last few messages of the conversation back to the AI model, allowing it to remember what was previously discussed (e.g., following up on a service mentioned in the previous message).

### Minimalist & Sales-Oriented
The system prompt is tuned to keep answers brief and always redirect the user toward a "Call to Action" (Booking a Calendly call or sending an email).

---

## 4. Interaction Workflow

1.  **User Input**: User types a question in the `ChatWidget`.
2.  **Frontend Processing**:
    - Message is added to the local state.
    - A request is sent to `POST /api/chat` with the `message` and `history`.
3.  **Backend Processing**:
    - Controller reads `knowledge.md`.
    - Merges knowledge with the system prompt and conversation history.
    - Sends the payload to OpenAI's `gpt-4o-mini`.
4.  **AI Generation**: OpenAI generates a response based *only* on the provided knowledge base.
5.  **Response Delivery**: The backend sends the reply back to the frontend.
6.  **UI Update**: The frontend displays the bot's reply with a "typing" animation and scroll-to-bottom effect.

---

## 5. Technology Stack
- **Frontend**: React, Framer Motion, Tailwind CSS, React Icons.
- **Backend**: Node.js, Express, OpenAI SDK.
- **AI Model**: `gpt-4o-mini` (fast and cost-effective).
- **Storage**: Flat-file Markdown (`knowledge.md`).
