import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const fullName = typeof body?.fullName === "string" ? body.fullName.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

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

    const newRow = {
      Full_Name: fullName,
      Email: email,
      Message: message,
      Date: new Date().toLocaleString(),
    };

    let workbook;

    if (fs.existsSync(filePath)) {
      try {
        workbook = XLSX.readFile(filePath);
      } catch (readErr) {
        const code = readErr?.code;
        const msg = typeof readErr?.message === "string" ? readErr.message : "";
        if (
          code === "EPERM" ||
          code === "EBUSY" ||
          code === "EACCES" ||
          msg.toLowerCase().includes("cannot access file")
        ) {
          return Response.json(
            {
              ok: false,
              error:
                "Cannot access contact-data.xlsx. Close the file if it is open (e.g., in Excel) and try again.",
            },
            { status: 423 }
          );
        }
        throw readErr;
      }
    } else {
      workbook = XLSX.utils.book_new();
    }

    const sheetName = "Contacts";
    const existingSheet = workbook.Sheets[sheetName];
    const existingRows = existingSheet
      ? XLSX.utils.sheet_to_json(existingSheet)
      : [];

    const updatedRows = [...existingRows, newRow];
    const updatedSheet = XLSX.utils.json_to_sheet(updatedRows);

    workbook.Sheets[sheetName] = updatedSheet;
    if (!workbook.SheetNames.includes(sheetName)) {
      workbook.SheetNames.push(sheetName);
    }

    try {
      const wbBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "buffer",
      });
      fs.writeFileSync(filePath, wbBuffer);
    } catch (writeErr) {
      const code = writeErr?.code;
      if (code === "EPERM" || code === "EBUSY" || code === "EACCES") {
        return Response.json(
          {
            ok: false,
            error:
              "Cannot save contact-data.xlsx. Close the file if it is open (e.g., in Excel) and try again.",
          },
          { status: 423 }
        );
      }
      throw writeErr;
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("/api/contact error:", err);
    return Response.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
