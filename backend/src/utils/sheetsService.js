const { google } = require('googleapis');

const appendLeadToSheet = async (leadData) => {
    const { name, email, phone, service, content, createdAt } = leadData;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [
                new Date(createdAt).toLocaleString(),
                name,
                email,
                phone || 'N/A',
                service,
                content,
            ],
        ];

        const resource = {
            values,
        };

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:F', // Assumes a standard Sheet1 starting at column A
            valueInputOption: 'USER_ENTERED',
            resource,
        });

        console.log('Lead appended to Google Sheet: %s', response.data.updates.updatedRange);
        return true;
    } catch (error) {
        console.error('Error appending lead to Google Sheet:', error);
        return false;
    }
};

module.exports = { appendLeadToSheet };
