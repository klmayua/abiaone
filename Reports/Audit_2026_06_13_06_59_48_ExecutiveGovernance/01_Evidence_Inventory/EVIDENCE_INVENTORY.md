# EVIDENCE INVENTORY

**Audit:** ABIA ONE Executive Platform Governance Model v5.0
**Date:** 2026-06-13
**Status:** Phase 01 Complete

---

## 1. PREVIOUS AUDIT FOLDERS DISCOVERED

| Folder | Location | Contents |
| :--- | :--- | :--- |
| `Audit_20260613_012627` | `Reports/` | 13 files: Platform index, registries, governance report |
| `Audit_20260613_013255` | `Reports/` | 13 subfolders: Discovery, Page Registry, Route Registry, Navigation, CTA, Sidebar, Dashboard, Experience, User Journeys, Duplication, Governance Scoring, Recommendations, Final Architecture |
| `Audit_2026_06_13_01_37_40_Governance` | `Reports/` | 14 subfolders: Experience Registry, Page Ownership, Menu Inventory, CTA Inventory, Navigation Flows, Sidebar Analysis, Canonical Pages, Duplicate Detection, User Journeys, Experience Hierarchy, Dashboard Governance, Information Architecture, Consolidation Candidates, Final Governance Model |
| `Audit_2026_06_13_01_43_52_Forensic` | `Reports/` | 14 files: Page Content Forensics (2207 lines), Navigation Forensics, CTA Forensics, Sidebar Forensics, Experience Discovery, Page Family Analysis, Executive Platform Briefing, Final policies |
| `Audit_2026_06_13_01_47_26_Evidence` | `Reports/` | 20 files: Raw capture CSVs (Page, Navigation, CTA, Sidebar, Dashboard), Reference matrices, Experience evidence matrix, Canonical page matrix, Duplication matrix |

---

## 2. RAW EVIDENCE FILES

### 2.1 RAW_PAGE_CAPTURE.csv
- **Location:** `Audit_2026_06_13_01_47_26_Evidence/RAW_PAGE_CAPTURE.csv`
- **Total Records:** 115 pages
- **Unique Routes:** 115
- **Columns:** route, page_title, h1, h2, h3, hero_copy, body_copy, cards, widgets, tables, charts, forms, services, CTA_text, CTA_destinations, navigation_items, sidebar_items, footer_items

### 2.2 RAW_NAVIGATION_CAPTURE.csv
- **Location:** `Audit_2026_06_13_01_47_26_Evidence/RAW_NAVIGATION_CAPTURE.csv`
- **Total Records:** 285 navigation items
- **Unique Menu Types:** 1 (Header Menu)
- **Unique Menu Labels:** 5 (Citizen Portal, Digital Gov, Economy, Governance, Security)
- **Columns:** page, menu_type, menu_label, destination, destination_route, destination_page

### 2.3 RAW_CTA_CAPTURE.csv
- **Location:** `Audit_2026_06_13_01_47_26_Evidence/RAW_CTA_CAPTURE.csv`
- **Total Records:** 1,708 CTAs
- **Columns:** page, CTA_text, CTA_location, CTA_destination, CTA_type

### 2.4 RAW_SIDEBAR_CAPTURE.csv
- **Location:** `Audit_2026_06_13_01_47_26_Evidence/RAW_SIDEBAR_CAPTURE.csv`
- **Total Records:** 514 sidebar items
- **Unique Sidebar Names:** 1 (Dashboard Navigation Panel)
- **Pages with Sidebars:** 99
- **Columns:** page, sidebar_name, sidebar_item, destination

### 2.5 RAW_DASHBOARD_CAPTURE.csv
- **Location:** `Audit_2026_06_13_01_47_26_Evidence/RAW_DASHBOARD_CAPTURE.csv`
- **Total Records:** 3 dashboards
- **Dashboards:** `/`, `/governors-command-center`, `/governors-command-center-mobile`
- **Columns:** dashboard, widget, metric, chart, table, action

