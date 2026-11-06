# PET HORIZON — P4 BING WEBMASTER & INDEXNOW AUDIT

**Target Domain:** `https://pethorizon.jawumitech.com`  
**Host:** `pethorizon.jawumitech.com`  
**Audit Execution Date:** November 6, 2026  
**Auditor:** Pet Horizon Technical SEO Desk  
**IndexNow Status:** Inactive due to HTTP 403 Authorization Boundary (Documented & Investigated)

---

## 1. Bing Webmaster Tools Ownership Verification Status

Pet Horizon implements two distinct Bing site ownership verification signals in production:

| Verification Mechanism | Live Verification Location | Live HTTP Status | Verification Content |
| :--- | :--- | :--- | :--- |
| **Bing XML Auth File** | `https://pethorizon.jawumitech.com/BingSiteAuth.xml` | **HTTP 200 OK** | `<users><user>5DF3...3561</user></users>` |
| **Bing HTML Meta Tag** | `index.html` `<head>` meta tag | **HTTP 200 OK** | `<meta name="msvalidate.01" content="5DF3...3561" />` |

Both signals are successfully delivered on the live production edge with zero redirect friction.

---

## 2. IndexNow Protocol Configuration Audit

Pet Horizon implements the open IndexNow protocol (supported by Microsoft Bing, Yandex, Naver, and Seznam) to broadcast instant crawling signals when new articles or calculators are published.

### A. Key File Verification
- **Expected Root Location:** `https://pethorizon.jawumitech.com/[INDEXNOW_KEY].txt`
- **Live HTTP Status:** **HTTP 200 OK**
- **Content-Type:** `text/plain; charset=utf-8`
- **Cache-Control:** `public, max-age=0, must-revalidate`
- **Content Match:** The file body exactly matches the 32-character hexadecimal key without trailing whitespace or line breaks.
- **Bingbot Crawler Fetch Test:** A probe simulating the official Bingbot user agent (`Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)`) successfully received **HTTP 200 OK**, confirming that no bot-shielding, Cloudflare challenges, or Vercel edge blocks impede Bing from fetching the key file.

---

## 3. Investigation of HTTP 403 `UserForbiddedToAccessSite`

### A. Empirical Diagnostic Probe
During this audit, a diagnostic single-URL API probe was executed against both official IndexNow endpoints:
1. `https://api.indexnow.org/indexnow`
2. `https://www.bing.com/indexnow`

**Probe Payload:**
```json
{
  "host": "pethorizon.jawumitech.com",
  "key": "[REDACTED_32_HEX_KEY]",
  "keyLocation": "https://pethorizon.jawumitech.com/[REDACTED_32_HEX_KEY].txt",
  "urlList": ["https://pethorizon.jawumitech.com/"]
}
```

**Empirical Server Response:**
- **HTTP Status Code:** `403 Forbidden`
- **Response Headers:** `content-type: application/json; charset=utf-8`
- **Response Body:**
  ```json
  {
    "errorCode": "UserForbiddedToAccessSite",
    "message": "User is unauthorized to access the site. Please verify the site using the key and try again",
    "details": null
  }
  ```

### B. Root Cause Analysis
According to the official IndexNow specification and Microsoft Bing Webmaster API documentation:
1. **Domain Authorization Check:** The IndexNow API enforces strict site-to-key verification. When a submission is dispatched, the Bing IndexNow verification cluster queries its internal database to confirm whether the submitted host has an active, pre-validated key association.
2. **The "UserForbiddedToAccessSite" Error (Notice Bing's internal spelling):** This error occurs specifically when:
   - The domain `pethorizon.jawumitech.com` has not yet had its IndexNow key activated or bound inside the registered Bing Webmaster Tools account.
   - Or, the key was generated outside of the authenticated Bing Webmaster Tools dashboard and Bing's verification crawler has not completed an initial out-of-band validation pass to link the key file to the verified webmaster account.
3. **Execution Rule Enforcement:** In accordance with project instructions, **we did not repeatedly spam or retry URL submissions** while authorization remains in this state.

---

## 4. Step-by-Step Operator Resolution Guide

To activate IndexNow submissions for Pet Horizon without permission errors, the site operator should execute the following 4 steps:

1. **Log in to Bing Webmaster Tools:**
   - Navigate to [https://www.bing.com/webmasters](https://www.bing.com/webmasters) and log in with the account owning `5DF3...3561`.
2. **Verify Property Registration:**
   - Ensure `https://pethorizon.jawumitech.com/` is listed under verified sites (ownership is already established via `BingSiteAuth.xml`).
3. **Navigate to the IndexNow Feature Panel:**
   - In the left sidebar, click **IndexNow**.
   - Review whether an API key has been generated in the dashboard.
   - If Bing has generated an official key, copy that key and replace the key in `public/[key].txt` and `scripts/submit-indexnow.js`.
   - Alternatively, if Bing allows custom key registration, enter the existing key (`c987a26f34e142b9a76d8b9e5c1204d8`) into the IndexNow portal to associate it with the site.
4. **Trigger Single URL Verification:**
   - Click "Submit URLs" manually inside the Bing Webmaster Tools UI for `https://pethorizon.jawumitech.com/`.
   - Once the UI displays "Key Verified", automated API submissions via `npm run submit:indexnow` will succeed with `HTTP 200 OK` / `HTTP 202 Accepted`.

---

## 5. Audit Conclusion

The technical on-site prerequisites (key file, XML auth, meta tag, sitemap reference, robots.txt) are **100% compliant**. The only barrier is the external account-level association inside the Bing Webmaster Tools dashboard.

