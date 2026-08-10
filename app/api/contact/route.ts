import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Helper function to append to Google Sheets dynamically based on current month
async function appendToGoogleSheet(data: any) {
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
        console.log("Google Sheets credentials missing, skipping sheet append.");
        return;
    }

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ auth, version: 'v4' });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        
        // Get current month and year for the sheet name (e.g., "August 2026")
        const date = new Date();
        const sheetName = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        // Check if the sheet exists
        const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
        const sheetExists = spreadsheet.data.sheets?.some(s => s.properties?.title === sheetName);

        if (!sheetExists) {
            // Create new sheet for the new month
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId,
                requestBody: {
                    requests: [{
                        addSheet: { properties: { title: sheetName } }
                    }]
                }
            });

            // Add headers to the new sheet
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range: `${sheetName}!A1`,
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: [['Date', 'Name', 'Phone', 'Email', 'Service']] }
            });
        }

        // Append the new row of customer data
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: `${sheetName}!A:E`,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[
                    date.toLocaleString(),
                    data.name,
                    data.phone,
                    data.email,
                    data.service
                ]]
            }
        });
        
        console.log("Successfully appended to Google Sheet");
    } catch (error) {
        console.error("Google Sheets Error:", error);
        // We don't throw here so that the email still sends successfully even if sheets fail
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, service } = body;

        if (!name || !email || !phone) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer with Yandex
        const transporter = nodemailer.createTransport({
            host: 'smtp.yandex.com',
            port: 465,
            secure: true,
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

        // Append record to Google Sheets
        await appendToGoogleSheet({ name, email, phone, service });

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Nodemailer Error:', error);
            return NextResponse.json({ success: false, error: 'Failed to send emails' }, { status: 500 });
        }
    }
