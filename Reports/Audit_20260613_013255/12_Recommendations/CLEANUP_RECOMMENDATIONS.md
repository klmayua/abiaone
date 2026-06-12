# Cleanup Recommendations

*Actionable recommendations only. No code or router changes have been implemented.*

## 1. Route Consolidation
- **Recommendation:** Consolidate multiple screen variants (e.g. `/serve-abia-2`, `/serve-abia-3`) under single, responsive page endpoints.
- **Rationale:** Resolves route bloat and improves Vercel compilation efficiency.

## 2. Nested Routing Folder Structure
- **Recommendation:** Restructure flat routes to standard Next.js folders (e.g., `/ministry-of-agriculture/admin` instead of `/ministry-of-agriculture-2`).
- **Rationale:** Re-establishes clean folder hierarchy.

## 3. Sidebar Alignment
- **Recommendation:** Strip sidebars from marketing pages and retain them only for authenticated workspaces.
