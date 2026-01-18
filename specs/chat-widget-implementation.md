# ChatWidget Component Implementation

This document provides a technical deep-dive into the `ChatWidget.jsx` component, which handles the frontend logic and user interface for the Itqan Bot.

## 1. Component Overview
The `ChatWidget` is a floating React component located at the bottom-right of the screen. It manages the entire lifecycle of a chat session, from UI animations to API communication.

---

## 2. Component State & Hooks

### State Management
- `isOpen` (boolean): Controls whether the chat window is expanded or collapsed.
- `message` (string): Stores the current text being typed by the user in the input field.
- `messages` (array): An array of objects `[{ role, content }]` representing the conversation history. Initialized with a welcome message.
- `isLoading` (boolean): Indicates if a request is currently being processed by the AI.

### References (Refs)
- `messagesEndRef`: A React Ref used to target the bottom of the message list for automatic scrolling.

---

## 3. Key Functionality

### Message Submission (`handleSubmit`)
1.  Prevents the default form submission.
2.  Checks for empty messages or active loading states.
3.  Adds the user's message to the local `messages` state immediately.
4.  Extracts the last 5 messages from the state to provide context to the AI.
5.  Sends a `POST` request to the backend `/chat` endpoint.
6.  Updates the state with the AI's response or an error message.

### Multilingual Support (`isRTL`)
The component includes a utility function to detect Right-to-Left (RTL) languages:
```javascript
const isRTL = (text) => {
    const rtlChars = /[\u0600-\u06FF\u0590-\u05FF]/;
    return rtlChars.test(text);
};
```
This dynamically adjusts the CSS `direction` and `text-align` properties for each message bubble based on its content.

### Auto-Scrolling
A `useEffect` hook triggers `scrollToBottom()` whenever the `messages` array or `isLoading` state changes, ensuring the user always sees the latest response.

---

## 4. UI/UX & Animations

### Framer Motion
- **Entrance/Exit**: The chat window uses `AnimatePresence` and `motion.div` for a smooth "pop-up" effect (opacity + scale + y-translation).
- **Message Bubbles**: Individual messages animate in from the left (bot) or right (user) as they appear.
- **Typing Indicator**: Features a bouncing dot animation when `isLoading` is true.

### Responsive Design
- The widget width is fixed at `350px` for mobile and `400px` for larger screens.
- Highly optimized for mobile touch targets (large floating button, clear input field).

---

## 5. Code Section Breakdown

### A. The Floating Button
The entry point of the widget. It uses a `whileHover` and `whileTap` scale effect for a premium feel.
```jsx
<motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setIsOpen(!isOpen)}
    className="chat-widget-button ..."
>
    {isOpen ? <IoMdClose size={28} /> : <BsChatDotsFill size={28} />}
</motion.button>
```

### B. The API Call Logic
This is where the frontend communicates with the AI backend.
```jsx
try {
    const history = messages.slice(-5); // Send last 5 messages for context
    const { data } = await api.post('/chat', { message, history });

    setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
} catch (error) {
    // Graceful error handling with fallback message
    setMessages((prev) => [...prev, { role: 'assistant', content: '...' }]);
}
```

### C. Message Rendering
Dynamic styling based on the role and text direction.
```jsx
<div
    className={`max-w-[80%] p-3 rounded-2xl ... ${
        msg.role === 'user'
            ? 'bg-primary text-white rounded-tr-none'
            : 'bg-white text-secondary border border-gray-100 rounded-tl-none'
    }`}
    style={{ direction: rtl ? 'rtl' : 'ltr', textAlign: rtl ? 'right' : 'left' }}
>
    {msg.content}
</div>
```
