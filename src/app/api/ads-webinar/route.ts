import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

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