// app/api/contact/route.js
// npm install xlsx

import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const fullName =
      typeof body?.fullName === "string" ? body.fullName.trim() : "";
    const email =
      typeof body?.email === "string" ? body.email.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!fullName || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const dirPath = path.join(process.cwd(), "data");
    const filePath = path.join(dirPath, "contact-data.xlsx");

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let workbook;

    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
    } else {
      workbook = XLSX.utils.book_new();
    }

    const sheetName = "Contacts";

    const existingSheet = workbook.Sheets[sheetName];

    const existingRows = existingSheet
      ? XLSX.utils.sheet_to_json(existingSheet)
      : [];

    const nextSerial = existingRows.length + 1;

    const requestedDate = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const newRow = {
      "S.No": nextSerial,
      Name: fullName,
      Email: email,
      Message: message,
      "Requested Date": requestedDate,
      Status: "Not Contacted",
      "Contacted Date": "",
    };

    const updatedRows = [...existingRows, newRow];

    const worksheet = XLSX.utils.json_to_sheet(updatedRows);

    // column widths
    worksheet["!cols"] = [
      { wch: 8 },
      { wch: 25 },
      { wch: 30 },
      { wch: 45 },
      { wch: 22 },
      { wch: 18 },
      { wch: 22 },
    ];

    workbook.Sheets[sheetName] = worksheet;

    if (!workbook.SheetNames.includes(sheetName)) {
      workbook.SheetNames.push(sheetName);
    }

    const buffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "buffer",
    });

    fs.writeFileSync(filePath, buffer);

    return Response.json({
      ok: true,
      message: "Submitted successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      {
        ok: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}
