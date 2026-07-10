import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        const { firstName, lastName, email, message, subject } = await req.json();

        if (!firstName || !email || !message || !subject) {
            return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
        }

        const emailUser = process.env.NEXT_PUBLIC_EMAIL;
        const emailPass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

        // If environment variables are not set, return error to trigger client-side fallback
        if (!emailUser || !emailPass) {
            return NextResponse.json({ error: "SMTP credentials not configured" }, { status: 501 });
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: emailPass,
            to: emailUser,
            subject: `Portfolio Contact Form: ${subject}`,
            text: `
                You have received a new message from your portfolio contact form.

                Name: ${firstName} ${lastName}
                Email: ${email}
                Subject: ${subject}

                Message:
                ${message}
            `,
        };

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info);
                }
            });
        });

        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email via contact API:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