---

## 3. REFERENCE MATRICES

| File | Location | Description |
| :--- | :--- | :--- |
| `PAGE_REFERENCE_MATRIX.csv` | Evidence folder | Page metadata matrix |
| `NAVIGATION_REFERENCE_MATRIX.csv` | Evidence folder | Navigation reference data |
| `CTA_REFERENCE_MATRIX.csv` | Evidence folder | CTA reference data |
| `DUPLICATION_MATRIX.csv` | Evidence folder | Duplication analysis |
| `EXPERIENCE_EVIDENCE_MATRIX.md` | Evidence folder | Experience-to-evidence mapping |
| `CANONICAL_PAGE_MATRIX.md` | Evidence folder | Canonical page identification |
| `PAGE_OWNERSHIP_MATRIX.md` | Evidence folder | Page ownership assignments |

---

## 4. FORENSIC REPORTS

| File | Lines | Content |
| :--- | :--- | :--- |
| `PAGE_CONTENT_FORENSICS.md` | 2,207 | Detailed page-by-page analysis with confidence scores |
| `NAVIGATION_FORENSICS.md` | 161 | Menu structure analysis per page |
| `CTA_FORENSICS.md` | 42 | CTA conversion strategy review |
| `SIDEBAR_FORENSICS.md` | 18 | Sidebar justification analysis |
| `PAGE_FAMILY_ANALYSIS.md` | ~100 | Page variant grouping |
| `EXPERIENCE_DISCOVERY.md` | ~100 | Experience identification |

---

## 5. GOVERNANCE REPORTS

| File | Content |
| :--- | :--- |
| `EXPERIENCE_REGISTRY.md` | 10+ experiences defined with purpose, users, outcomes |
| `PAGE_OWNERSHIP_REGISTRY.md` | 110K+ lines of page ownership data |
| `MENU_INVENTORY.md` | Menu structure inventory |
| `MENU_ITEM_REGISTRY.md` | Menu item catalog |
| `CTA_INVENTORY.md` | CTA catalog |
| `CTA_GOVERNANCE_REPORT.md` | CTA governance analysis |
| `NAVIGATION_FLOW_MAP.md` | Navigation flow documentation |
| `NAVIGATION_CONFLICT_REPORT.md` | Navigation conflict identification |
| `SIDEBAR_ANALYSIS.md` | Sidebar analysis |
| `SIDEBAR_JUSTIFICATION_REGISTRY.md` | Sidebar justification catalog |
| `CANONICAL_PAGE_REGISTRY.md` | Canonical page identification |
| `PAGE_VARIANT_REGISTRY.md` | Page variant catalog |
| `DUPLICATE_ANALYSIS.md` | Duplicate page analysis |
| `DUPLICATION_HEATMAP.md` | Duplication intensity mapping |
| `USER_JOURNEY_REGISTRY.md` | User journey catalog |
| `USER_JOURNEY_HEATMAP.md` | User journey intensity mapping |
| `EXPERIENCE_HIERARCHY.md` | Experience hierarchy definition |
| `EXPERIENCE_TO_PAGE_MAP.md` | Experience-to-page mapping |
| `DASHBOARD_REGISTRY.md` | Dashboard catalog |
| `DASHBOARD_GOVERNANCE_REPORT.md` | Dashboard governance analysis |
| `INFORMATION_ARCHITECTURE_REPORT.md` | Information architecture analysis |
| `PLATFORM_STRUCTURE_REPORT.md` | Platform structure documentation |
| `CONSOLIDATION_CANDIDATES.md` | Consolidation candidate identification |
| `CLEANUP_PRIORITY_MATRIX.md` | Cleanup prioritization |

---

## 6. FINAL GOVERNANCE MODELS

