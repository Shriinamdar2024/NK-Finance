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
        
        // Send email to owner only
        await transporter.sendMail(ownerMailOptions);

            return NextResponse.json({ success: true, message: 'Emails dispatched successfully' });
        } catch (error) {
            console.error('Nodemailer Error:', error);
            return NextResponse.json({ success: false, error: 'Failed to send emails' }, { status: 500 });
        }
    }
