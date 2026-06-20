import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, enrollment_number, email, grievance_category, message } = body;

    // Configure the email transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Format the email that the council will receive
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends it to your own inbox
      replyTo: email, // Clicking "Reply" will reply directly to the student
      subject: `🚨 [Confidential Grievance] ${grievance_category}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
          <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">New Grievance Submitted</h2>
          
          <p><strong>Category:</strong> ${grievance_category}</p>
          <p><strong>Student Name:</strong> ${name || 'Confidential / Not Provided'}</p>
          <p><strong>Enrollment No:</strong> ${enrollment_number || 'Confidential / Not Provided'}</p>
          <p><strong>Reply Email:</strong> ${email}</p>
          
          <h3 style="margin-top: 30px; color: #374151;">Grievance Details:</h3>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; color: #1f2937; white-space: pre-wrap;">
            ${message}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #9ca3af;">
            *This email was securely generated via the KUSGC Grievance Portal. Do not forward this email to unauthorized personnel.*
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending grievance email:", error);
    return NextResponse.json({ error: 'Failed to securely send message' }, { status: 500 });
  }
}