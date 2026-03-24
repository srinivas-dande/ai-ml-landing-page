import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      full_name,
      email,
      phone,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      landing_page,
      gclid,
      page_url,
      form_type,
      created_at,
      lead_stage
    } = body

    if (!full_name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, email and phone are required" },
        { status: 400 }
      )
    }

  

    const lead = await prisma.daAdsLeads.create({
      data: {
        full_name,
        email,
        phone,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        utm_term: utm_term || null,
        utm_content: utm_content || null,
        landing_page: landing_page || null,
        gclid: gclid || null,
        page_url: page_url || null,

    
        form_type: form_type || "Website Registration",
        created_at: created_at ? new Date(created_at) : new Date(),
        lead_stage: lead_stage || "New Lead"
      }
    })

    try {
      const webhookRes = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZmMDYzMjA0MzE1MjZlNTUzNzUxMzAi_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name,
          email,
          phone,

          utm_source,
          utm_medium,
          utm_campaign,
          utm_term,
          utm_content,
          gclid,

          landing_page,
          page_url,

          form_type: "Website Registration",
          created_at,
          lead_stage: "New Lead"
        }),
      });

      const text = await webhookRes.text();

      console.log("Webhook status:", webhookRes.status);
      console.log("Webhook response:", text);
    } catch (err) {
      console.error("Webhook error (Webinar Registration):", err);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Dandes Academy" <${process.env.EMAIL_USER}>`,
      to: ["inbound@pipelinevelocity.com","hello@dandesacademy.com", "chaitanya@dandesacademy.com", "swetha@dandesacademy.com"],
      subject: `New Ad Lead - ${full_name} - AI/ML Webinar Registration`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f7fa; padding:30px;">
          <div style="max-width:520px; margin:auto; background:#ffffff; border-radius:8px; padding:25px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <h2 style="color:#C41E3A; margin-bottom:20px;">
              New AI/ML Webinar Registration
            </h2>

            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr>
                <td style="padding:8px; font-weight:bold;">Name</td>
                <td style="padding:8px;">${full_name}</td>
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

              <tr>
                <td style="padding:8px; font-weight:bold;">Page URL</td>
                <td style="padding:8px;">${page_url || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Form Type</td>
                <td style="padding:8px;">${form_type || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Lead Stage</td>
                <td style="padding:8px;">${lead_stage || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Created Time</td>
                <td style="padding:8px;">
                  ${lead.created_at.toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
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
      subject: "Webinar Registration Confirmed – See You Live | Dandes Academy",
      html: `
        <div style="font-family: Arial, sans-serif; font-size:15px; line-height: 1.6; color: #333;">
          <h2 style="color:#111;">Hello ${full_name || "there"},</h2>

          <p>Thank you for registering for our upcoming webinar:</p>

          <h3 style="margin-bottom: 10px; color: #000;">
            AI Career Switch Blueprint – How Software Engineers Are Transitioning to AI/ML Roles
          </h3>

          <p><strong>📅 Date: 26th March 2026 (Thursday)</strong></p>
          <p><strong>⏰ Time: 8:00 PM IST</strong></p>
          <p><strong>📍 Mode: Live Online Session</strong></p>

          <p>You will receive the joining link before the session starts.</p>

          <p><strong>In this webinar, you will learn:</strong></p>

          <ul style="padding-left: 20px;">
            <li>Why many software engineers are moving into AI roles</li>
            <li>How your existing software engineering experience becomes an advantage</li>
            <li>The skills you should focus on (and what to skip)</li>
            <li>A clear roadmap to transition into AI/ML roles</li>
          </ul>

          <p>Looking forward to seeing you live!</p>

          <p>
            Regards,<br/>
            <strong>Srinivas Dande</strong><br/>
            Founder & Lead Trainer<br/>
            Dandes Academy
          </p>
        </div>
      `,
    });

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