# Cleanup Recommendations

*This document outlines recommendations only. No files have been deleted, moved, or modified.*

## 1. Route Consolidation
- **Recommendation:** Merge `serve-abia-2` and `serve-abia-3` into `/serve-abia`. Combine mobile mockups into reactive layout viewports using Tailwind viewport containers.
- **Rationale:** Reduces Next.js route bloating and resolves index overlap.

## 2. Folder Hierarchy Restructuring
- **Recommendation:** Reorganize flat routes into nested Next.js directory folders:
  - `/ministry-of-agriculture` (Citizen view)
  - `/ministry-of-agriculture/admin` (Admin view)
  - `/secure-abia/dashboard` (Command Dashboard)
  - `/secure-abia/feed` (Incident Feed)
- **Rationale:** Restores standard folder-based router architecture.

## 3. Sidebar Cleanup
- **Recommendation:** Strip sidebars from public marketing pages like `/secure-abia` (which violates sidebar rule) and preserve them only for dashboard workspaces like `/governors-command-center`.
- **Rationale:** Standardizes page layout templates.
