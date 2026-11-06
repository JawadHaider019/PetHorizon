# PET HORIZON — P4 ORGANIC SEARCH BASELINE & TECHNICAL DISCOVERY REPORT

**Platform:** Pet Horizon Web Platform  
**Production Domain:** [https://pethorizon.jawumitech.com](https://pethorizon.jawumitech.com)  
**Repository Branch & Commit:** `main` (commit `ade885a` + local P4 internal linking enhancements)  
**Audit Execution Date:** November 6, 2026  
**Target Markets:** United States, United Kingdom, Canada, Australia, Global English  
**Content Inventory:** 39 Published Pillar Blog Articles + 8 Core Static App Routes  
**Primary Business Conversion:** Google Play Store App Installs  
**Secondary Business Conversion:** iOS Waitlist Submissions  
**GA4 Measurement ID:** `G-FHBNRZ7X6T`

---

## 1. Executive Summary & Verification Paradigm

Phase 4 transitions Pet Horizon from technical infrastructure readiness toward measurable organic search growth, index discoverability, and topical authority. To maintain absolute technical rigor, this audit enforces a dual-tier verification standard:

1. **Local Repository & Build Verification:** Empirical inspection of source code, React 19 architecture, TypeScript definitions, static prerendering pipelines, sitemap generation, and local assets compiled in `dist/`.
2. **Public Production Edge Verification:** Empirical inspection of the live deployment served from `https://pethorizon.jawumitech.com` via network probes.

### Critical P3 Deployment Constraint Status: UNRESOLVED ON LIVE EDGE

The critical deployment discrepancy documented in the Phase 3 audit remains active on the live production edge:
- **Local Verified Build:** Built from commit `ade885a` (and head), generating asset bundles `dist/assets/index-D2tLOt88.js` and `dist/assets/index-uUVpcZXG.css`. Local `vercel.json` provides permanent 308 redirects from `/pet-calorie-calculator` to `/tools/pet-calorie-calculator` and `/pet-age-calculator` to `/tools/pet-age-calculator`.
- **Live Production Edge:** Active edge responses continue to serve the older build bundle `/assets/index-BCQioD5N.js` and CSS `/assets/index-Cy1VJUAY.css`. Probing the shortcut URLs directly on production yields:
  - `GET https://pethorizon.jawumitech.com/pet-calorie-calculator` -> **HTTP 404 Not Found** (Title: `404 Page Not Found | Pet Horizon`)
  - `GET https://pethorizon.jawumitech.com/pet-age-calculator` -> **HTTP 404 Not Found** (Title: `404 Page Not Found | Pet Horizon`)
- **Root Cause & Operational Boundary:** Production deployment has not been redeployed from the latest `main` branch. Per strict instructions, no production deployment, DNS, or hosting mutations were executed during Phase 4.

---

## 2. Technical Infrastructure & SEO Architecture

| Technical Component | Implementation File / Mechanism | Verification Status | Operational Notes |
| :--- | :--- | :--- | :--- |
| **Framework & Engine** | React 19.2.6, Vite 8.0.14, Tailwind CSS 4.3 | Local Build-Verified | Zero runtime build errors; code-split asset chunks. |
| **Static Prerendering** | `scripts/prerender-seo.js` | Local Build-Verified | Generates static HTML snapshots for 48 routes into `dist/`. |
| **Robots Directives** | `public/robots.txt` & `dist/robots.txt` | Production-Verified | HTTP 200 (824 bytes). Allows Googlebot, Bingbot, GPTBot, ClaudeBot. |
| **XML Sitemap** | `public/sitemap.xml` & `dist/sitemap.xml` | Production-Verified | HTTP 200 (23,408 bytes). Indexing 47 URLs with `<lastmod>` and `<image:image>`. |
| **RSS 2.0 Feed** | `public/rss.xml` & `dist/rss.xml` | Production-Verified | HTTP 200 (30,451 bytes). Includes all 39 articles and 2 veterinary calculators. |
| **AI LLM Discovery** | `public/llms.txt` & `public/llms-full.txt` | Production-Verified | HTTP 200 (`llms.txt`: 16,605 bytes; `llms-full.txt`: 246,075 bytes). |
| **Search Engine Meta** | `index.html` head tags | Production-Verified | Google verification `MyQf9lnl3Ehgb9nukwNGGtBxo2QSTifZoSO5w4K50PU`; Bing `5DF3C5A29D03F903CDEA556439A63561`. |
| **Analytics & Telemetry** | `src/utils/analytics.ts` | Local Build-Verified | GA4 `G-FHBNRZ7X6T` deferred queue (`window.dataLayer`), strict TypeScript. |

---

## 3. Complete Baseline Inventory: 39 Blog Articles + Core Routes

Every URL has been verified for canonical integrity, page type, intent, structured data, internal links, and conversion paths.

### A. Core Interactive & Static Platform Routes

| Route | Page Type | Search Intent | Canonical URL | Indexability | Structured Data | Inbound Links | Outbound Links | Primary Conversion |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage | Commercial / Brand | `https://pethorizon.jawumitech.com/` | Index, Follow | `SoftwareApplication`, `Organization`, `FAQPage` | Sitewide Logo | 18 Nav/Footer | Google Play CTA / QR Modal |
| `/blogs` | Blog Hub | Informational Hub | `https://pethorizon.jawumitech.com/blogs` | Index, Follow | `CollectionPage`, `BreadcrumbList` | Nav, Footer, Articles | 39 Article Cards + Tools | Google Play CTA / Category Filter |
| `/tools/pet-calorie-calculator` | Interactive Tool | Utility / Clinical | `https://pethorizon.jawumitech.com/tools/pet-calorie-calculator` | Index, Follow | `WebApplication`, `BreadcrumbList`, `FAQPage` | 14 In-Article Links | 6 Related Guides | In-Tool Android App Sync CTA |
| `/tools/pet-age-calculator` | Interactive Tool | Utility / Clinical | `https://pethorizon.jawumitech.com/tools/pet-age-calculator` | Index, Follow | `WebApplication`, `BreadcrumbList`, `FAQPage` | 18 In-Article Links | 6 Related Guides | In-Tool Android App Sync CTA |
| `/changelog` | Release Portal | Informational | `https://pethorizon.jawumitech.com/changelog` | Index, Follow | Prerendered HTML | Footer, Nav | Version History Links | App Update Notice |
| `/privacy-policy` | Legal / Policy | Legal Compliance | `https://pethorizon.jawumitech.com/privacy-policy` | Index, Follow | Prerendered HTML | Footer | Support Contact | Data Privacy Disclosure |
| `/terms-of-service` | Legal / Policy | Legal Compliance | `https://pethorizon.jawumitech.com/terms-of-service` | Index, Follow | Prerendered HTML | Footer | Support Contact | Legal Agreement |
| `/data-deletion` | Legal / Compliance | User Account Rights | `https://pethorizon.jawumitech.com/data-deletion` | Index, Follow | Prerendered HTML | Footer | In-App Deletion Path | User Data Request Form |

### B. Master 39 Blog Articles Baseline Inventory

| # | Slug | Category | Market | Intent | Word Count | Real Read | In Links | Out Links | Structured Data | Primary Conversion Opportunity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `dog-feeding-schedule-by-age-puppy-to-adult` | Feeding & Nutrition | Global | Info / Actionable | 1,230 | 5 min | 8 | 8 | Article, Breadcrumbs | Daily Meal Routine & Portion Tracker |
| 2 | `puppy-kitten-vaccination-schedule-booster-guide-worldwide` | Health & Vaccines | Global | Info / Clinical | 1,237 | 5 min | 3 | 3 | Article, Breadcrumbs | Clinical Health Card & Booster Alerts |
| 3 | `pet-health-records-medication-schedule-tracker` | Health & Vaccines | Global | Info / Utility | 1,196 | 5 min | 7 | 7 | Article, Breadcrumbs | Medication Alarms & Health Vault |
| 4 | `household-pet-coparenting-feeding-routine-sync-worldwide` | Family & Routine | Global | Info / Practical | 1,050 | 5 min | 3 | 3 | Article, Breadcrumbs | QR Family Hub Caregiver Pairing |
| 5 | `new-puppy-checklist-first-year-budget-guide` | Dog Care | Global | Info / Planning | 1,194 | 5 min | 8 | 8 | Article, Breadcrumbs | First-Year Budget & Supply Tracker |
| 6 | `best-pet-gps-trackers-health-wearables-review-worldwide` | Dog Care | Global | Comm / Review | 1,200 | 5 min | 7 | 7 | Article, Breadcrumbs | Activity Log & Routine Sync |
| 7 | `monthly-pet-care-cost-vet-expense-budget-worldwide` | Dog Care | Global | Info / Financial | 1,117 | 5 min | 3 | 3 | Article, Breadcrumbs | Expense Ledger & Budget Manager |
| 8 | `puppy-kitten-vaccination-schedule-booster-guide-new-york` | Health & Vaccines | US (NYC) | Info / Regional | 1,185 | 5 min | 2 | 4 | Article, Breadcrumbs | DOHMH Dog License & Rabies Alerts |
| 9 | `household-pet-coparenting-feeding-routine-sync-london` | Family & Routine | UK (London) | Info / Regional | 935 | 4 min | 2 | 5 | Article, Breadcrumbs | Microchip & Double-Feeding Prevention |
| 10 | `monthly-pet-care-cost-vet-expense-budget-toronto` | Dog Care | CA (Toronto) | Info / Regional | 990 | 4 min | 2 | 5 | Article, Breadcrumbs | Toronto Pet Licensing & Budget Ledger |
| 11 | `best-pet-gps-trackers-health-wearables-review-sydney` | Dog Care | AU (Sydney) | Comm / Regional | 943 | 4 min | 2 | 6 | Article, Breadcrumbs | Beach & Bushwalk Activity Tracking |
| 12 | `feline-kidney-disease-dehydration-cornell` | Cat Care | Global | Info / Clinical | 1,243 | 6 min | 8 | 8 | Article, Breadcrumbs | Feline Hydration & Medication Alarms |
| 13 | `emergency-vet-symptoms-red-flags-petmd` | Health & Vaccines | Global | Clinical / Urgent | 910 | 4 min | 5 | 5 | Article, Breadcrumbs | 1-Tap Emergency Health Record Export |
| 14 | `toxic-foods-dogs-cats-poison-checklist` | Feeding & Nutrition | Global | Clinical / Urgent | 1,213 | 5 min | 5 | 5 | Article, Breadcrumbs | Toxin Emergency Vet Contact Vault |
| 15 | `puppy-potty-training-schedule-akc-guide` | Dog Care | Global | Info / Routine | 1,111 | 5 min | 5 | 5 | Article, Breadcrumbs | Hour-by-Hour Potty Reminder Log |
| 16 | `flea-tick-heartworm-prevention-ahs-protocol` | Health & Vaccines | Global | Clinical / Preventive | 795 | 4 min | 3 | 3 | Article, Breadcrumbs | Monthly Parasite Chew Reminders |
| 17 | `pet-calorie-calculator-feeding-guide-apop` | Feeding & Nutrition | Global | Info / Tool | 843 | 4 min | 5 | 5 | Article, Breadcrumbs | Client-Side WSAVA Portion Tool |
| 18 | `cat-feeding-schedule-indoor-enrichment-guide` | Cat Care | Global | Info / Routine | 791 | 4 min | 8 | 8 | Article, Breadcrumbs | Wet vs Dry Schedule & Activity Log |
| 19 | `best-pet-care-apps-medication-reminders-family-sync` | Family & Routine | Global | Comm / Review | 973 | 4 min | 8 | 8 | Article, Breadcrumbs | PetHorizon App Feature Comparison |
| 20 | `dog-separation-anxiety-training-routine-guide` | Dog Care | Global | Behavioral / Routine | 811 | 4 min | 3 | 3 | Article, Breadcrumbs | Alone-Time Milestone & Desensitization Log |
| 21 | `how-to-introduce-kitten-to-older-cat-guide` | Cat Care | Global | Behavioral / Step | 826 | 4 min | 5 | 5 | Article, Breadcrumbs | Phased Scent Swapping & Feeding Hub |
| 22 | `dog-grooming-at-home-beginners-step-by-step-guide` | Dog Care | Global | Info / How-To | 917 | 4 min | 6 | 6 | Article, Breadcrumbs | Recurring Nail & Coat Grooming Alarms |
| 23 | `dog-dental-care-brushing-teeth-periodontal-guide` | Health & Vaccines | Global | Clinical / Hygiene | 847 | 4 min | 8 | 8 | Article, Breadcrumbs | Daily Toothbrushing Adherence Reminder |
| 24 | `pet-sitter-instructions-handover-checklist-template` | Family & Routine | Global | Utility / Template | 1,008 | 4 min | 8 | 8 | Article, Breadcrumbs | QR Code Handover & Pet Profile Sharing |
| 25 | `senior-dog-care-mobility-nutrition-routine-guide` | Dog Care | Global | Clinical / Geriatric | 1,033 | 5 min | 8 | 8 | Article, Breadcrumbs | Joint Supplement & Mobility Logger |
| 26 | `senior-cat-care-health-diet-comfort-guide` | Cat Care | Global | Clinical / Geriatric | 899 | 4 min | 7 | 7 | Article, Breadcrumbs | Weight Monitoring & Blood Pressure Logs |
| 27 | `dog-walking-schedule-by-age-breed-exercise-guide` | Dog Care | Global | Info / Exercise | 1,078 | 5 min | 8 | 8 | Article, Breadcrumbs | Daily Exercise & Bathroom Output Log |
| 28 | `cat-litter-box-problems-causes-solutions-guide` | Cat Care | Global | Behavioral / Clinical | 1,137 | 5 min | 6 | 6 | Article, Breadcrumbs | Elimination Output & Urinalysis Tracking |
| 29 | `pet-travel-checklist-flying-car-trips-vet-records` | Family & Routine | Global | Utility / Travel | 1,040 | 5 min | 6 | 6 | Article, Breadcrumbs | USDA Health Certificate & Digital Passport |
| 30 | `summer-pet-safety-heatstroke-prevention-hot-pavement-guide` | Health & Vaccines | Global | Seasonal / Safety | 955 | 4 min | 6 | 6 | Article, Breadcrumbs | Ambient Temperature Walking Alerts |
| 31 | `winter-pet-care-cold-weather-paw-safety-guide` | Health & Vaccines | Global | Seasonal / Safety | 1,009 | 4 min | 6 | 6 | Article, Breadcrumbs | Hypothermia Red Flags & Paw Care Routine |
| 32 | `multiple-pet-management-multi-dog-cat-household-routines` | Family & Routine | Global | Info / Organization | 957 | 4 min | 7 | 7 | Article, Breadcrumbs | Multi-Pet Profile Switching & Meal Sync |
| 33 | `pet-first-aid-kit-checklist-emergency-preparedness-plan` | Health & Vaccines | Global | Clinical / Emergency | 1,955 | 9 min | 5 | 5 | Article, Breadcrumbs | Emergency Supply Checklist & Vet Numbers |
| 34 | `pet-insurance-vs-savings-fund-vet-cost-guide` | Family & Routine | Global | Comm / Financial | 808 | 4 min | 7 | 7 | Article, Breadcrumbs | Monthly Medical Ledger & Deductible Tracker |
| 35 | `rabbit-feeding-schedule-hay-diet-gi-stasis-guide` | Feeding & Nutrition | Global | Clinical / Exotic | 1,076 | 5 min | 6 | 6 | Article, Breadcrumbs | 85% Hay Ratio & Cecotrope Monitoring |
| 36 | `parrot-bird-daily-routine-chop-diet-sleep-guide` | Feeding & Nutrition | Global | Clinical / Avian | 1,088 | 5 min | 5 | 5 | Article, Breadcrumbs | 12-Hour Sleep Cover & Fresh Chop Timetable |
| 37 | `rescue-dog-3-3-3-rule-decompression-routine-guide` | Dog Care | Global | Behavioral / Routine | 949 | 4 min | 2 | 9 | Article, Breadcrumbs | Decompression Milestone Tracking |
| 38 | `dog-cat-diabetes-insulin-feeding-schedule-guide` | Health & Vaccines | Global | Clinical / Chronic | 979 | 4 min | 7 | 7 | Article, Breadcrumbs | 12-Hour Strict Insulin Alarm & Food Sync |
| 39 | `pet-microchip-registration-lookup-guide` | Health & Vaccines | Global / Tier 1 | Clinical / Legal ID | 1,540 | 7 min | 7 | 4 | Article, Breadcrumbs | 15-Digit Microchip & Registry Vault |

---

## 4. Crawlability, Directives & Structural Indexing

### A. Robots.txt Analysis
- **URL:** `https://pethorizon.jawumitech.com/robots.txt`
- **Headers:** HTTP 200, `Content-Type: text/plain; charset=utf-8`, `Cache-Control: public, max-age=3600`
- **Directives:**
  - `User-agent: *` -> `Allow: /` (Disallows `/data-deletion?step=`, `/assets/chunk-*.map`)
  - Explicit allow blocks for `Googlebot`, `Bingbot`, `Slurp`, `DuckDuckBot`, `Baiduspider`, `YandexBot`.
  - Explicit allow blocks for AI Discovery: `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`.
  - Canonical Sitemap Declaration: `Sitemap: https://pethorizon.jawumitech.com/sitemap.xml`

### B. Sitemap Integrity
- **Total URLs in Sitemap:** 47 (8 Static Core Routes + 39 Blog Articles).
- **Format:** Schema standard XML with `<image:image>` entries for cover imagery.
- **Lastmod Accuracy:** All dates formatted as ISO 8601 `YYYY-MM-DD`.

### C. Prerendered Semantic HTML Snapshot
- Every static prerendered HTML file contains clean `<head>` meta tags (`title`, `description`, `canonical`, OpenGraph, Twitter, JSON-LD) and a semantic `<header>`, `<main>`, `<article>`, and `<footer>` inside `<div id="root">`, enabling instant text discovery by search engine crawlers prior to client-side hydration.

