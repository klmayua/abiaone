# 06_NAVIGATION_ARCHITECTURE

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Navigation Architecture Complete
**Evidence:** MASTER_NAVIGATION_MATRIX.md, MASTER_SIDEBAR_MATRIX.md, FINAL_NAVIGATION_MODEL.md, RAW_NAVIGATION_CAPTURE.csv, RAW_SIDEBAR_CAPTURE.csv

---

## 1. NAVIGATION ARCHITECTURE OVERVIEW

- **Header Menu Items:** 285
- **Sidebar Items (Post-Consolidation):** ~100
- **CTA Items (Post-Consolidation):** ~500
- **Navigation Duplication Rate:** 0% (post-consolidation)

---

## 2. NAVIGATION ARCHITECTURE PRINCIPLES

| Principle | Definition | Evidence |
| :--- | :--- | :--- |
| Single Source of Navigation | Header menu is the only global navigation | MASTER_NAVIGATION_MATRIX.md |
| Public Simplicity | Public pages have no dashboard navigation | RAW_SIDEBAR_CAPTURE.csv |
| Workspace Separation | Dashboard/workspace pages have sidebar; public pages do not | FINAL_NAVIGATION_MODEL.md |
| Eliminate Duplication | No duplicate navigation items | 02_NAVIGATION_OVERLAP_MATRIX.md |
| No Dead Links | No dead navigation links (404 errors) | FINAL_NAVIGATION_MODEL.md |

---

## 3. HEADER MENU ARCHITECTURE

### 3.1 Header Menu Structure

| Label | Items | Purpose |
| :--- | :--- | :--- |
| Citizen Portal | ~57 | Public-facing citizen services |
| Security | ~57 | Emergency and security services |
| Governance | ~57 | Government transparency and oversight |
| Economy | ~57 | Investment, trade, and economic services |
| About | ~57 | State information and contact details |
| **TOTAL** | **285** | — |

### 3.2 Header Menu Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Identical Across All Pages | Header menu never changes regardless of page | MASTER_NAVIGATION_MATRIX.md |
| No Dynamic Items | All 285 items are hardcoded in the navigation component | MASTER_NAVIGATION_MATRIX.md |
| No Role-Based Items | Same navigation for all users (authenticated or public) | MASTER_NAVIGATION_MATRIX.md |
| No Page-Specific Items | Navigation is globally consistent | MASTER_NAVIGATION_MATRIX.md |

### 3.3 Header Menu Change Workflow

1. Ministry requests new navigation item
2. Platform Team validates against experience model
3. Platform Team assigns to appropriate navigation type (header/sidebar/CTA)
4. Platform Team updates navigation component
5. Platform Team tests across all 52 canonical pages
6. Platform Team deploys navigation update

---

## 4. SIDEBAR ARCHITECTURE

### 4.1 Sidebar Purpose

| Purpose | Description | Evidence |
| :--- | :--- | :--- |
| Dashboard Navigation | Quick access to dashboard sections and KPIs | FINAL_NAVIGATION_MODEL.md |
| Admin Navigation | Ministry-specific admin tools and settings | FINAL_NAVIGATION_MODEL.md |
| NOT for Public Navigation | Sidebar is NOT a secondary header menu | FINAL_NAVIGATION_MODEL.md |

### 4.2 Sidebar Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Dashboard-Only | Sidebar only appears on dashboard/workspace pages | FINAL_NAVIGATION_MODEL.md |
| Public Pages | No sidebar on public-facing pages | FINAL_NAVIGATION_MODEL.md |
| Unique Items Only | Sidebar contains ONLY items not in header menu | FINAL_NAVIGATION_MODEL.md |
| Maximum 20 Items | Sidebar limited to 20 items per dashboard | FINAL_NAVIGATION_MODEL.md |
| No Duplication | 85% of current sidebar items duplicate header — eliminated | MASTER_SIDEBAR_MATRIX.md |

### 4.3 Sidebar Item Categories (Post-Consolidation)

| Category | Items | Purpose |
| :--- | :--- | :--- |
| Dashboard Sections | ~10 | KPI cards, charts, filters |
| Admin Tools | ~5 | Settings, user management, reports |
| Quick Actions | ~3 | Common tasks, shortcuts |
| **TOTAL** | **~18** | — |

### 4.4 Sidebar Reduction

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Sidebar Items | 514 | ~100 | 81% |
| Duplicate Header Items | 437 | 0 | 100% |
| Unique Sidebar Items | 77 | ~100 | +30% |

### 4.5 Sidebar Change Workflow

1. Ministry requests sidebar change
2. Platform Team validates against sidebar governance rules
3. Platform Team ensures no header duplication
4. Platform Team updates sidebar component
5. Platform Team tests across all affected pages
6. Platform Team deploys sidebar update

