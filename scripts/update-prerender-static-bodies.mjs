import fs from 'fs';

let content = fs.readFileSync('scripts/prerender-seo.js', 'utf8');

// Update changelog bodyHtml
const oldChangelogRegex = /const bodyHtml = `\s*<header style="max-width: 840px[\s\S]*?<\/header>\s*`;/i;
const newChangelog = `const bodyHtml = \`
      <main style="max-width: 840px; margin: 40px auto 20px; padding: 0 16px; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; color: #374151;">
        <nav style="font-size: 12px; color: #6b7280; margin-bottom: 16px;"><a href="/" style="color: #047857; text-decoration: none;">Home</a> &gt; <span>Changelog</span></nav>
        <h1 style="font-size: 32px; font-weight: 800; color: #111827; margin-bottom: 12px;">Pet Horizon Product Changelog &amp; Release Notes</h1>
        <p style="font-size: 16px; color: #4b5563; margin-bottom: 32px;">Track continuous app release updates, interactive veterinary calculators, household sync improvements, and health card features.</p>
        
        <article style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">Version 2.4.0 — Clinical Pet Calculators &amp; Daily Portion Engine</h2>
          <p style="font-size: 14px; color: #6b7280;">Released October 2026</p>
          <p>Introduced the interactive <a href="/tools/pet-calorie-calculator" style="color: #047857; font-weight: 600;">WSAVA Pet Calorie Calculator</a> and <a href="/tools/pet-age-calculator" style="color: #047857; font-weight: 600;">AAHA Pet Age Calculator</a> with biological progression algorithms and portion estimators.</p>
        </article>

        <article style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">Version 2.3.0 — Offline-First Routine Sync &amp; QR Family Onboarding</h2>
          <p style="font-size: 14px; color: #6b7280;">Released October 2026</p>
          <p>Added peer-to-peer household routine synchronization to eliminate double-feeding incidents across multi-caretaker families. Read our <a href="/blogs/household-pet-coparenting-feeding-routine-sync-worldwide" style="color: #047857; font-weight: 600;">household co-parenting guide</a>.</p>
        </article>

        <footer style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
          <p>&copy; 2026 Pet Horizon. All rights reserved. <a href="/" style="color: #047857;">Home</a> • <a href="/blogs" style="color: #047857;">All Guides</a> • <a href="/tools/pet-calorie-calculator" style="color: #047857;">Calorie Calculator</a> • <a href="/tools/pet-age-calculator" style="color: #047857;">Age Calculator</a> • <a href="/privacy-policy" style="color: #047857;">Privacy Policy</a></p>
        </footer>
      </main>
    \`;`;

content = content.replace(oldChangelogRegex, newChangelog);

// Update privacy-policy bodyHtml
const oldPriv = 'const bodyHtml = `<main style="max-width: 840px; margin: 40px auto; padding: 0 16px;"><h1>${privTitle}</h1><p>${privDesc}</p></main>`;';
const newPriv = `const bodyHtml = \`
      <main style="max-width: 840px; margin: 40px auto; padding: 0 16px; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; color: #374151;">
        <nav style="font-size: 13px; color: #6b7280; margin-bottom: 20px;"><a href="/" style="color: #047857; text-decoration: none;">Home</a> &gt; <span>Privacy Policy</span></nav>
        <h1 style="font-size: 32px; font-weight: 800; color: #111827; margin-bottom: 16px;">\${escapeHtml(privTitle)}</h1>
        <p style="font-size: 16px; color: #4b5563; margin-bottom: 24px;">\${escapeHtml(privDesc)}</p>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">1. Zero Third-Party Data Selling</h2>
          <p>Pet Horizon operates on an offline-first privacy framework. We do not sell, rent, monetize, or broker personal identification or medical records of your pets to data brokers, advertising networks, or pharmaceutical marketers.</p>
        </section>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">2. Local Storage and End-to-End Household Synchronization</h2>
          <p>Your pet profiles, vaccination schedules, weight logs, and medication reminder times are stored directly on your device. When household synchronization is enabled, data transmission is encrypted using industry-standard TLS protocols.</p>
        </section>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">3. User Rights under GDPR &amp; CCPA</h2>
          <p>You retain complete ownership of your pet records. You may export your records, request complete account removal, or wipe all synchronized data at any time via our <a href="/data-deletion" style="color: #047857; font-weight: 600;">Data Deletion portal</a>.</p>
        </section>
        <footer style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
          <p>&copy; 2026 Pet Horizon. All rights reserved. <a href="/" style="color: #047857;">Home</a> • <a href="/blogs" style="color: #047857;">Guides</a> • <a href="/tools/pet-calorie-calculator" style="color: #047857;">Calorie Calculator</a> • <a href="/tools/pet-age-calculator" style="color: #047857;">Age Calculator</a> • <a href="/terms-of-service" style="color: #047857;">Terms of Service</a></p>
        </footer>
      </main>
    \`;`;
