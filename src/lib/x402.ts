import { x402ResourceServer, HTTPFacilitatorClient } from "@x402/core/server";
import { registerExactEvmScheme } from "@x402/evm/exact/server";
import type { RouteConfig } from "@x402/core/server";

const facilitatorClient = new HTTPFacilitatorClient({
  url: "https://x402.org/facilitator",
});

const server = new x402ResourceServer(facilitatorClient);
registerExactEvmScheme(server);

// Pay to this address — set via env var
const PAY_TO = process.env.X402_PAY_TO_ADDRESS || "0x0000000000000000000000000000000000000000";

export const brushfitRouteConfig: RouteConfig = {
  accepts: {
    scheme: "exact",
    payTo: PAY_TO,
    price: "$19.99",
    network: process.env.X402_NETWORK === "mainnet" ? "eip155:8453" : "eip155:84532", // Base Mainnet or Sepolia
  },
  description: "BrushFit: The 2-Minute Toothbrush Workout Guide (PDF)",
  mimeType: "application/pdf",
};

export { server };
