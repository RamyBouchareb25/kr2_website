import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="background-color: #f4f4f4; text-align: center; padding: 20px;">
            <h1 style="color: #444; margin: 0;">New Contact Form Submission</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; background-color: #ffffff;">
            <p style="margin-bottom: 20px;">You have received a new message from the contact form:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px;"><strong>Message:</strong></td>
                <td style="padding: 10px;">${message}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color: #f4f4f4; text-align: center; padding: 20px; font-size: 14px;">
            <p style="margin: 0;">This email was sent from the K2 Printing website contact form.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      cc: "ramybouchareb@gmail.com,ramilgh1604@gmail.com,karimiarkane6@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlContent,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