content = content.replace(oldPriv, newPriv);

// Update terms-of-service bodyHtml
const oldTerms = 'const bodyHtml = `<main style="max-width: 840px; margin: 40px auto; padding: 0 16px;"><h1>${termsTitle}</h1><p>${termsDesc}</p></main>`;';
const newTerms = `const bodyHtml = \`
      <main style="max-width: 840px; margin: 40px auto; padding: 0 16px; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; color: #374151;">
        <nav style="font-size: 13px; color: #6b7280; margin-bottom: 20px;"><a href="/" style="color: #047857; text-decoration: none;">Home</a> &gt; <span>Terms of Service</span></nav>
        <h1 style="font-size: 32px; font-weight: 800; color: #111827; margin-bottom: 16px;">\${escapeHtml(termsTitle)}</h1>
        <p style="font-size: 16px; color: #4b5563; margin-bottom: 24px;">\${escapeHtml(termsDesc)}</p>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">1. Informational &amp; Educational Purpose Only</h2>
          <p>Pet Horizon provides health management software, routine tracking tools, and veterinary references based on WSAVA, AAHA, and AVMA guidelines. The calculations and articles do not constitute veterinary diagnosis or individual clinical advice. Always consult a licensed veterinarian for urgent medical concerns.</p>
        </section>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">2. Permitted Application Use</h2>
          <p>Pet Horizon is licensed for personal, non-commercial household pet care management. Users may sync schedules with family members, co-parents, and professional pet sitters subject to the terms of acceptable usage.</p>
        </section>
        <footer style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
          <p>&copy; 2026 Pet Horizon. All rights reserved. <a href="/" style="color: #047857;">Home</a> • <a href="/blogs" style="color: #047857;">Guides</a> • <a href="/tools/pet-calorie-calculator" style="color: #047857;">Calorie Calculator</a> • <a href="/tools/pet-age-calculator" style="color: #047857;">Age Calculator</a> • <a href="/privacy-policy" style="color: #047857;">Privacy Policy</a></p>
        </footer>
      </main>
    \`;`;
content = content.replace(oldTerms, newTerms);

// Update data-deletion bodyHtml
const oldDel = 'const bodyHtml = `<main style="max-width: 840px; margin: 40px auto; padding: 0 16px;"><h1>${delTitle}</h1><p>${delDesc}</p></main>`;';
const newDel = `const bodyHtml = \`
      <main style="max-width: 840px; margin: 40px auto; padding: 0 16px; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; color: #374151;">
        <nav style="font-size: 13px; color: #6b7280; margin-bottom: 20px;"><a href="/" style="color: #047857; text-decoration: none;">Home</a> &gt; <span>Data Deletion</span></nav>
        <h1 style="font-size: 32px; font-weight: 800; color: #111827; margin-bottom: 16px;">\${escapeHtml(delTitle)}</h1>
        <p style="font-size: 16px; color: #4b5563; margin-bottom: 24px;">\${escapeHtml(delDesc)}</p>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827;">In-App Instant Data Eradication</h2>
          <p>To purge all data directly inside the Pet Horizon Android or Web application: Navigate to Settings &gt; Privacy &amp; Data &gt; Tap 'Delete Account &amp; Erase All Data'. This action instantly clears local cache, database keys, and household sync pairings.</p>
        </section>
        <footer style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
          <p>&copy; 2026 Pet Horizon. All rights reserved. <a href="/" style="color: #047857;">Home</a> • <a href="/privacy-policy" style="color: #047857;">Privacy Policy</a> • <a href="/terms-of-service" style="color: #047857;">Terms of Service</a></p>
        </footer>
      </main>
    \`;`;
content = content.replace(oldDel, newDel);

fs.writeFileSync('scripts/prerender-seo.js', content, 'utf8');
console.log('Successfully updated prerender-seo.js');

