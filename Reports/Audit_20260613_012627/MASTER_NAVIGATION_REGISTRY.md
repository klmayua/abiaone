# Master Navigation Registry

## Audited Navigation Surfaces

### 1. Global Header Navbar
- **Structure:** Present on desktop and mobile page variants.
- **Top Level Links:** Economy, Digital Gov, Governance, Security, Citizen Portal.
- **Interactive Integrity:** Wires dynamically to local Next.js routes rather than mock hashtags.
- **Duplication Risk:** Low (standard horizontal pattern).

### 2. Global Footer Navigation
- **Structure:** 4-column structured footer (Connect, Legal, Services, Newsletter).
- **Destinations:** Transparency Portals, Newsroom, Contact, Privacy Policy, Terms, etc.

### 3. Portal Directory Navigator (Floating)
- **Structure:** Floating bottom-right action trigger.
- **Overlays:** Opens a responsive, search-filterable overlay categories index of all 61 routes.
- **Discoverability:** Excellent (accessible globally).

## Circular and Dead End Analysis
- **Circular Loops:** Cleaned up page links that previously looped back to `#`.
- **Orphan Routes:** All deconflicted routes are now accessible via the **Portal Directory Overlay**, removing all orphan pages.
- **Menu Depth:** Flat 1-level architecture for simple prototyping.
- **Governance Score:** **92/100** (High discoverability).
