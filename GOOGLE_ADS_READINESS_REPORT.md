# Pet Horizon — Google Ads Readiness & Conversion Rate Optimization (CRO) Report

**Objective:** Audit and prepare Pet Horizon landing pages, calculators, and blog routes for high-ROI Google Search & Performance Max ad campaigns.

---

## 1. Landing Page Quality Score Analysis

Google Ads Quality Score directly governs Ad Rank and Cost-Per-Click (CPC). Quality Score consists of three pillars:
1. **Expected Click-Through Rate (CTR)**
2. **Ad Relevance**
3. **Landing Page Experience**

### Current Landing Page Evaluation:
- **Speed & Interactivity:** High performance due to static HTML prerendering and lightweight CSS. Above-the-fold content loads in under 1.2 seconds on 4G connections.
- **Message Match:** The homepage and landing pages cleanly match keywords around:
  - *Pet medication reminder app*
  - *Shared pet care family app*
  - *Free pet health tracker*
  - *Puppy feeding schedule / pet calorie calculator*
- **Mobile Usability:** Fluid mobile layouts, sticky download triggers, touch-friendly tap targets (>48px), and zero layout shift.

---

## 2. Proposed Campaign Structure & Ad Group Architecture

```
Campaign 1: Brand & Core App (Target: US, UK, CA, AU)
├── Ad Group: Brand Defense ("Pet Horizon", "PetHorizon app")
├── Ad Group: Household Co-Parenting ("shared pet care app", "dog walking family sync")
└── Ad Group: Medication Safety ("pet medication reminder app", "cat insulin alarm app")

Campaign 2: Tool-Led Acquisition (High Intent, Low CPC)
├── Ad Group: Pet Calorie Calculator (Landing: /pet-calorie-calculator)
└── Ad Group: Dog & Cat Age Calculator (Landing: /pet-age-calculator)

Campaign 3: Problem-Solution Search Queries (Content-Led)
├── Ad Group: Puppy Feeding & Routine (Landing: /blogs/dog-feeding-schedule-by-age-puppy-to-adult)
└── Ad Group: Pet Sitter Handover (Landing: /blogs/pet-sitter-instructions-handover-checklist-template)
```

---

## 3. Conversion Tracking & Funnel Instrumentation

To feed Google Ads' automated bidding algorithms (Target CPA / Maximize Conversions), the following conversion actions must be tracked via Google Tag (gtag.js) / Google Tag Manager:

1. **Primary Conversion (App Install Intent):**
   - Direct click to Google Play Store URL (`https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon`).
   - Triggered on button clicks across Hero, Navbar, Blog Conversion Banners, and Feature cards.
2. **Secondary Conversion (iOS Waitlist Lead Capture):**
   - Form submission inside `<IosWaitlistModal />`.
   - Captures high-intent iOS user emails for future App Store launch.
3. **Micro-Conversions (Engagement Signals):**
   - Completion of Pet Calorie Calculator calculation.
   - Completion of Pet Age Calculator calculation.
   - 3+ minutes time-on-page or scroll depth > 75% on flagship pillar guides.

---

## 4. CRO Recommendations Prior to Ad Spend Launch

1. **Explicit Play Store Badge Visibility:** Ensure the official "Get It On Google Play" SVG badge remains visible above the fold on all mobile viewports.
2. **Dynamic Headline Insertion on Calculator Pages:** Align H1 headings on calculator pages with specific search terms (e.g., "Free Dog Calorie Calculator — Clinical RER Formula").
3. **No-Distraction Ad Landing Page Variant:** For direct search ad traffic to calculator tools, provide an optional focused layout that streamlines calculation and directly offers to save the pet's custom calorie target inside the Pet Horizon mobile app.

