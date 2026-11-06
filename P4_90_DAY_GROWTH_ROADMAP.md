# PET HORIZON — P4 90-DAY ORGANIC SEARCH GROWTH ROADMAP

**Target Domain:** `https://pethorizon.jawumitech.com`  
**Execution Cycle:** Phase 4 Implementation & 90-Day Operational Horizon  
**Start Date:** November 6, 2026  
**Auditor & Planner:** Pet Horizon Growth & Search Strategy Desk

---

## 1. Growth Strategy Framework

Sustainable organic search growth requires disciplined execution across three distinct 30-day phases:
1. **Days 1–30 (Indexing & Technical Foundation):** Resolving live production edge discrepancies, establishing complete GSC and Bing index coverage, and validating analytics baselines.
2. **Days 31–60 (Topical Authority & Content Strengthening):** Fortifying cluster pillars, refining calculator landing page features, and bridging validated keyword gaps.
3. **Days 61–90 (Authority Acquisition & Conversion Optimization):** Earning credible veterinary and pet-care backlinks, promoting embeddable calculators, and optimizing user paths from search result to app installation.

---

## 2. Phase 1: Days 1–30 — Indexing & Technical Foundation

| Task ID | Task Description | Priority | Owner Role | Estimated Effort | Dependency | Success Metric | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T-101** | **Deploy Latest Build to Vercel Production Edge** | P0 (Critical) | DevOps / Operator | 1 Hour | Production deploy approval | Live edge serves latest JS/CSS bundles; `/pet-calorie-calculator` issues HTTP 308 redirect. | Live network curl of `/pet-calorie-calculator` returns HTTP 308 to `/tools/...`. |
| **T-102** | **Verify GSC Sitemap Status & Discovered URLs** | P0 (Critical) | SEO Lead | 2 Hours | T-101 live | Sitemaps report in GSC indicates "Success" with 47 discovered URLs. | GSC Sitemaps dashboard inspection. |
| **T-103** | **Activate Bing Webmaster Tools IndexNow Integration** | P1 (High) | SEO Lead | 2 Hours | Bing account login | IndexNow submissions return HTTP 200/202 rather than HTTP 403. | `npm run submit:indexnow` returns `HTTP 200 OK`. |
| **T-104** | **Submit Priority Priority URLs for Indexing in GSC** | P1 (High) | SEO Lead | 3 Hours | T-101 live | Request indexing on Homepage, Blog Hub, Calculators, Microchip Guide, and Feeding Schedule. | GSC URL Inspection shows "URL is on Google". |
| **T-105** | **Audit GA4 DebugView Telemetry on Live Production** | P1 (High) | Analytics Lead | 2 Hours | T-101 live | `play_store_click`, `calculator_start`, and `calculator_complete` events verified in Realtime/DebugView. | GA4 Realtime Event Stream inspection. |

---

## 3. Phase 2: Days 31–60 — Topical Authority & Content Enhancement

| Task ID | Task Description | Priority | Owner Role | Estimated Effort | Dependency | Success Metric | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T-201** | **Strengthen Feeding & Nutrition Cluster Pillar** | P1 (High) | Editorial Lead | 8 Hours | T-104 indexing | Expand `dog-feeding-schedule` with a 24-hr morning-to-night routine matrix for multi-dog homes. | Content word count, updated date, and internal links verified via `seo-check.js`. |
| **T-202** | **Deploy Interactive Printable PDF Routine Handover** | P2 (Medium) | Frontend Dev | 12 Hours | Design approval | Generate 1-tap printable PDF handover sheet directly from the Pet Sitter Instructions article. | Client-side PDF generation test without third-party dependencies. |
| **T-203** | **Enrich Pet Microchip Guide with Shelter QR Checklist** | P1 (High) | Content Team | 6 Hours | T-104 indexing | Add downloadable universal lookup directory card with direct links to AAHA, Defra, and DAFF portals. | Content audit and link validity test. |
| **T-204** | **Evaluate Initial Query Impressions in GSC Performance** | P2 (Medium) | SEO Lead | 4 Hours | 30 days of data | Identify queries ranking in positions 8–20 with high impressions to refine page H2s and FAQs. | GSC Performance query export. |
| **T-205** | **Launch Calculator Embed Code Generator** | P2 (Medium) | Frontend Dev | 10 Hours | Code review | Provide clean HTML iframe embed snippet on `/tools/pet-calorie-calculator` for external pet bloggers. | Test iframe embedding on standalone test page. |

---

## 4. Phase 3: Days 61–90 — Authority Acquisition & Growth Expansion

| Task ID | Task Description | Priority | Owner Role | Estimated Effort | Dependency | Success Metric | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T-301** | **Digital PR Outreach to Animal Rescue Organizations** | P3 (Medium) | Outreach Lead | 20 Hours | T-205 embed tool | Distribute free WSAVA calorie calculator and 3-3-3 decompression guide to animal shelters. | 5+ non-paid editorial backlink placements from shelter/rescue domains. |
| **T-302** | **Publish Seasonal Content Refreshes Ahead of Summer** | P2 (Medium) | Content Team | 8 Hours | Editorial calendar | Update summer heatstroke and hot pavement rules with verified veterinary cooling protocols. | Publication timestamp updated to 2027 season; sitemap lastmod updated. |
| **T-303** | **Analyze Organic Funnel Conversion Rate (Visitor to Play Click)** | P1 (High) | Analytics Lead | 6 Hours | 60 days of GA4 data | Measure conversion percentage from organic blog landing to `play_store_click`. Target $\ge 2.5\%$. | GA4 Funnel Exploration report. |
| **T-304** | **Authoritative Citations & Fact-Check Review** | P2 (Medium) | Veterinary Reviewer | 8 Hours | Editorial schedule | Audit clinical guidelines against updated 2026/2027 WSAVA and AAHA publications. | Verified review documentation. |
| **T-305** | **Quarterly SEO Audit & Phase 5 Strategy Formulation** | P1 (High) | SEO Lead | 10 Hours | 90 days of metrics | Complete comprehensive technical, indexing, and ranking review for next quarterly cycle. | Phase 5 Strategy Deliverable. |

---

## 5. Risk Assessment & Mitigation Matrix

| Risk Factor | Potential Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Search Engine Core Algorithm Updates** | Fluctuation in organic impressions or rankings. | Maintain strict E-E-A-T grounding, zero thin programmatic content, zero persona spam, and genuine user utility. |
| **Delayed Production Deployment** | Google indexes older build or encounters 404 on shortcut URLs. | Ensure operator executes Vercel deployment of verified `main` commit as the immediate top priority. |
| **High Organic Bounce Rate** | Users read article and leave without installing app. | Continuously refine in-article routine tips, offer immediate tool utility, and keep download CTAs non-intrusive yet prominent. |

