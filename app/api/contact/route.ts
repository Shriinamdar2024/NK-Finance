import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, service } = body;

        if (!name || !email || !phone) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer with Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. Owner Notification Email (The lead details for Niranjan)
        const ownerMailOptions = {
            from: `NK Financial Website <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Lead: ${name} - ${service}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                    <h2 style="color: #f59e0b;">New Lead Alert!</h2>
                    <p>You have received a new consultation request from your website.</p>
                    <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 10px 0; font-weight: bold; width: 120px;">Name:</td><td style="padding: 10px 0;">${name}</td></tr>
                        <tr><td style="padding: 10px 0; font-weight: bold;">Phone:</td><td style="padding: 10px 0;">${phone}</td></tr>
                        <tr><td style="padding: 10px 0; font-weight: bold;">Email:</td><td style="padding: 10px 0;">${email}</td></tr>
                        <tr><td style="padding: 10px 0; font-weight: bold;">Service:</td><td style="padding: 10px 0;">${service}</td></tr>
                    </table>
                    <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="color: #555; font-size: 14px;">Action Required: Please reach out to them as soon as possible.</p>
                </div>
            `,
        };

        // 2. Customer Auto-Reply Email (Pure Plain Text to avoid Spam filters)
        const customerMailOptions = {
            from: `"Niranjan Khandekar" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Re: Your inquiry regarding ${service}`,
            text: `Hello ${name},

Thank you for reaching out! I wanted to quickly confirm that I've received your request regarding ${service}.

I am currently reviewing your details and I will personally reach out to you shortly to discuss how we can help secure your financial future.

If you need immediate assistance, please feel free to call me directly at +91 9373061520 or visit our office at Shop No- 5, Raghunath Bhuvan, Overseer Colony, Near Shiv Shakti Mandal, Sangli.

Best regards,

Niranjan Khandekar
Founder & Principal Advisor
NK Financial Consultancy`,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(ownerMailOptions),
            transporter.sendMail(customerMailOptions)
        ]);

        return NextResponse.json({ success: true, message: 'Emails dispatched successfully' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send emails' }, { status: 500 });
    }
}
