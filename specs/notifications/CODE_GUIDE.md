# Notifications System: Code Guide

This guide provides a detailed technical breakdown of the code implemented to handle lead notifications via Email and Google Sheets.

## 1. Utilities Folder (`backend/src/utils/`)

We introduced a `utils` folder to house modular logic for external integrations.

### A. Email Service (`emailService.js`)
- **Technology**: `nodemailer`.
- **Function**: `sendLeadNotification(leadData)`.
- **Logic**:
    - Creates a `transporter` using Gmail SMTP.
    - Uses environment variables `EMAIL_USER` and `EMAIL_PASS`.
    - Constructs a responsive HTML email with lead details (Name, Email, Phone, Service, Message).
    - Sends the email to the agency's dedicated email address.
- **Error Handling**: Catches connection/auth issues and logs them to the console without interrupting the main user flow.

### B. Google Sheets Service (`sheetsService.js`)
- **Technology**: `googleapis`.
- **Function**: `appendLeadToSheet(leadData)`.
- **Logic**:
    - Uses `google.auth.GoogleAuth` for Service Account authentication.
    - `private_key` is parsed to handle newline characters correctly from `.env`.
    - Interacts with the `spreadsheets` API (`v4`).
    - Appends a new row to `Sheet1` in the spreadsheet identified by `GOOGLE_SHEET_ID`.
    - Columns: `Timestamp`, `Name`, `Email`, `Phone`, `Service`, `Message`.

## 2. Controller Integration (`backend/src/controllers/messageController.js`)

The `createMessage` function was updated to trigger these services.

### `createMessage` Flow:
1. **Request Validation**: Extracts lead data from `req.body`.
2. **Database Persistence**: Saves the message to MongoDB using the `Message` model.
3. **Background Tasks**:
    - Calls `sendLeadNotification(...)`.
    - Calls `appendLeadToSheet(...)`.
    - *Note: These are deliberately NOT awaited before the response, allowing the server to respond to the user immediately.*
4. **Response**: Sends the saved `message` object back to the frontend with a `201 Created` status.

## 3. Environment Configuration (`.env`)

The system relies on the following keys:
- `EMAIL_USER`: Agency Gmail address.
- `EMAIL_PASS`: 16-character Gmail App Password.
- `GOOGLE_SHEET_ID`: Unique ID from the Google Sheet URL.
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: `client_email` from the Google Service Account JSON.
- `GOOGLE_PRIVATE_KEY`: `private_key` from the Google Service Account JSON.

---

For architectural details, see [ARCHITECTURE.md](file:///c:/Users/Abdullah%20ABo%20EL-Hija/Desktop/ItqanAgencyWebsite/specs/notifications/ARCHITECTURE.md).
