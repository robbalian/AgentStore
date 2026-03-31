import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { validateDownloadToken } from "@/lib/download-tokens";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { error: "Missing download token. Check your purchase confirmation email or success page." },
      { status: 400 }
    );
  }

  const result = await validateDownloadToken(token);

  if (!result.valid) {
    return NextResponse.json({ error: result.error }, { status: 403 });
  }

  const pdfPath = join(process.cwd(), "public", "brushfit-guide.pdf");
  const pdfBuffer = await readFile(pdfPath);

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="BrushFit-Guide.pdf"',
    },
  });
}
