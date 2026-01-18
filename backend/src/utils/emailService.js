const nodemailer = require('nodemailer');

const sendLeadNotification = async (leadData) => {
    const { name, email, phone, service, content } = leadData;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Itqan Agency Bot" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Sending to the same agency email
            subject: `🚀 New Lead: ${name} - ${service}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #10b981; text-align: center;">New Lead Received!</h2>
                    <p>You have a new message from the Itqan Agency website contact form.</p>
                    <hr style="border: 0; border-top: 1px solid #eee;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Name:</strong></td>
                            <td style="padding: 10px 0;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td>
                            <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Phone:</strong></td>
                            <td style="padding: 10px 0;">${phone || 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Requested Service:</strong></td>
                            <td style="padding: 10px 0;">${service}</td>
                        </tr>
                    </table>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <p style="margin-top: 0; color: #666;"><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${content}</p>
                    </div>
                    <p style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
                        Sent from Itqan Agency Website Lead Manager
                    </p>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Lead notification email sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending lead notification email:', error);
        return false;
    }
};

module.exports = { sendLeadNotification };
