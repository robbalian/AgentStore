import { NextRequest, NextResponse } from "next/server";

interface Review {
  id: string;
  agent_id: string;
  rating: number;
  review_text: string;
  purchase_verified: boolean;
  created_at: string;
}

/** In-memory review store (resets on cold start). */
const reviews: Review[] = [];

let nextId = 1;

export async function GET() {
  const totalRatings = reviews.length;
  const averageRating =
    totalRatings > 0
      ? Math.round(
          (reviews.reduce((sum, r) => sum + r.rating, 0) / totalRatings) *
            100,
        ) / 100
      : null;

  return NextResponse.json({
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    total_reviews: totalRatings,
    average_rating: averageRating,
    reviews: reviews.map((r) => ({
      id: r.id,
      agent_id: r.agent_id,
      rating: r.rating,
      review_text: r.review_text,
      purchase_verified: r.purchase_verified,
      created_at: r.created_at,
    })),
  });
}

interface ReviewBody {
  agent_id: string;
  rating: number;
  review_text: string;
  purchase_verified?: boolean;
}

export async function POST(request: NextRequest) {
  let body: ReviewBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const { agent_id, rating, review_text, purchase_verified = false } = body;

  if (!agent_id || typeof rating !== "number" || !review_text) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: agent_id (string), rating (number 1-5), review_text (string)",
      },
      { status: 400 },
    );
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "rating must be an integer between 1 and 5" },
      { status: 400 },
    );
  }

  if (review_text.length > 2000) {
    return NextResponse.json(
      { error: "review_text must be 2000 characters or fewer" },
      { status: 400 },
    );
  }

  const review: Review = {
    id: `review_${nextId++}`,
    agent_id,
    rating,
    review_text,
    purchase_verified,
    created_at: new Date().toISOString(),
  };

  reviews.push(review);

  return NextResponse.json(
    {
      status: "created",
      review,
    },
    { status: 201 },
  );
}
