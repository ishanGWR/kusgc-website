import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, enrollment_number, email, grievance_category, message } = body;

    // Set up Nodemailer with your Grievance email credentials from .env.local
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GRIEVANCE_EMAIL,
        pass: process.env.GRIEVANCE_APP_PASS,
      },
    });

    // Format the email that will arrive in the inbox
    const mailOptions = {
      from: process.env.GRIEVANCE_EMAIL,
      to: process.env.GRIEVANCE_EMAIL, // Sends the email to the grievance inbox
      replyTo: email, // Allows you to click "Reply" and email the student back directly
      subject: `🚨 New Grievance Report: ${grievance_category}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
          <h2 style="color: #ef4444; margin-bottom: 20px;">New Grievance Submitted</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; width: 150px;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Enrollment No:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${enrollment_number}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Student Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Category:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="background-color: #fee2e2; color: #991b1b; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">
                  ${grievance_category}
                </span>
              </td>
            </tr>
          </table>

          <h3 style="margin-bottom: 10px;">Detailed Description:</h3>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">
            ${message}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center;">
            This email was automatically generated from the KUSGC Grievance Portal.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Tell the frontend it was a success
    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}