import { NextResponse } from "next/server";

export async function GET() {
  const bmcUrl = process.env.BUYMEACOFFEE_URL || "https://buymeacoffee.com/robbalian";
  const kofiUrl = process.env.KOFI_URL || "https://ko-fi.com/robbalian";
  return NextResponse.json({
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    price: "$19.99",
    tip_jar: true,
    platforms: {
      buy_me_a_coffee: {
        url: bmcUrl,
        description: "Support BrushFit on Buy Me a Coffee",
      },
      ko_fi: {
        url: kofiUrl,
        description: "Support BrushFit on Ko-fi",
      },
    },
    message: "Love BrushFit? Leave a tip or buy an extra copy for a friend!",
  });
}