| File | Content |
| :--- | :--- |
| `FINAL_PLATFORM_GOVERNANCE_MODEL.md` | Page creation SOP, responsive layout SOP, sidebar SOP |
| `FINAL_PLATFORM_BLUEPRINT.md` | Platform architecture blueprint |
| `FINAL_PLATFORM_HIERARCHY.md` | Platform hierarchy definition |
| `FINAL_PLATFORM_TAXONOMY.md` | Platform taxonomy |
| `FINAL_EXPERIENCE_MODEL.md` | Experience model |
| `FINAL_EXPERIENCE_HIERARCHY.md` | Experience hierarchy |
| `FINAL_NAVIGATION_MODEL.md` | Navigation model |
| `FINAL_NAVIGATION_HIERARCHY.md` | Navigation hierarchy |
| `FINAL_PAGE_OWNERSHIP_MODEL.md` | Page ownership model |
| `FINAL_PAGE_OWNERSHIP.md` | Page ownership assignments |
| `FINAL_DASHBOARD_MODEL.md` | Dashboard model |
| `FINAL_SIDEBAR_POLICY.md` | Sidebar policy |
| `FINAL_CTA_POLICY.md` | CTA policy |
| `FINAL_INFORMATION_ARCHITECTURE.md` | Information architecture |
| `FINAL_CONSOLIDATION_PLAN.md` | Consolidation plan |

---

## 7. CURRENT PROJECT ARTIFACTS

### 7.1 Pages (app/ directory)
- **Total Page Folders:** 84 (some pages are mobile variants)
- **Total Page Files:** 84 `page.tsx` files
- **Device Split:** Desktop and Mobile variants

### 7.2 Components
- **Location:** `components/`
- **Files:** 1 (`PortalDirectory.tsx`)

### 7.3 Supporting Directories
- `hooks/` - Custom React hooks
- `lib/` - Utility libraries
- `styles/` - CSS/Tailwind styles
- `public/` - Static assets

---

## 8. EVIDENCE SUMMARY

| Category | Count | Evidence Source |
| :--- | :--- | :--- |
| **Total Pages** | 115 | RAW_PAGE_CAPTURE.csv |
| **Unique Routes** | 115 | RAW_PAGE_CAPTURE.csv |
| **Total Navigation Items** | 285 | RAW_NAVIGATION_CAPTURE.csv |
| **Unique Menu Labels** | 5 | RAW_NAVIGATION_CAPTURE.csv |
| **Total Sidebar Items** | 514 | RAW_SIDEBAR_CAPTURE.csv |
| **Pages with Sidebars** | 99 | RAW_SIDEBAR_CAPTURE.csv |
| **Total CTAs** | 1,708 | RAW_CTA_CAPTURE.csv |
| **Total Dashboards** | 3 | RAW_DASHBOARD_CAPTURE.csv |
| **Previous Audit Reports** | 80+ | Reports/ directory |
| **Forensic Reports** | 6 | Forensic folder |
| **Governance Reports** | 24 | Governance folder |
| **Final Models** | 15 | Final_Governance_Model folder |

---

## 9. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Evidence Inventory | **COMPLETE** |
| Phase 02: Evidence Completeness | PENDING |
| Phase 03: Visual Verification | PENDING |
| Phase 04: Service Registry | PENDING |
| Phase 05: Capability Registry | PENDING |
| Phase 06: Outcome Registry | PENDING |
| Phase 07: Experience Model | PENDING |
| Phase 08: Page Semantic Mapping | PENDING |
| Phase 09: Navigation Governance | PENDING |
| Phase 10: CTA Governance | PENDING |
| Phase 11: Sidebar Governance | PENDING |
| Phase 12: Dashboard Governance | PENDING |
| Phase 13: Ministry Ownership | PENDING |
| Phase 14: Agency Ownership | PENDING |
| Phase 15: Canonical Structure | PENDING |
| Phase 16: Platform Taxonomy | PENDING |
| Phase 17: Consolidation Model | PENDING |
| Phase 18: Executive Blueprint | PENDING |
