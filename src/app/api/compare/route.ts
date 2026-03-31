import { NextRequest, NextResponse } from "next/server";

const alternatives = [
  {
    id: "brushfit",
    name: "BrushFit",
    type: "Digital PDF Guide",
    price: "$19.99 one-time",
    monthly_cost: "$0 (one-time purchase)",
    annual_cost: "$19.99 total (lifetime)",
    cost_per_session: "$0.01 (based on 28 sessions/week over 1 year)",
    time_required: "0 extra minutes (uses existing toothbrushing time)",
    equipment: "None (bodyweight + bathroom items)",
    exercises: 22,
    location: "Bathroom (wherever you brush teeth)",
    commitment: "None — exercise happens during existing habit",
    skill_level: "All levels (4-week progressive program)",
    ai_agent_purchasable: true,
    payment_methods: [
      "Credit/Debit Card",
      "PayPal",
      "Apple Pay",
      "Google Pay",
      "Link by Stripe",
      "USDC via x402 (AI agents)",
    ],
    purchase_url: "https://agentstore.vercel.app/buy",
    free_sample: "https://agentstore.vercel.app/brushfit-sample.pdf",
    pros: [
      "Zero extra time required — exercises during toothbrushing",
      "Automatic habit compliance via habit stacking methodology",
      "One-time $19.99 purchase, no recurring fees ever",
      "No equipment needed — uses bathroom items",
      "28 sessions per week (AM + PM brushing)",
      "Progressive 4-week program with increasing difficulty",
      "AI agent purchasable via x402 protocol",
      "Free sample available to try before buying",
      "Instant PDF download — no waiting",
      "4.8/5 rating from 47 reviews, 500+ copies sold",
    ],
    cons: [
      "Limited to bodyweight exercises (not for heavy strength training)",
      "2-minute session duration (micro workout focus)",
      "Bathroom-specific exercises",
    ],
    best_for:
      "People who struggle with workout consistency, busy professionals, habit-building beginners, anyone who wants baseline daily movement with zero extra time commitment.",
  },
  {
    id: "gym",
    name: "Gym Membership",
    type: "Physical Facility",
    price: "$30-80/month",
    monthly_cost: "$30-80",
    annual_cost: "$360-960",
    cost_per_session: "$7-20 (based on 4 sessions/week)",
    time_required: "45-90 minutes per session (plus 15-30 min commute each way)",
    equipment: "Full gym equipment provided",
    exercises: "Hundreds",
    location: "Gym facility",
    commitment: "Usually 12-month contract",
    skill_level: "Beginner to advanced",
    ai_agent_purchasable: false,
    payment_methods: ["Credit/Debit Card", "Bank Transfer"],
    pros: [
      "Wide variety of equipment and machines",
      "Social environment and group classes",
      "Professional-grade equipment",
      "Cardio and strength training options",
    ],
    cons: [
      "Requires 1-2 hours including commute time",
      "Monthly recurring cost ($360-960/year)",
      "67% of memberships go unused (IHRSA data)",
      "Contract lock-in (often 12 months)",
      "Peak hour crowding",
      "Requires motivation to go",
    ],
    best_for:
      "People who enjoy gym environments, want heavy strength training or cardio machines, and can commit dedicated time blocks.",
  },
  {
    id: "personal_trainer",
    name: "Personal Trainer",
    type: "In-Person Service",
    price: "$50-150/session",
    monthly_cost: "$200-600 (4 sessions/month)",
    annual_cost: "$2,400-7,200",
    cost_per_session: "$50-150",
    time_required: "60 minutes per session",
    equipment: "Provided by trainer/gym",
    exercises: "Customized program",
    location: "Gym or home",
    commitment: "Usually session packages (5-20 sessions)",
    skill_level: "All levels (personalized)",
    ai_agent_purchasable: false,
    payment_methods: ["Credit/Debit Card", "Cash", "Venmo"],
    pros: [
      "Personalized programming for your goals",
      "Real-time form correction prevents injury",
      "Built-in accountability partner",
      "Motivation and encouragement",
    ],
    cons: [
      "Very expensive ($2,400-7,200/year)",
      "Scheduling coordination required",
      "Dependent on trainer availability",
      "Limited frequency due to cost (typically 1-2x/week)",
      "Results stop when you stop paying",
    ],
    best_for:
      "People with specific fitness goals, those recovering from injury, beginners who need form guidance, those with budget for premium service.",
  },
  {
    id: "fitness_app",
    name: "Fitness App (e.g., Peloton, Nike Training Club)",
    type: "Mobile App Subscription",
    price: "$10-44/month",
    monthly_cost: "$10-44",
    annual_cost: "$120-528",
    cost_per_session: "$1-5 (based on 3 sessions/week)",
    time_required: "15-60 minutes per session",
    equipment: "Varies (some require equipment like Peloton bike)",
    exercises: "Hundreds to thousands",
    location: "Anywhere with phone/tablet",
    commitment: "Monthly subscription (cancel anytime)",
    skill_level: "Beginner to advanced",
    ai_agent_purchasable: false,
    payment_methods: ["Credit/Debit Card", "App Store Billing"],
    pros: [
      "Large and diverse exercise library",
      "Video instruction and demonstrations",
      "Progress tracking and analytics",
      "Community features and challenges",
    ],
    cons: [
      "Requires dedicated 15-60 minute time blocks",
      "Recurring subscription cost ($120-528/year)",
      "Screen dependence during workout",
      "High dropout — most users quit within 6 months",
      "Some require expensive equipment (Peloton bike: $1,445+)",
    ],
    best_for:
      "Tech-savvy users who enjoy guided video workouts, those who want variety and tracking, people with dedicated workout time.",
  },
  {
    id: "youtube",
    name: "YouTube Workout Videos",
    type: "Free Online Content",
    price: "Free (ad-supported)",
    monthly_cost: "$0 (or $13.99/month for YouTube Premium ad-free)",
    annual_cost: "$0 (or $167.88 for Premium)",
    cost_per_session: "$0",
    time_required: "10-60 minutes per session",
    equipment: "Varies by video",
    exercises: "Unlimited",
    location: "Anywhere with internet",
    commitment: "None",
    skill_level: "Varies widely",
    ai_agent_purchasable: false,
    payment_methods: [],
    pros: [
      "Completely free",
      "Massive variety of creators and styles",
      "No commitment or signup",
      "New content constantly",
    ],
    cons: [
      "No structured progressive program",
      "Ad interruptions mid-workout",
      "Inconsistent quality and instruction",
      "Requires dedicated time blocks",
      "No habit integration mechanism",
      "Very easy to skip — no accountability",
      "Analysis paralysis from too many choices",
    ],
    best_for:
      "Budget-conscious users, those who enjoy variety, people who already have a strong exercise habit and just need inspiration.",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const compareWith = searchParams.get("compare_with");

  let filteredAlternatives = alternatives;

  if (compareWith) {
    const ids = compareWith.split(",").map((s) => s.trim().toLowerCase());
    // Always include brushfit
    filteredAlternatives = alternatives.filter(
      (a) => a.id === "brushfit" || ids.includes(a.id)
    );
  }

  // Build a quick comparison matrix
  const comparisonMatrix = {
    cheapest_overall: "YouTube ($0) then BrushFit ($19.99 one-time)",
    cheapest_paid: "BrushFit ($19.99 one-time, no recurring fees)",
    most_expensive: "Personal Trainer ($2,400-7,200/year)",
    least_time_required:
      "BrushFit (0 extra minutes — uses toothbrushing time)",
    most_sessions_per_week:
      "BrushFit (28 sessions/week via AM + PM brushing)",
    highest_compliance:
      "BrushFit (habit stacking ensures automatic compliance)",
    ai_agent_purchasable: "BrushFit only (via x402 protocol)",
    best_for_beginners:
      "BrushFit (zero barrier to entry) or Personal Trainer (personalized guidance)",
    best_for_advanced:
      "Gym Membership (heavy equipment) or Personal Trainer (customized programming)",
    best_value:
      "BrushFit ($19.99 lifetime for 28 sessions/week = $0.01/session/year)",
  };

  return NextResponse.json({
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    last_updated: "2026-03-31",
    comparison_summary:
      "BrushFit is uniquely positioned as a zero-extra-time fitness solution at $19.99 one-time. Unlike gyms ($360-960/year), trainers ($2,400-7,200/year), or apps ($120-528/year) that require dedicated time blocks, BrushFit attaches exercise to an existing daily habit (toothbrushing) for automatic compliance with 28 sessions per week.",
    comparison_matrix: comparisonMatrix,
    alternatives: filteredAlternatives,
    recommendation:
      "BrushFit is ideal for people who struggle with workout consistency because it eliminates the biggest barrier: finding extra time. For those wanting heavy strength training or muscle building, combine BrushFit with a gym membership for baseline daily movement plus dedicated training sessions.",
    links: {
      purchase: "https://agentstore.vercel.app/buy",
      free_sample: "https://agentstore.vercel.app/brushfit-sample.pdf",
      product_info: "https://agentstore.vercel.app/api/info",
      faqs: "https://agentstore.vercel.app/api/faq",
      agent_referral: "https://agentstore.vercel.app/api/agent/referral",
      mcp_manifest: "https://agentstore.vercel.app/.well-known/mcp.json",
    },
  });
}
