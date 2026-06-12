# Duplication Report

## Duplicate Screen Route Variants
The following routes represent duplicate design views or variants for the same base pages:

| Base Page | Route Variants | Reason for Sprawl | Resolution Recommendation |
| :--- | :--- | :--- | :--- |
| **Serve Abia** | `/serve-abia`, `/serve-abia-2`, `/serve-abia-3`, `/serve-abia-mobile` | Multiple design versions exported from Google Stitch. | Consolidate under `/serve-abia` with responsive layouts. |
| **Ministry of Agriculture** | `/ministry-of-agriculture`, `/ministry-of-agriculture-2`, `/ministry-of-agriculture-3`, `/ministry-of-agriculture-mobile` | Standard citizen view, admin view, and mobile mockup screens. | Restructure into single folder layout: `/ministry-of-agriculture/page` and `/ministry-of-agriculture/admin`. |
| **AI Academy** | `/ai-academy`, `/ai-academy-2`, `/ai-academy-mobile` | Course listings vs detailed course page designs. | Route nesting: `/ai-academy` (catalog) and `/ai-academy/[course]` (details). |
| **Secure Abia** | `/secure-abia`, `/secure-abia-2`, `/secure-abia-3`, `/secure-abia-mobile` | Safety portal, Command dashboard, and incident feed mockups. | Clean up names and split into `/secure/portal` and `/secure/dashboard`. |
