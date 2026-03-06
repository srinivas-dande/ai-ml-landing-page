import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import fs from "fs"
import path from "path"

export async function POST(req) {

  try {

    const body = await req.json()

    const { fullName, email, phone } = body

    await prisma.adsOnWebinar.create({
      data: {
        fullName,
        email,
        phone
      }
    })

    
    const brochureDir = path.join(process.cwd(), "public", "brochure")
    const files = fs.readdirSync(brochureDir)

    if (!files.length) {
      return NextResponse.json({
        success: false,
        message: "No brochure file found"
      })
    }

    // Pick first file
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