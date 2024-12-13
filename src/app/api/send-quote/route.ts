import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const service = formData.get('service')
  const details = formData.get('details')

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
      <title>New Quote Request</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="background-color: #f4f4f4; text-align: center; padding: 20px;">
            <h1 style="color: #444; margin: 0;">New Quote Request</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; background-color: #ffffff;">
            <p style="margin-bottom: 20px;">You have received a new quote request:</p>
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
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px;"><strong>Details:</strong></td>
                <td style="padding: 10px;">${details}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color: #f4f4f4; text-align: center; padding: 20px; font-size: 14px;">
            <p style="margin: 0;">This email was sent from the K2 Printing website quote request form.</p>
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
      subject: `New quote request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`,
      html: htmlContent,
    })

    return NextResponse.json({ message: "Quote request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send quote request:", error)
    return NextResponse.json({ error: "Failed to send quote request" }, { status: 500 })
  }
}