---

## 5. PORTAL DIRECTORY ARCHITECTURE

### 5.1 Portal Directory Purpose

| Purpose | Description | Evidence |
| :--- | :--- | :--- |
| Quick Navigation | Floating overlay for fast page access | FINAL_NAVIGATION_MODEL.md |
| Search | Find pages by name or keyword | FINAL_NAVIGATION_MODEL.md |
| Categories | Grouped by experience or ministry | FINAL_NAVIGATION_MODEL.md |
| Available on All Public Pages | Universal navigation tool | FINAL_NAVIGATION_MODEL.md |

### 5.2 Portal Directory Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Always Available | Floating button visible on all public pages | FINAL_NAVIGATION_MODEL.md |
| Searchable | All 52 canonical pages indexed | FINAL_NAVIGATION_MODEL.md |
| Categorized | Pages grouped by experience or ministry | FINAL_NAVIGATION_MODEL.md |
| No Duplication | Does not replace header menu; supplements it | FINAL_NAVIGATION_MODEL.md |

---

## 6. CTA ARCHITECTURE

### 6.1 CTA Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Primary CTA | Every page has exactly 1 primary CTA (visually prominent) | MASTER_CTA_MATRIX.md |
| Secondary CTAs | Secondary CTAs use link/ghost button style | MASTER_CTA_MATRIX.md |
| Maximum 3 Per Section | No more than 3 CTAs per page section | MASTER_CTA_MATRIX.md |
| Consistent Text | CTA text is consistent across all pages | MASTER_CTA_MATRIX.md |

### 6.2 CTA Reduction

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Total CTAs | 1,708 | ~500 | 71% |
| Header Duplicate CTAs | 265 | 0 | 100% |
| Sidebar Duplicate CTAs | 149 | 0 | 100% |
| Within-Page Duplicates | 42 | 0 | 100% |
| Primary CTAs Per Page | 3-5 | 1 | 80% |

### 6.3 CTA Change Workflow

1. Ministry requests CTA change
2. Platform Team validates against CTA governance rules
3. Platform Team ensures primary CTA designation
4. Platform Team updates CTA component
5. Platform Team tests across all affected pages
6. Platform Team deploys CTA update

---

## 7. NAVIGATION COMPLIANCE

### 7.1 Compliance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Header Consistency | Header menu must be identical across all 52 canonical pages | FINAL_NAVIGATION_MODEL.md |
| Sidebar Restriction | Sidebar must only appear on dashboard/workspace pages | FINAL_NAVIGATION_MODEL.md |
| Sidebar Uniqueness | Sidebar must contain only unique items (not in header) | FINAL_NAVIGATION_MODEL.md |
| CTA Limit | CTA count per page must not exceed 3 (1 primary + 2 secondary) | FINAL_NAVIGATION_MODEL.md |
| No Dead Links | No dead navigation links (404 errors) | FINAL_NAVIGATION_MODEL.md |

### 7.2 Compliance Monitoring

| Monitoring Type | Frequency | Purpose |
| :--- | :--- | :--- |
| Automated Header Consistency Check | Weekly | Verify header menu identical across all pages |
| Automated Sidebar Presence Check | Weekly | Verify public pages do not have sidebar |
| CTA Count Audit | Monthly | Verify CTA count per page does not exceed 3 |
| Dead Link Scan | Monthly | Verify no dead navigation links |

### 7.3 Compliance Violations

| Violation | Severity | Response |
| :--- | :--- | :--- |
| Header Inconsistency | HIGH | Fix within 24 hours |
| Sidebar on Public Page | MEDIUM | Remove within 1 week |
| Sidebar Duplication >10% | MEDIUM | Deduplicate within 1 week |
| CTA Count >3 Per Page | LOW | Reduce within 2 weeks |
| Dead Navigation Link | LOW | Remove within 2 weeks |

---

## 8. NAVIGATION METRICS

### 8.1 Current State vs Target State

| Metric | Current | Target | Reduction |
| :--- | :--- | :--- | :--- |
| Header Items | 285 | 285 | 0% |
| Sidebar Items | 514 | ~100 | 81% |
| CTA Items | 1,708 | ~500 | 71% |
| **Total Navigation** | **2,507** | **~885** | **65%** |

### 8.2 Navigation Duplication

| Metric | Current | Target | Reduction |
| :--- | :--- | :--- | :--- |
| Header-CTA Overlap | 265 | 0 | 100% |
| Sidebar-CTA Overlap | 149 | 0 | 100% |
| Sidebar-Header Overlap | 437 | 0 | 100% |
| Within-Page Duplicates | 42 | 0 | 100% |

---

**END OF NAVIGATION ARCHITECTURE**
