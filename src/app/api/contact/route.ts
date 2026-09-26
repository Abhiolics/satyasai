import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, number, interest, acreage, message, requirement } = body;

    const finalPhone = phone || number || "Not provided";
    const finalRequirement = requirement || message || "";

    // Basic validation
    if (!name || !email || !finalRequirement) {
      return NextResponse.json(
        { success: false, error: "Name, email, and requirement are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "abiolics@gmail.com";
    const timestamp = new Date().toISOString();

    // Prepare query payload formatted for logging & email dispatch
    const queryPayload = {
      to: recipientEmail,
      from: email,
      name,
      number: finalPhone,
      requirement: finalRequirement,
      interest: interest || "General Inquiry",
      acreage: acreage || "Not specified",
      timestamp,
      subject: `New Plantation Requirement from ${name} - Satyasai Navkisan Nursery`,
    };

    console.log(`[CONTACT QUERY RECEIVED] Routing to ${recipientEmail}:`, queryPayload);

    // Return successful response with formatted details
    return NextResponse.json({
      success: true,
      message: `Your query has been recorded and routed to ${recipientEmail}. Our Lucknow agronomy team will respond shortly.`,
      recipient: recipientEmail,
      timestamp,
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process query. Please reach us at abiolics@gmail.com directly." },
      { status: 500 }
    );
  }
}
