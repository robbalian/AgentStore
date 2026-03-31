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
- [ ] **[x402.org/ecosystem](https://www.x402.org/ecosystem)** — the official x402 ecosystem directory. Submit AgentStore as a reference store / demo implementation
- [ ] **[x402scan.com](https://www.x402scan.com/)** — x402 ecosystem explorer. Get indexed so agents can discover AgentStore by category, see pricing, and view transaction volume
- [ ] **x402 Bazaar (Coinbase)** — the emerging "App Store" for x402 services. Discovery layer where agents find and pay for APIs/resources in ~200ms
- [ ] **[x402.eco](https://www.x402.eco/)** — "The Payment Layer for AI Agents" ecosystem directory

#### Crypto & Payments
- [ ] **Base ecosystem** — submit to Base directory, Base builder programs
- [ ] **Coinbase Commerce** — explore x402 as a Coinbase-native payment method
- [ ] **USDC ecosystem** — Circle developer resources, USDC use case showcases
- [ ] **Coinbase AgentKit** — integrate as a payment action; AgentKit gives agents wallets, x402 is built in

#### AI Agent Directories & Marketplaces
- [ ] **[aiagentstore.ai](https://aiagentstore.ai)** — AI agent marketplace/directory for finding and listing agents and agent-purchasable resources
- [ ] **Hugging Face** — demo space showing agent purchasing workflow
- [ ] **Replicate** — example model/workflow that purchases resources via x402
- [ ] **Mirakl Nexus** — marketplace interoperability platform for agentic commerce

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
