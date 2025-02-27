import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, message } = body;

    // Validations
    if (!name || typeof name !== "string" || name.trim().length < 3) {
        return NextResponse.json({ error: "Invalid name. Must be at least 3 characters long." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
        return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    try {
        const transport = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
                user: process.env.BREVO_USER,
                pass: process.env.BREVO_API_KEY,
            },
        });

        const mailOptions = {
            from: "tarun79767@gmail.com",
            to: "tarun8008058309@gmail.com",
            subject: "Portfolio Contact",
            html: `<!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Contact Email</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 20px;
                            }
                            .container {
                                max-width: 600px;
                                background: #ffffff;
                                padding: 20px;
                                border-radius: 10px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                            .header {
                                text-align: center;
                                font-size: 24px;
                                font-weight: bold;
                                color: #333;
                            }
                            .content {
                                font-size: 16px;
                                color: #555;
                                line-height: 1.5;
                                margin-top: 10px;
                            }
                            .footer {
                                margin-top: 20px;
                                font-size: 14px;
                                text-align: center;
                                color: #777;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">New Contact Request</div>
                            <div class="content">
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Message:</strong></p>
                                <p>${message}</p>
                            </div>
                            <div class="footer">This email was sent from your portfolio website.</div>
                        </div>
                    </body>
                    </html>`
        };
        const mailResponse = await transport.sendMail(mailOptions);
        return NextResponse.json({ message: "message sent", mailResponse }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
