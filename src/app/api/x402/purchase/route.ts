import { NextRequest, NextResponse } from "next/server";
import { withX402 } from "@x402/next";
import { server, brushfitRouteConfig } from "@/lib/x402";
import { readFile } from "fs/promises";
import { join } from "path";

const handler = async (_req: NextRequest) => {
  const pdfPath = join(process.cwd(), "public", "brushfit-guide.pdf");
  const pdfBuffer = await readFile(pdfPath);

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="BrushFit-Guide.pdf"',
    },
  });
};

export const GET = withX402(handler, brushfitRouteConfig, server);
