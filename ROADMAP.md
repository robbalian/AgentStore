# AgentStore Roadmap — Agentic Commerce Promotion

## Vision

Make AgentStore the reference implementation for selling digital products to AI agents via x402. Use it to demonstrate, promote, and grow the agentic commerce ecosystem.

---

## Phase 1: Agent-Ready Foundation (Current)

- [x] x402 paywall on PDF endpoint
- [x] `/api/info` discovery endpoint for agents
- [x] Agent buyer test script (`scripts/buy-brushfit.ts`)
- [x] README with agent integration guide (automated + manual flows)
- [x] Price alignment across all surfaces
- [ ] `.well-known/x402.json` — standard machine-readable discovery so agents can find paywalled resources without prior knowledge of the API
- [ ] Add `@x402/paywall` browser component for full wallet connection + payment UI (human flow)

---

## Phase 2: Promotion & Distribution

### Where to promote AgentStore / x402 commerce

#### Agent Frameworks & Platforms
- [ ] **Claude tool-use / MCP servers** — build an MCP tool that wraps x402/fetch so any Claude agent can purchase x402 resources natively
- [ ] **OpenAI function calling** — example function definition for x402 purchase flow
- [ ] **LangChain / LangGraph** — custom tool or toolkit for x402 payments
- [ ] **CrewAI** — x402 payment tool for multi-agent crews
- [ ] **AutoGPT / AgentGPT** — plugin for x402 purchases
- [ ] **Vercel AI SDK** — middleware or tool example for x402

#### Developer Ecosystems
- [ ] **npm package** — publish a standalone `agentstore-client` or contribute examples to `@x402/*` packages
- [ ] **Awesome lists** — submit to awesome-ai-agents, awesome-web3, awesome-crypto-payments
- [ ] **Dev.to / Hashnode / Medium** — "How to sell digital products to AI agents" tutorial
- [ ] **GitHub Topics** — tag repo with `agentic-commerce`, `x402`, `ai-payments`, `stablecoin`

#### x402 Directories & Marketplaces (submit AgentStore to these)
- [ ] **[x402.org/ecosystem](https://www.x402.org/ecosystem)** — official x402 ecosystem directory (150+ projects). Submit via PR to [coinbase/x402](https://github.com/coinbase/x402) GitHub repo
- [ ] **[x402scan.com](https://www.x402scan.com/)** — ecosystem explorer with tx volumes, server stats, embedded wallet. Submit at [x402scan.com/resources/register](https://www.x402scan.com/resources/register)
- [ ] **x402 Bazaar (Coinbase)** — protocol-native discovery layer. Enable `discoverable: true` in x402 middleware + add schemas → auto-listed after first payment. [Docs](https://docs.cdp.coinbase.com/x402/bazaar)
- [ ] **[402index.io](https://402index.io/)** — aggregates 15,000+ paid API endpoints across x402/L402/MPP. Self-register at `/api/v1/register`, verify via `/.well-known/402index-verify.txt`
- [ ] **[x402list.fun](https://x402list.fun)** — auto-indexed from facilitator data once payments process (no action needed beyond having live payments)
- [ ] **[x402.eco](https://www.x402.eco/)** — "The Payment Layer for AI Agents" ecosystem directory
- [ ] **[x402apis.io](https://www.x402apis.io/)** — decentralized marketplace for pay-per-call APIs on Solana

#### Crypto & Payments
- [ ] **Base ecosystem** — submit to Base directory, Base builder programs
- [ ] **Coinbase Commerce** — explore x402 as a Coinbase-native payment method
- [ ] **USDC ecosystem** — Circle developer resources, USDC use case showcases
- [ ] **Coinbase AgentKit** — integrate as a payment action; AgentKit gives agents wallets, x402 is built in

#### AI Agent Directories & Marketplaces
- [ ] **[aiagentstore.ai](https://aiagentstore.ai)** — AI agent marketplace/directory for finding and listing agents and agent-purchasable resources
- [ ] **[aiagentsdirectory.com](https://aiagentsdirectory.com/)** — 1,300+ agents listed, independent directory
- [ ] **Hugging Face** — demo space showing agent purchasing workflow
- [ ] **Replicate** — example model/workflow that purchases resources via x402
- [ ] **Mirakl Nexus** — marketplace interoperability platform for agentic commerce
- [ ] **[nullpath](https://docs.nullpath.com/)** — registry for agent-to-agent service discovery via x402

#### Content & Community
- [ ] **Twitter/X thread** — "Your AI agent can now buy things on the internet" with demo video
- [ ] **YouTube demo** — screen recording of agent purchasing flow end-to-end
- [ ] **Hacker News** — Show HN post with the live store
- [ ] **Reddit** — r/cryptocurrency, r/artificial, r/LangChain, r/ChatGPT
- [ ] **Discord communities** — Base, x402, LangChain, CrewAI servers

---

## Phase 3: Product Expansion

- [ ] Multiple products in the store (not just BrushFit)
- [ ] Product catalog API (`/api/products`) for agent browsing
- [ ] Subscription/recurring payment support via x402
- [ ] Agent purchase history (on-chain receipts)
- [ ] Multi-network support (Ethereum mainnet, Arbitrum, Polygon)
- [ ] Non-PDF digital goods (API keys, software licenses, datasets)

---

## Phase 4: Platform

- [ ] Self-serve seller onboarding (anyone can list a product)
- [ ] Agent reputation / trust scores (repeat buyers)
- [ ] Escrow for higher-value transactions
- [ ] Dispute resolution protocol
- [ ] Analytics dashboard (agent vs human purchases, volume, revenue)
- [ ] Affiliate / referral system for agents that recommend products
