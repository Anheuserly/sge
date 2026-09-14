import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const apiUrl = process.env.SGE_API_URL || "https://api.amcmep.in/v1";
    const businessId = process.env.SGE_BUSINESS_ID || "00000000-0000-0000-0000-000000000000";

    const response = await fetch(`${apiUrl}/website/inquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        businessId,
        title: "Website Contact Form",
        description: payload.message || "No message provided",
        name: payload.name || "Unknown",
        phone: payload.phone || "Unknown",
        email: payload.email || "",
        address: payload.location || payload.company || "",
        source: payload.source || "sge.org.in",
        topic: "contact",
        urgency: "normal",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { message: errorText || "DataHub error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
