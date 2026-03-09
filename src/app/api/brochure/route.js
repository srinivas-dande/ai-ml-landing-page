import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import fs from "fs"
import path from "path"
import nodemailer from "nodemailer"

export async function POST(req) {

  try {

    const body = await req.json()

    const {
      fullName,
      email,
      phone,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      landing_page,
      gclid
    } = body

    if (!fullName || !email || !phone) {
      return NextResponse.json({
        success: false,
        message: "Name, email and phone are required"
      })
    }

    await prisma.adsOnWebinar.create({
      data: {
        fullName,
        email,
        phone,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        utm_term: utm_term || null,
        utm_content: utm_content || null,
        landing_page: landing_page || null,
        gclid: gclid || null,
        status: "active"
      }
    })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: `"Brochure Lead" <${process.env.EMAIL_USER}>`,
      to: [
        "inbound@pipelinevelocity.com",
        "hello@dandesacademy.com",
        "chaitanya@dandesacademy.com",
        "swetha@dandesacademy.com"
      ],
      subject: "New AI/ML Brochure Download",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f7fa; padding:30px;">
          <div style="max-width:520px; margin:auto; background:#ffffff; border-radius:8px; padding:25px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <h2 style="color:#C41E3A; margin-bottom:20px;">
              New AI/ML Webinar Registration
            </h2>

            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr>
                <td style="padding:8px; font-weight:bold;">Name</td>
                <td style="padding:8px;">${fullName}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Email</td>
                <td style="padding:8px;">${email}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Phone</td>
                <td style="padding:8px;">${phone}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Source</td>
                <td style="padding:8px;">${utm_source || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Medium</td>
                <td style="padding:8px;">${utm_medium || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Campaign</td>
                <td style="padding:8px;">${utm_campaign || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Keyword</td>
                <td style="padding:8px;">${utm_term || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Ad Content</td>
                <td style="padding:8px;">${utm_content || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">GCLID</td>
                <td style="padding:8px;">${gclid || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Landing Page</td>
                <td style="padding:8px;">${landing_page || "-"}</td>
              </tr>
            </table>

            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

            <p style="font-size:12px; color:#888;">
              Lead submitted from AI/ML Webinar Landing Page.
            </p>
          </div>
        </div>
      `,
    })

    await transporter.sendMail({
      from: '"Dandes Academy" <hello@dandesacademy.com>',
      to: email,
      subject: "Your AI/ML Course Brochure – Dandes Academy",
      html: `
        <h2>Hello ${fullName}</h2>

        <p>Thank you for your interest in our AI & Machine Learning program.</p>

        <p>You can download the brochure using the link provided on the page.</p>

        <p>Inside the brochure you will find:</p>

        <ul>
          <li>Complete AI/ML course curriculum</li>
          <li>15 detailed modules</li>
          <li>Projects and learning roadmap</li>
        </ul>

        <p>If you have any questions, feel free to reply to this email.</p>

        <p>Regards,<br/>
        Dandes Academy</p>
      `
    })

    const brochureDir = path.join(process.cwd(), "public", "brochure")
    const files = fs.readdirSync(brochureDir)

    if (!files.length) {
      return NextResponse.json({
        success: false,
        message: "No brochure file found"
      })
    }

    const brochureFile = files[0]

    return NextResponse.json({
      success: true,
      fileUrl: `/brochure/${brochureFile}`
    })

  } catch (error) {

    console.error(error)

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    })
  }
}