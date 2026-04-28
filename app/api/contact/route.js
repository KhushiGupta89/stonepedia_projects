import { google } from "googleapis";

export const runtime = "nodejs";

function getGoogleAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKeyRaw) {
    return null;
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const fullName =
      typeof body?.fullName === "string" ? body.fullName.trim() : "";
    const email =
      typeof body?.email === "string" ? body.email.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";
    const status =
      body?.status === "Contacted" || body?.status === "Not Contacted"
        ? body.status
        : "Not Contacted";
    const contactedDate =
      typeof body?.contactedDate === "string" ? body.contactedDate.trim() : "";

    if (!fullName || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = process.env.GOOGLE_SHEETS_RANGE || "Contacts!A:G";

    if (!spreadsheetId) {
      return Response.json(
        { ok: false, error: "Missing GOOGLE_SHEETS_SPREADSHEET_ID" },
        { status: 500 }
      );
    }

    const auth = getGoogleAuth();
    if (!auth) {
      return Response.json(
        {
          ok: false,
          error:
            "Missing Google Sheets credentials. Set GOOGLE_SHEETS_CLIENT_EMAIL and GOOGLE_SHEETS_PRIVATE_KEY.",
        },
        { status: 500 }
      );
    }

    const sheets = google.sheets({ version: "v4", auth });

    const countRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const existingValues = Array.isArray(countRes.data?.values)
      ? countRes.data.values
      : [];
    const nextSerial = existingValues.length;

    const requestedDate = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const values = [
      [
        nextSerial,
        fullName,
        email,
        message,
        requestedDate,
        status,
        status === "Contacted" ? contactedDate : "",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    return Response.json({ ok: true, message: "Submitted successfully" });
  } catch (error) {
    console.error("Contact API Error:", error);
    const message =
      typeof error?.message === "string" ? error.message : "Server error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
