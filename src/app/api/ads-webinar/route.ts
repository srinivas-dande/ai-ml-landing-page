import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, email, phone } = body

    
    const lead = await prisma.adsOnWebinar.create({
      data: {
        fullName,
        email,
        phone,
        status: "active",
      },
    })

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    
    await transporter.sendMail({
      from: `"Webinar Lead" <${process.env.EMAIL_USER}>`,
      to: ["inbound@pipelinevelocity.com", "hello@dandesacademy.com"],

      subject: "New AI/ML Webinar Registration",
      html: `
  <div style="font-family: Arial, sans-serif; background:#f5f7fa; padding:30px;">
    
    <div style="max-width:500px; margin:auto; background:#ffffff; border-radius:8px; padding:25px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      
      <h2 style="color:#C41E3A; margin-bottom:20px;">
        New AI/ML Webinar Registration
      </h2>

      <p style="font-size:14px; color:#555; margin-bottom:20px;">
        A new user has registered for the webinar. Details are below:
      </p>

      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr>
          <td style="padding:8px; font-weight:bold; color:#333;">Name</td>
          <td style="padding:8px; color:#555;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold; color:#333;">Email</td>
          <td style="padding:8px; color:#555;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold; color:#333;">Phone</td>
          <td style="padding:8px; color:#555;">${phone}</td>
        </tr>
      </table>

      <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

      <p style="font-size:12px; color:#888;">
        This lead was submitted from the AI/ML Webinar landing page.
      </p>

    </div>

  </div>
`,
    })

    return NextResponse.json({
      success: true,
      data: lead,
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    )
  }
}