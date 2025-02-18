import { mailSender } from "@/app/lib/mail.service"; // adjust the import path as needed
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, fullName, message } = body;
    console.log(body);

    const textBody = `NAME: ${fullName} \n EMAIL: ${email} \n MESSAGE: ${message}`;

    await mailSender(
      email,
      "Your Data was sent successfully",
      "Thanks for connecting with me 🎉"
    );

    await mailSender("drmusicpiano@gmail.com", "Contact Me", textBody);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log("Error:", error);
    // console.log("Error message:", error.message);
    return NextResponse.json({
      success: false,
      message: "Something went wrong...",
    });
  }
}
