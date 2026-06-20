import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, enrollment, email, phone, department, pitch } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email, // Clicking "Reply" will email the applicant directly
      subject: `🎯 [New Application] ${name} for ${department} Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
          <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New KUSGC Application Received</h2>
          
          <p><strong>Applicant Name:</strong> ${name}</p>
          <p><strong>Enrollment No:</strong> ${enrollment}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Target Department:</strong> <span style="background-color: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-weight: bold; color: #1f2937;">${department}</span></p>
          
          <h3 style="margin-top: 30px; color: #374151;">Why they want to join:</h3>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; color: #1f2937; white-space: pre-wrap; font-style: italic;">
            "${pitch}"
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #9ca3af;">
            *You can reply directly to this email to contact the applicant and schedule an interview.*
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending application email:", error);
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}