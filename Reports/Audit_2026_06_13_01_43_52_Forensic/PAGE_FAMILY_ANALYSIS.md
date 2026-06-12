# Page Family Analysis

Deconstructs duplicate page families using actual page code comparison.

## 1. The Serve Abia Family
- **Pages:** `/serve-abia`, `/serve-abia-2`, `/serve-abia-3`, `/serve-abia-mobile`
- **Content Comparison:** All four files display the main headline "Serve Abia | Digital Government Services". However, `/serve-abia-2` includes an admin dashboard layout sidebar, while `/serve-abia-mobile` reduces margins for small viewports.
- **Navigation Comparison:** `/serve-abia` uses a global top bar. `/serve-abia-2` uses a side navigation drawer.
- **Canonical Selection:** `/serve-abia` is selected as the canonical production candidate. The others should be retired and merged into a single responsive view.

## 2. The Ministry of Agriculture Family
- **Pages:** `/ministry-of-agriculture`, `/ministry-of-agriculture-2`, `/ministry-of-agriculture-3`, `/ministry-of-agriculture-mobile`
- **Content Comparison:** They share the headline "Ministry of Agriculture | ABIA ONE". `/ministry-of-agriculture-2` details the farm subsidy program, while `-3` details extension services.
- **Canonical Selection:** `/ministry-of-agriculture` (Citizen face) and `/ministry-of-agriculture/admin` (Admin face) are the recommended canonical routes.
